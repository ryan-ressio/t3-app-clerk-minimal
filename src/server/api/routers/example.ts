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
  getOrgSlug: protectedProcedure.query(({ ctx }) => {
    return ctx.auth.orgSlug;
  }),
  getOrgId: protectedProcedure.query(({ ctx }) => {
    return ctx.auth.orgId;
  }),
  getUser: protectedProcedure.query(({ ctx }) => {
    return ctx.auth.userId;
  }),
});
