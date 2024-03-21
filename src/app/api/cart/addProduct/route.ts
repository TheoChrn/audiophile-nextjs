import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const cookieStore = cookies();
  // Définir un cookie
  cookieStore.set('nomDuCookie', 'valeurDuCookie', { path: '/', maxAge: 60 * 60 * 24 });
  return new NextResponse(JSON.stringify({ message: "Cookie défini" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
