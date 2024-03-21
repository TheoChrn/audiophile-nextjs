import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  const cookieStore = cookies()
  const cart = cookieStore.get("cart");

  
  if (!cart) {
    return NextResponse.json([]);
  
  } else {
    return NextResponse.json(JSON.parse(cart.value) );
  }
 
}
