"use client";
import { user } from "@/data/user";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";

export const TweetPost = () => {
  const handleImageUpload = () => {
    console.log("upload");
  };
  const handlePostClick = () => {
    console.log("post");
  };
  return (
    <div className="flex gap-6 p-6 border-b-2 border-zinc-900">
      <div>
        <img
          src={user.avatar}
          alt={user.name}
          className="size-12 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div
          className="min-h-14 outline-none text-lg text-white empty:before:text-zinc-500 empty:before:content-[attr(data-placeholder)]"
          contentEditable
          role="textbox"
          data-placeholder="O que está acontecendo?"
          tabIndex={0}
        />
        <div className="flex justify-between items-center ">
          <div className="cursor-pointer">
            <FontAwesomeIcon
              onClick={handleImageUpload}
              icon={faImage}
              className="size-6"
            />
          </div>
          <div className="w-28">
            <Button label="postar" size={2} onClick={handlePostClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
