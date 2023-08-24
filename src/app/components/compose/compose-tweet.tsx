import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { ComposeTextArea } from ".";

export default function ComposeTweet({
  userAvatarUrl,
}: {
  userAvatarUrl: string;
}) {
  const addPost = async (formData: FormData) => {
    "use server";
    const content = formData.get("content");
    if (content === null) return;
    const supabase = createServerActionClient({ cookies });
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user === null) return;
    const { status } = await supabase
      .from("posts")
      .insert({ content, user_id: user.id });

    if (status === 201) {
      revalidatePath("/");
    } else {
      // throw new Error(statusText);
    }
  };

  return (
    <form
      action={addPost}
      className="flex flex-row p-3 border-white/20 border-b"
    >
      <img
        className="rounded-full w-10 h-10 object-contain"
        src={userAvatarUrl}
      />

      <div className="flex flex-1 flex-col gap-y-4">
        <ComposeTextArea />
        <button className="bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end">
          Postear
        </button>
      </div>
    </form>
  );
}
