import type { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: "O trono de ferro!",
    image: "https://franklincovey.com.br/wp-content/uploads/2019/05/1-Game-of-thrones.jpg",
    likeCount: 523,
    commentCount: 51,
    retweetCount: 2,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 21, 14 , 0, 0)
}