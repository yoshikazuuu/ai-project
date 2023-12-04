import { api } from "@/trpc/server";
import { PostComponent } from "./_components/post-component";

import { Post } from "@prisma/client";

const sentimentMap = {
  0: { sentiment: "sadness", color: "#000000" },
  1: { sentiment: "anger", color: "#ff0000" },
  2: { sentiment: "love", color: "#ff8a8a" },
  3: { sentiment: "fear", color: "#363636" },
  4: { sentiment: "happy", color: "#f6ff00" },
} as const;

type SentimentKey = keyof typeof sentimentMap;

export default async function Twitter() {
  return (
    <div className="layout flex flex-col justify-center gap-4 py-10">
      <div className="text-center text-2xl font-bold">
        Sentence Sentiment Checker
      </div>

      <PostComponent />
      <AllData />
    </div>
  );
}

async function AllData() {
  const allPosts = await api.post.getAll.query();

  const sumValue = allPosts.reduce((acc, post) => {
    return acc + post.sentimentScore;
  }, 0);

  const averageValue = sumValue / allPosts.length;

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center justify-center text-xl">
        <p className="font-bold">
          Average Sentiment is{" "}
          {sentimentMap[Math.round(averageValue) as SentimentKey].sentiment}{" "}
          with confidence of{" "}
          {(
            100 -
            Math.abs(averageValue - Math.round(averageValue)) / 0.005
          ).toFixed(2)}
          %
        </p>
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
  const sentence = post.sentence as string;
  const sentiment =
    sentimentMap[Math.round(post.sentimentScore) as SentimentKey];

  const score = (
    100 -
    Math.abs(post.sentimentScore - Math.round(post.sentimentScore)) / 0.005
  ).toFixed(2);

  return (
    <div
      key={post.id}
      className="flex w-full flex-col gap-4 rounded-xl border p-4"
    >
      <p className="">{sentence}</p>
      <div className="flex items-center justify-between gap-2">
        <p
          className="w-24 rounded-md border px-2 py-1 text-center text-sm font-light"
          style={{ backgroundColor: `${sentiment.color}80` }}
        >
          {sentiment.sentiment}
        </p>
        <p
          className="w-fit rounded-md border px-2 py-1 text-center text-sm font-light"
          style={{ backgroundColor: `hsla(${score}, 100%, 50%, 0.5)` }}
        >
          <span className="font-bold">Confidence: </span>
          {score}%
        </p>
      </div>
    </div>
  );
}
