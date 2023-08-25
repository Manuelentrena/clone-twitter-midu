"use client";

import { CreatePost } from "@/app/actions";
import { useRef } from "react";
import { ComposeTextButton } from ".";
export default function ComposeTweet({
  userAvatarUrl,
}: {
  userAvatarUrl: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await CreatePost(formData);
        formRef.current?.reset();
      }}
      className="flex flex-row p-3 border-white/20 border-b"
    >
      <img
        className="rounded-full w-10 h-10 object-contain"
        src={userAvatarUrl}
      />

      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="content"
          rows={4}
          className=" text-xl bg-black placeholder-gray-500 p-3 ml-2 border-white/20 border-b block"
          placeholder="¡¿Que esta pasando?!"
        ></textarea>
        <ComposeTextButton />
      </div>
    </form>
  );
}
