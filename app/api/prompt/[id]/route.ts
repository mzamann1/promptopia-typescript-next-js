import Prompt from "@models/Prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req: any, { params }: any) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt)
      return new Response(JSON.stringify("Prompt not found"), { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const PATCH = async (req: any, { params }: any) => {
  const { prompt, tag } = await req.json();
  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      return new Response(JSON.stringify("Prompt not found"), { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update prompts", { status: 500 });
  }
};

export const DELETE = async (req: any, { params }: any) => {
  const { p } = await req.json();
  try {
    await connectToDB();

    await Prompt.findByIdAndRemove(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update prompts", { status: 500 });
  }
};
