import { next } from "@vercel/edge";

const MOVE_PERMANENTLY = 301;

// Always redirect to the root path (except for files with extension and the root path itself)
// This allows the Angular application to load without the client-side router
export default function middleware(request: Request): Response {
  const url = new URL(request.url);
  const hasFileExtension = /\.\w+$/.test(url.pathname);

  if (hasFileExtension || url.pathname === "/") return next(); // Do nothing

  url.pathname = "/";
  return Response.redirect(url, MOVE_PERMANENTLY);
}
