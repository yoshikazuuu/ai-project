import { pipeline } from "@xenova/transformers";

// Define the type for the progress callback function
type ProgressCallback = (progress: number) => void;

// Define the type for the pipeline instance
type PipelineInstance = ReturnType<typeof pipeline>;

// Use the Singleton pattern to enable lazy construction of the pipeline.
// NOTE: We wrap the class in a function to prevent code duplication (see below).
const P = () => class PipelineSingleton {
  static task = 'text-classification';
  static model = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
  static instance: PipelineInstance | null = null;

  static async getInstance(progress_callback?: ProgressCallback): Promise<PipelineInstance> {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, { progress_callback });
    }
    return this.instance;
  }
};

declare const global: {
  PipelineSingleton?: ReturnType<typeof P>;
};

// Check if the environment is not in production
let PipelineSingleton: ReturnType<typeof P>;
if (process.env.NODE_ENV !== 'production') {
  // When running in development mode, attach the pipeline to the
  // global object so that it's preserved between hot reloads.
  // For more information, see https://vercel.com/guides/nextjs-prisma-postgres
  if (!global.PipelineSingleton) {
    global.PipelineSingleton = P();
  }
  PipelineSingleton = global.PipelineSingleton;
} else {
  PipelineSingleton = P();
}

export default PipelineSingleton;
