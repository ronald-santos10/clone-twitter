import { tweet } from "@/data/tweet"
import { Tweetitem } from "../tweet/tweet-item"

export const HomeFeed = () => {
    return (
        <div>
            <Tweetitem tweet={tweet}/>
            <Tweetitem tweet={tweet}/>
            <Tweetitem tweet={tweet}/>
            <Tweetitem tweet={tweet}/>
        </div>
    )
}