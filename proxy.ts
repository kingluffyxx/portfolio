import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Match all pages except: api, _next, blog (FR-only), and static files
  matcher: ["/((?!api|_next|_vercel|blog|.*\\..*).*)"],
}
