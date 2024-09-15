"use client";

import type { User } from "@/types/user";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

type Props = {
  user: User;
};

export const RecommendationItem = ({ user }: Props) => {
  const [following, setFollowing] = useState(false);
  const handleFollowButton = () => {
    setFollowing(true);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.slug}`}>
          <img src={user.avatar} alt={user.slug} className="size-full" />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden flex flex-col">
        <Link href={`/${user.slug}`} className="block truncate">
          {user.name}
        </Link>
        <span className="text-zinc-300 text-sm truncate">@{user.slug}</span>
      </div>
      <div className="pl-2 w-20">
        {!following && (
          <Button label="Seguir" onClick={handleFollowButton} size={3} />
        )}
      </div>
    </div>
  );
};

export const RecommendationItemSkeleton = () => {
  return (
    <div className="animate-pulse flex items-center">
      <div className="size-10 mr-2 bg-zinc-600 rounded-full">ㅤ</div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="bg-zinc-600 w-3/4  h4">ㅤ</div>
        <div className="bg-zinc-600 w-1/4 h4">ㅤ</div>
      </div>
    </div>
  );
};
