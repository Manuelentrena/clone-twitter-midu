"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function ComposeTextButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end"
    >
      {pending ? "...Posteando" : "Postear"}
    </button>
  );
}
