import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import PipelineSingleton from "@/transformer/pipeline";

interface TransformerOutput {
  label: string;
  score: number;
}


export const transformerRouter = createTRPCRouter({
  text: publicProcedure.input(
    z.object({
      sentence: z.string().min(1),
    }),
  ).query(async ({ ctx, input }) => {
    try {
      // Get the classification pipeline. When called for the first time,
      // this will load the pipeline and cache it for future use.
      const classifier = await PipelineSingleton.getInstance();

      // Actually perform the classification
      const result = await classifier(input.sentence) as TransformerOutput;

      return result;
    } catch (error) {
      // Handle validation errors
      console.error(error);
    }
  }),
});

// Xenova/bert-base-multilingual-uncased-sentiment