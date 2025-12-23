import { ResponseError } from "@/src/lib/response-error";
import { UTApi } from "uploadthing/server";
import { Compress, EImageType } from 'image-compress';

//have a default param of token:env.UPLOADTHING_TOKEN 
export const utapi = new UTApi({
  // ...options,
});

export async function uploadImage(images){
  const compressor = new Compress({
    size: 512, // Target size in KB
    quality: 0.8,
    type: EImageType.JPEG,
  });
  //reduce size
  let compressed;
  if(images.constructor === Array){
    compressed = images.map(async image => await compressor.compress(image))
  } else {
    compressed = await compressor.compress(images)
  }
  
  //upload image(s) to uploadthing
  const response = await utapi.uploadFiles(compressed)
  //check if error exist in uploadthing response, if exist then throw error
  if (compressed.constructor === Array){
    response.forEach((element) => {
      if (element.error !== null) {
          throw new ResponseError(500, `Created report in database but failed to upload images \n code: ${element.error.code} \n message: ${element.error.message}`)
      }
    })
  } else {
    if (response.error !== null) {
      throw new ResponseError(500, `Created report in database but failed to upload images \n code: ${element.error.code} \n message: ${element.error.message}`)
    }
  }
  return response; 
}
