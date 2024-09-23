"use client";

import { user } from "@/data/user";
import type { Tweet } from "@/types/tweet";
import { formatRelativeTime } from "@/utils/format-relative";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faHeart as faHeartfilled,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

type Props = {
  tweet: Tweet;
  hideComments?: boolean;
};

export const Tweetitem = ({ tweet, hideComments }: Props) => {
  const [liked, setLiked] = useState(tweet.liked);

  const handleLikeButton = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex gap-6 p-6 border-b-2 border-zinc-900">
      <div>
        <Link href={`/${tweet.user.slug}`}>
          <img
            src={user.avatar}
            alt={user.name}
            className="size-12 rounded-full"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col lg:flex-row lg:gap-2 lg:items-center">
          <Link href={`/${tweet.user.slug}`}>
            <h2 className="text-base">{user.name}</h2>
          </Link>
          <span className="text-xs text-zinc-500 lg:text-sm">
            @{user.slug} - {formatRelativeTime(tweet.dataPost)}
          </span>
        </div>
        <Link href={`/tweet/${tweet.id}`}>
          <div>{tweet.body}</div>
        </Link>
        <img
          src={tweet.image}
          alt={tweet.body}
          className="rounded-2xl w-full"
        />
        <div className="flex text-zinc-500 gap-10">
          {!hideComments && (
            <div>
              <Link href={`/tweet/${tweet.id}`}>
                <div className="inline-flex items-center gap-2 cursor-pointer">
                  <FontAwesomeIcon icon={faComment} className="size-6" />
                  <span>{tweet.commentCount}</span>
                </div>
              </Link>
            </div>
          )}
          <div>
            <div className="inline-flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon icon={faRetweet} className="size-6" />
              <span>{tweet.retweetCount}</span>
            </div>
          </div>
          <div>
            <div
              className={`inline-flex items-center gap-2 cursor-pointer ${
                liked && "text-red-500"
              }`}
            >
              <FontAwesomeIcon
                icon={liked ? faHeartfilled : faHeart}
                className="size-6"
                onClick={handleLikeButton}
              />
              <span>{tweet.likeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
