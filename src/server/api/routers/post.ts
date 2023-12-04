import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";


export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        sentence: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const sentimentScore = Math.random() * 4;

        // Your existing logic
        const createdPost = await ctx.db.post.create({
          data: {
            sentence: input.sentence,
            sentimentScore: sentimentScore,
          },
        });

        return createdPost;
      } catch (error) {
        // Handle validation errors
        console.error(error);
      }
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  clear: publicProcedure.mutation(({ ctx }) => {
    return ctx.db.post.deleteMany();
  }),
});
