import { type Post } from "@prisma/client";

import { SubmitForm } from "@/components/emotion/post";

import { api } from "@/trpc/server";

const sentimentMap = {
  sadness: "#9b5de5",
  anger: "#00bbf9",
  love: "#f15bb5",
  fear: "#00f5d4",
  happy: "#fee440",
};

export default async function Twitter() {
  return (
    <>
      <div className="absolute -z-10 -mt-[56px] h-screen w-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-yellow-400/30 via-red-50/0 transition-colors dark:from-cyan-600/50 dark:via-red-50/0" />
      <div className="layout flex flex-col justify-center gap-4 py-10">
        <div className="text-center text-2xl font-bold">
          Sentence Emotion Checker
        </div>
        <SubmitForm />
        <AllData />
      </div>
    </>
  );
}

async function AllData() {
  const allPosts = await api.post.getAll.query();
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center justify-center text-xl">
        {allPosts.length === 0 && <p>No posts.</p>}
      </div>
      {allPosts ? (
        allPosts.map((post) => TweetCard({ post }))
      ) : (
        <p>You have no posts yet.</p>
      )}
    </div>
  );
}

function TweetCard({ post }: { post: Post }) {
  const sentence = post.sentence;
  const sentiment = post.sentiment;
  const confidence = post.confidence;

  return (
    <div
      key={post.id}
      className="flex w-full flex-col gap-4 rounded-md border bg-slate-100 p-4 shadow-md dark:bg-slate-900"
    >
      <p>{sentence}</p>
      <div className="flex items-center justify-between gap-2">
        <p
          className="w-24 rounded-md border px-2 py-1 text-center text-sm font-bold uppercase text-background"
          style={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
            backgroundColor: `${(sentimentMap as any)[sentiment]}`,
          }}
        >
          {sentiment}
        </p>
        <div className="flex gap-2">
          <p
            className="w-fit rounded-md border px-2 py-1 text-center text-sm font-bold text-background"
            style={{
              backgroundColor: post.trained
                ? "hsl(100, 100%, 50%)"
                : "hsl(0, 100%, 50%)",
            }}
          >
            <span className="font-bold text-background">
              {post.trained ? "Trained" : "Untrained"}
            </span>
          </p>

          <p
            className="w-fit rounded-md border px-2 py-1 text-center text-sm font-light"
            style={{ backgroundColor: `hsla(${confidence}, 100%, 50%)` }}
          >
            <span className="font-bold text-background">
              Confidence: {confidence.toPrecision(5)}%
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
