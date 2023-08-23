import { Posts } from "@/app/components/List";
import { AuthButtonServer } from "@/app/components/buttons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-[600px] mx-auto border-l border-r border-white/10 min-h-screen">
        <AuthButtonServer />
        <Posts posts={posts} />
      </section>
    </main>
  );
}
