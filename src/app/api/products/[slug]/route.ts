import { NextResponse } from "next/server"
import data from "../../../../data/data.json"
import { redirect } from 'next/navigation'
import { Product } from "@/types/types"


export async function GET(request: Request, context: any) {
  const {params: {slug}} = context

  const product = data.find((product) => product.slug === slug)

  if (product === undefined) {
    return NextResponse.json(null)
  }
 


  return NextResponse.json(product)
}