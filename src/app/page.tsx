import { api } from "@/trpc/server";
import { PostComponent } from "./_components/post-component";

import { type Post } from "@prisma/client";

const sentimentMap = {
  sadness: "#000000",
  anger: "#ff0000",
  love: "#ff8a8a",
  fear: "#363636",
  happy: "#f6ff00",
};

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
    return (acc + post.score) as number;
  }, 0);

  const averageValue = sumValue / allPosts.length;

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center justify-center text-xl">
        {allPosts.length !== 0 ? (
          <p className="font-bold">
            Average Sentiment is {averageValue.toFixed(2)} with confidence of{" "}
            {(
              100 -
              Math.abs(averageValue - Math.round(averageValue)) / 0.005
            ).toFixed(2)}
            %
          </p>
        ) : (
          <p>No posts.</p>
        )}
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
  const sentiment = post.sentiment as string;
  const score = post.score as number;

  return (
    <div
      key={post.id}
      className="flex w-full flex-col gap-4 rounded-xl border p-4"
    >
      <p className="">{sentence}</p>
      <div className="flex items-center justify-between gap-2">
        <p
          className="w-24 rounded-md border px-2 py-1 text-center text-sm font-light"
          style={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
            backgroundColor: `${(sentimentMap as any)[sentiment]}80`,
          }}
        >
          {sentiment}
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
