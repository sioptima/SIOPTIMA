/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputFileTracingIncludes: {
            // Ensure Prisma engines and wasm are bundled into server output
            "/src/server/db": [
              "./generated/prisma/libquery_engine*",
              "./generated/prisma/query_engine*",
              "./generated/prisma/schema.prisma",
              "./generated/prisma/*.node",
              "./generated/prisma/*.wasm",
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
  