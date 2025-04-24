import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from App Router API!' });
}

export async function POST(req:NextRequest){
  const body = await req.json();
  return NextResponse.json({ message: 'This is a POST request', data: body })
}

export async function PUT(req:NextRequest){
  const body = await req.json();
  return NextResponse.json({message:'This is a PUT request', updated:body})
}

export async function DELETE(){
  return NextResponse.json({message:'This is a DELETE request'})
}