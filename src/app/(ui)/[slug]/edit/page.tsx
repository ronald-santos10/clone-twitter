import { user } from "@/data/user";
import { GeneralHeader } from "@/components/ui/general-header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TextArea } from "@/components/ui/textarea";

export default function Page() {
  const isMe = true;
  return (
    <div>
      <GeneralHeader backHref={`/${user.slug}`}>
        <div className="flex flex-col">
          <span className="font-bold text-base lg:text-xl">Editar perfil</span>
        </div>
      </GeneralHeader>

      <section className="flex flex-col gap-4">
        <div>
          <div
            className="flex justify-center items-center gap-4 bg-zinc-500 h-28 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${user.cover})` }}
          >
            <div className="cursor-pointer bg-black/80 flex justify-center items-center size-14 rounded-full">
              <FontAwesomeIcon icon={faCamera} className="size-8" />
            </div>
            <div className="cursor-pointer bg-black/80 flex justify-center items-center size-14 rounded-full">
              <FontAwesomeIcon icon={faXmark} className="size-8" />
            </div>
          </div>
          <div className="-mt-12 px-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="size-22 rounded-full"
            />
            <div className="-mt-24 size-24 flex justify-center items-center">
              <div className="cursor-pointer bg-black/80 flex justify-center items-center size-14 rounded-full">
                <FontAwesomeIcon icon={faCamera} className="size-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 flex flex-col gap-8">
        <label>
          <p className="text-lg text-zinc-500 mb-2">Nome</p>
          <Input placeholder="Digite seu nome" value={user.name} />
        </label>
        <label>
          <p className="text-lg text-zinc-500 mb-2">Bio</p>
          <TextArea
            placeholder="Descreva você mesmo"
            value={user.bio}
            rows={4}
          />
        </label>
        <label>
          <p className="text-lg text-zinc-500 mb-2">Nome</p>
          <Input placeholder="Digite seu link" value={user.link} />
        </label>
        <Button label="Salvar alterações" size={1} />
      </section>
    </div>
  );
}
