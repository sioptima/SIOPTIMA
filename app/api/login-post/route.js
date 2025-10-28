import { NextResponse } from "next/server";

// Contoh data user (sementara simulasi)
const users = [
  { username: "admin", pass: "admin123", role: "admin" },
  { username: "operator1", pass: "op123", role: "operator" },
  { username: "supervisor1", pass: "sup123", role: "supervisor" },
];

export async function POST(request) {
  try {
    const { username, pass } = await request.json();

    const user = users.find(
      (u) => u.username === username && u.pass === pass
    );

    if (!user) {
      return NextResponse.json(
        { message: "Username atau password salah" },
        { status: 401 }
      );
    }

    // Generate token sederhana (sementara)
    const token = Buffer.from(`${user.username}:${user.role}`).toString("base64");

    return NextResponse.json({
      token,
      role: user.role,
      username: user.username,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
