import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

interface BertResponse {
  text: string;
  sentiment: string;
  confidence: number;
}

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        sentence: z.string().min(1),
        trained: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const url = "http://127.0.0.1:8000/process_text/";

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `text=${encodeURIComponent(input.sentence)}&trained=${encodeURIComponent(input.trained)}`,
        }).catch((error) => {
          console.error(error);
          throw new Error("Error connecting to Bert API");
        })


        const data = (await response.json()) as BertResponse;

        // Your existing logic
        const createdPost = await ctx.db.post.create({
          data: {
            sentence: data.text,
            sentiment: data.sentiment,
            confidence: data.confidence,
            trained: input.trained,
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

  delete: publicProcedure.mutation(({ ctx }) => {
    return ctx.db.post.deleteMany();
  }),
});
