import { user } from "@/data/user";
import { GeneralHeader } from "@/components/ui/general-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { ProfileFeed } from "@/components/profile/profile-feed";

export default function Page() {
  const isMe = true;
  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="flex flex-col">
          <span className="font-bold text-base lg:text-xl">{user.name}</span>
          <span className="text-zinc-500 text-xs lg:text-base">
            {user.postCount} posts
          </span>
        </div>
      </GeneralHeader>

      <section className="border-b-2 border-zinc-900 flex flex-col gap-4">
        <div>
          <div
            className="bg-zinc-500 h-28 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${user.cover})` }}
          />
          <div className="-mt-12 flex justify-between items-end px-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="size-22 rounded-full"
            />
            <div className="w-32">
              {isMe && (
                <Link href={`/${user.slug}/edit`}>
                  <Button size={2} label="Editar perfil" />
                </Link>
              )}

              {!isMe && <Button size={2} label="Seguir" />}
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="text-xl font-bold">{user.name}</div>
          <div className="text-zinc-500">{user.slug}</div>
          <div className="py-4 text-lg text-zinc-500">{user.bio}</div>
          {user.link && (
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faLink} className="size-5 text-zinc-500" />
              <Link href={user.link} target="_blank">
                <div className="py-5 text-lg text-blue-300 cursor-pointer">
                  {user.link}
                </div>
              </Link>
            </div>
          )}
          <div className="my-5 flex gap-6">
            <div className="text-xl text-zinc-500"><span className="text-white">99</span> Seguindo</div>
            <div className="text-xl text-zinc-500"><span className="text-white">99</span> Seguidores</div>
          </div>
        </div>
      </section>

      <ProfileFeed/>
    </div>
  );
}
