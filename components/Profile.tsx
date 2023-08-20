import Prompt from "@models/Prompt";
import React from "react";
import PromptCard from "./PromptCard";

interface IProps {
  name: string;
  desc: string;
  data: (typeof Prompt)[];
  handleEdit: (p: any) => void;
  handleDelete: (p: any) => void;
}

const Profile = ({ name, desc, data, handleEdit, handleDelete }: IProps) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-16 prompt_layout">
        {data.map((p) => (
          <PromptCard
            key={p._id}
            post={p}
            handleTagClick={() => {}}
            handleDelete={() => handleDelete && handleDelete(p)}
            handleEdit={() => handleEdit && handleEdit(p)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
