import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getUser1: protectedProcedure.query(({ ctx }) => {
    return ctx.auth.userId;
  }),
  getUser2: protectedProcedure.query(({ ctx }) => {
    return ctx.auth.userId;
  }),
  getUser3: protectedProcedure.query(({ ctx }) => {
    return ctx.auth.userId;
  }),
});
