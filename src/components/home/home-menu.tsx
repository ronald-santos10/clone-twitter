import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faHouse, faUserAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../ui/search-input";
import { NavItem } from "../nav/nav-item";
import { NavLogout } from "../nav/nav-logout";

type Props = {
  closeAction: () => void;
};

export const HomeMenu = ({ closeAction }: Props) => {
  return (
    <div className="lg:hidden fixed inset-0 p-6 bg-black">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <Logo size={32} />
          <div className="cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-zinc-900">
            <FontAwesomeIcon
              icon={faXmark}
              className="size-6"
              onClick={closeAction}
            />
          </div>
        </div>
        <div>
          <SearchInput />
        </div>
        <div>
          <NavItem label="Página inicial" icon={faHouse} href="/home" active />
          <NavItem label="Meu Perfil" icon={faUserAlt} href="/profile" />
          <NavLogout />
        </div>
      </div>
    </div>
  );
};
