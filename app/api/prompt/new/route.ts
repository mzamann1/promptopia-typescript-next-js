import Prompt from "@models/Prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req: any) => {
  const { userId, prompt, tag }: ICreatePostRequest = await req.json();

  try {
    await connectToDB();

    const newPrompt = new Prompt({
      creator: userId,
      tag,
      prompt,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create prompt", { status: 500 });
  }
};
