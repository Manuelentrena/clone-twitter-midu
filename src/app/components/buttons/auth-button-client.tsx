"use client";

import { Button } from "@nextui-org/react";
import {
  createClientComponentClient,
  type Session,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { GitHubIcon } from "../icons";

export function AuthButton({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="w-full flex items-center justify-center">
      {session === null ? (
        <Button onClick={handleSignIn} type="button">
          <GitHubIcon />
          Sign in with Github
        </Button>
      ) : (
        <Button onClick={handleSignOut} type="button">
          <GitHubIcon />
          Sign out with Github
        </Button>
      )}
    </div>
  );
}
