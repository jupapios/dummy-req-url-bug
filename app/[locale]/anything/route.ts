import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
  return new Response(
    `request.url: ${request.url} request.nextUrl: ${request.nextUrl}`
  );
}
