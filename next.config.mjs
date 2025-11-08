/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputFileTracingIncludes: {
            // Ensure Prisma engines and wasm are bundled into server output
            "/api/*": [
              "src/server/db/generated/prisma/query_compiler_bg.wasm",
              "src/server/db/generated/prisma/*.wasm",
            ],
          },    
    }
};

export default nextConfig;



// next.config.js
// const nextConfig = {
//     async redirects() {
//       return [
//         {
//           source: '/',
//           destination: '/home',
//           permanent: true,
//         },
//       ];
//     },
//   };
  
//   export default nextConfig;
  