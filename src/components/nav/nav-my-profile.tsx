import { user } from "@/data/user"
import Link from "next/link"

export const NavMyProfile = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="size-10 mr-2 rounded-full overflow-hidden">
                <Link href={`/${user.slug}`}>
                    <img src={user.avatar} alt={user.slug} className="size-full"/>
                </Link>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col">
                <Link href={`/${user.slug}`} className="block truncate">{user.name}</Link>
                <span className="text-zinc-700 text-sm truncate">@{user.slug}</span>
            </div>
        </div>
    )
}