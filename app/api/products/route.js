import { NextResponse } from "next/server";

export async function GET(req) {
  console.log(req);
  return NextResponse.json({ message: "hello deepak" });
}
