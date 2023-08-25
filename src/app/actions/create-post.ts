"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const CreatePost = async (formData: FormData) => {
  const content = formData.get("content");
  if (content === null || content === "") return;
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
  }
};
