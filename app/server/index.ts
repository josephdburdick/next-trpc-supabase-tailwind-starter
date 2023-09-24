import { publicProcedure, router } from "./trpc"

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [1, 2, 3, 4]
  }),
})

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter
