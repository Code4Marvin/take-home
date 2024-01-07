import { NextResponse } from "next/server";
import { addComment, getDogs } from "./data";

export async function GET() {
  const dogs = getDogs();
  return NextResponse.json(dogs);
}

export async function POST(request: Request) {
  const { idx, user, text } = await request.json();

  // Check if the idx, user, and text are valid
  if (!idx || !user || !text) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const comment = {
    user,
    text,
  };

  const dog = addComment(idx, comment);
  return NextResponse.json(dog);
}
