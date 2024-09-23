import { Tweetitem } from "@/components/tweet/tweet-item";
import { TweetPost } from "@/components/tweet/tweet-post";
import { GeneralHeader } from "@/components/ui/general-header";
import { tweet } from "@/data/tweet";

export default function Page() {
  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="font-bold text-lg">Voltar</div>
      </GeneralHeader>
      <div className="border-t-2 border-zinc-900">
        <Tweetitem tweet={tweet} />

        <div className="border-y-8 border-zinc-900">
            <TweetPost/>
        </div>

        <Tweetitem tweet={tweet} hideComments/>
        <Tweetitem tweet={tweet} hideComments/>
        <Tweetitem tweet={tweet} hideComments/>
      </div>
    </div>
  );
}
