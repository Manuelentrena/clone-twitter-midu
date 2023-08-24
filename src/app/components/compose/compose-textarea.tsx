"use client";
import { useEffect, useRef } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function ComposeTextArea() {
  const { pending } = useFormStatus();
  console.log({ pending });
  const alreadySent = useRef(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current === null) return;

    if (pending !== undefined && alreadySent.current) {
      textAreaRef.current.value = "";
      alreadySent.current = true;
      return;
    }

    alreadySent.current = pending;
  }, [pending]);

  return (
    <textarea
      ref={textAreaRef}
      name="content"
      rows={4}
      className=" text-xl bg-black placeholder-gray-500 p-3 ml-2 border-white/20 border-b block"
      placeholder="¡¿Que esta pasando?!"
    ></textarea>
  );
}
