import { GeneralHeader } from "@/components/ui/general-header";

export default function Page() {
  return (
    <div>
      <GeneralHeader backHref="">
        <div className="flex flex-col">
          <span className="font-bold text-base lg:text-xl">Editar perfil</span>
        </div>
      </GeneralHeader>
    </div>
  );
}
