// import { cookies } from "next/headers";
// import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
// import { revalidatePath } from "next/cache";

export default function ComposeTweet({
  userAvatarUrl,
}: {
  userAvatarUrl: string;
}) {
  return (
    <form className="flex flex-row space-x-3 p-3 border-white/20 border-b">
      <img
        className="rounded-full w-10 h-10 object-contain"
        src={userAvatarUrl}
      />

      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="post"
          rows={4}
          className="w-full text-xl bg-black placeholder-gray-500 p-2 border-white/20 border-b"
          placeholder="¡¿Que esta pasando?!"
        ></textarea>
        <button className="bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end">
          Postear
        </button>
      </div>
    </form>
  );
}
