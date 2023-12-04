"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { AiOutlineLoading } from "react-icons/ai";
import { FaTrash, FaTrashAlt } from "react-icons/fa";

import { api } from "@/trpc/react";

interface ErrorProps {
  code: string;
  message: string;
  path: string[];
}

export function PostComponent() {
  const router = useRouter();
  const [sentence, setSentence] = useState("");
  const [error, setError] = useState("");

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setSentence("");
      setError(""); // Clear errors on success
    },
    onError: (err) => {
      const message = err.data?.zodError?.fieldErrors.twitterUrl;

      if (!message) {
        setError("An unknown error occurred.");
        return;
      }

      if (Array.isArray(message)) {
        setError(message[0] ?? "An unknown error occurred.");
      } else {
        setError(message);
      }
    },
  });

  const deleteAllPosts = api.post.clear.useMutation({
    onSuccess: () => {
      router.refresh();
      setSentence("");
    },
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ sentence: sentence });
        }}
        className="flex flex-row flex-wrap justify-center gap-2"
      >
        <input
          type="text"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          className={`w-2/3 rounded-lg border p-2 text-gray-700 ${
            error ? "border-red-500" : ""
          }`}
          placeholder="I happy my dog died."
        />
        <button
          type="submit"
          className="w-36 self-center rounded-xl bg-blue-500 px-10 py-2 text-center font-semibold text-white transition hover:bg-blue-500/80"
          disabled={createPost.isLoading}
        >
          {createPost.isLoading ? (
            <>
              <AiOutlineLoading className="mr-2 inline-block animate-spin" />
            </>
          ) : (
            "Submit"
          )}
        </button>
        {error && <p className="w-full text-red-500">{error}</p>}
      </form>
    </>
  );
}
