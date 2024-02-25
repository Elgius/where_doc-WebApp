import { authMiddleware } from "@clerk/nextjs";

// when you are working on a page, just add the page on the ignoredRoutes array to avoid always signing up
// eg:  ignoredRoutes: ['/contact']
// i would declare the above array if i am working on the contact us page

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/"],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ["/contact"],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
