/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingIncludes: {
        // Ensure Prisma engines and wasm are bundled into server output
        "/src/server/db": [
          "./generated/client/libquery_engine*",
          "./generated/client/query_engine*",
          "./generated/client/schema.prisma",
          "./generated/client/*.node",
          "./generated/client/*.wasm",
        ],
      },    
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
  