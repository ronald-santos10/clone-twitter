import { Tweetitem } from "@/components/tweet/tweet-item";
import { GeneralHeader } from "@/components/ui/general-header";
import { SearchInput } from "@/components/ui/search-input";
import { tweet } from "@/data/tweet";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    q: string | undefined;
  };
};

export default function Page({ searchParams }: Props) {
  if (!searchParams.q) redirect("/");

  return (
    <div>
      <GeneralHeader backHref="/">
          <SearchInput deafultValue={searchParams.q}/>
      </GeneralHeader>
      <div className="border-t-2 border-zinc-900">
        <Tweetitem tweet={tweet}/>
        <Tweetitem tweet={tweet}/>
        <Tweetitem tweet={tweet}/>
        <Tweetitem tweet={tweet}/>
        <Tweetitem tweet={tweet}/>
      </div>
    </div>
  );
}
