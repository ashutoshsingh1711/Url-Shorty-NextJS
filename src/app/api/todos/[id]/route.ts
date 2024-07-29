import { NextResponse } from "next/server";

export async function GET(request: Request, {params}:{params: {id: string}}) {
    const {id} = params;
    const {searchParams} = new URL(request.url);
    const title = searchParams.get('title');
    return NextResponse.json({
        todos: `Todo ${id} ${title}`
    })
}

export async function POST(request: Request) {
    return NextResponse.json({todo: request.json()})
}