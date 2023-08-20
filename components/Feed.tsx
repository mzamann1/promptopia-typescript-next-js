"use client";

import Prompt from "@models/Prompt";
import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

interface IPromptCardListProps {
  data: (typeof Prompt)[];
  handleTagClick: (tag: string) => void;
}

const PromptCardList = ({ data, handleTagClick }: IPromptCardListProps) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((p: any) => (
        <PromptCard
          key={p._id}
          post={p}
          handleTagClick={handleTagClick}
          handleDelete={() => {}}
          handleEdit={() => {}}
        />
      ))}
    </div>
  );
};

function Feed() {
  const [searchText, setSearchText] = useState<string>("");
  const [posts, setPosts] = useState<(typeof Prompt)[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e: any) => {
  };

  const handleTagClick = (tag: string) => {
    const fetchPostsByTags = async () => {
      const response = await fetch(`/api/prompt/public/${tag}`);
      const data = await response.json();
      setPosts(data);
    };

    fetchPostsByTags();
  };

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for "
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>
  );
}

export default Feed;
