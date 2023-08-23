import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthButtonServer } from "./components/auth-button-server";
import { Tweet } from "./components/tweet";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }
  const { data: posts } = await supabase
    .from("posts")
    .select("*, users(name,avatar_url,user_name)");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      {posts?.map((post) => {
        const { id, content, users } = post;
        const {
          name: userName,
          avatar_url: avatarUrl,
          user_name: userFullName,
        } = users;
        return (
          <Tweet
            key={id}
            userName={userName}
            avatarUrl={avatarUrl}
            userFullName={userFullName}
            content={content}
          />
        );
      })}
    </main>
  );
}
