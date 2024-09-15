import Link from "next/link";

type Props = {
  label: string;
  count: number;
};

export const TrendingItem = ({ label, count }: Props) => {
  return (
    <div>
      <Link href={"/search?q=" + encodeURIComponent(label)}>
        <span className="text-lg block truncate hover:underline">#{label}</span>
        <span className="text-sm text-zinc-300">{count} posts</span>
      </Link>
    </div>
  );
};

export const TrendingItemSekeleton = () => {
  return (
    <div className="animate-pulse flex flex-col gap-1">
      <div className="bg-zinc-600 w-3/4 h4">ㅤ</div>
      <div className="bg-zinc-600 w-1/4 h4">ㅤ</div>
    </div>
  );
};
