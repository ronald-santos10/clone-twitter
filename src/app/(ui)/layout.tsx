import { NavItem } from "@/components/nav/nav-item";
import { NavLogout } from "@/components/nav/nav-logout";
import { NavMyProfile } from "@/components/nav/nav-my-profile";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { RecommendationArea } from "@/components/ui/recommendation-area";
import { SearchInput } from "@/components/ui/search-input";
import { TrendingArea } from "@/components/ui/trending-area";
import {
  faHouse,
  faSearch,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
      <section className="hidden lg:flex flex-col sticky top-0 h-screen w-72 px-6 border-r-2 border-zinc-900">
        <div className="flex-1 flex flex-col gap-11 mt-6">
          <Logo size={24} />
          <nav>
            <NavItem
              label="Página inicial"
              icon={faHouse}
              href="/home"
              active
            />
            <NavItem label="Meu Perfil" icon={faUserAlt} href="/profile" />
          </nav>
        </div>
        <div className="mb-6 flex flex-col gap-4">
          <NavLogout />
          <NavMyProfile />
        </div>
      </section>
      <section className="flex-1 max-w-xl">{children}</section>
      <aside className="hidden lg:flex flex-col gap-6 sticky top-0 h-fit w-96 px-6 py-6 border-l-2 border-zinc-900">
        <SearchInput hideOnSearch />
        <TrendingArea />
        <RecommendationArea />
      </aside>
    </main>
  );
}
