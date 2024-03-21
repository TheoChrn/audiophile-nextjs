import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"


export async function GET(request: NextRequest) {
  const cookieStore = cookies();
  cookieStore.delete("cart");

  return new NextResponse(JSON.stringify({ message: 'Cookie deleted', success: true,}), {  headers: { 'Content-Type': 'application/json' } });
}