"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./input";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  deafultValue?: string;
  hideOnSearch?: boolean;
};

export const SearchInput = ({ deafultValue, hideOnSearch }: Props) => {
  const [searchInput, setSearchInput] = useState(deafultValue ?? "");
  const router = useRouter();
  const pathname = usePathname();

  const handerSearchEnter = () => {
    if (searchInput) {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  };

  if (hideOnSearch && pathname === "/search") return null;

  return (
    <Input
      placeholder="Buscar"
      icon={faMagnifyingGlass}
      filled
      value={searchInput}
      onChange={(t) => setSearchInput(t)}
      onEnter={handerSearchEnter}
    />
  );
};
