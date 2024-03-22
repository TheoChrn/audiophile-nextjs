import { NextRequest, NextResponse } from "next/server"
import data from "../../../../data/data.json"


export async function GET(request: NextRequest, context: any) {
  const {params: {slug}} = context
  const products = data.filter((product) => product.category === slug)
  
  if (products === undefined || !products) {
    return NextResponse.json(null)
  }

  return NextResponse.json(products)
}