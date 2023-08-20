"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

function CreatePrompt() {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<IPost>({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e: any) => {
    e.preventDefault();

    setSubmitting(true);

    const postRequest: ICreatePostRequest = {
      prompt: post.prompt,
      tag: post.tag,
      userId: session?.user.id,
    };

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify(postRequest),
      });

      if (response.ok) router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
}

export default CreatePrompt;
