import Prompt from "@models/Prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req: any, { params }: any) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({
      tag: params.tag,
    }).populate("creator");

    if (!prompts)
      return new Response(JSON.stringify("Prompts not found"), { status: 404 });

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
