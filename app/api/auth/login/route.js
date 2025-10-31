import { UserService } from "@/server/modules/user/user-service.js";

// // app/api/login/route.js
// export async function POST(request) {
//   try {
//     const { username, password } = await request.json();


//     console.log('Login attempt:', { username, password }); // Untuk debugging

//     let redirectTo = null;
    
//     if (username === "admin" && password === "admin123") 
//       redirectTo = "/dashboard/admin";
//     else if (username === "operator" && password === "operator123") 
//       redirectTo = "/dashboard/operator";
//     else if (username === "hrd" && password === "hrd123") 
//       redirectTo = "/dashboard/hrd";
    
//     if (!redirectTo) {
//       return Response.json(
//         { error: "Invalid credentials" },
//         { status: 401 }
//       );
//     }

//     return Response.json(
//       { redirectTo },
//       { status: 200 }
//     );
    
//   } catch (error) {
//     console.error('Login API error:', error);
//     return Response.json(
//       { error: "Invalid request" },
//       { status: 400 }
//     );
//   }
// }

// jangan dihapusss







// ini alternativ
// pages/api/login.js
// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const { username, password } = req.body;

//     let redirectTo = null;
    
//     if (username === "admin" && password === "admin123") 
//       redirectTo = "/dashboard/admin";
//     else if (username === "operator" && password === "operator123") 
//       redirectTo = "/dashboard/operator";
//     else if (username === "hrd" && password === "hrd123") 
//       redirectTo = "/dashboard/hrd";
    
//     if (!redirectTo) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     return res.status(200).json({ redirectTo });
    
//   } catch (error) {
//     return res.status(400).json({ error: "Invalid request" });
//   }
// }





// app/api/login/route.js
export async function POST(request) {
  try {
    const data = await request.json();
    const user = await UserService.login(data);
    return Response.json({ 
       message: "User logged in successfully" ,
       result: user
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: error.message || "Internal Server Error" },
      { status: error.status || 500 }
    );
  }
}
