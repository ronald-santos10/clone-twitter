import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  backHref: string;
};

export const GeneralHeader = ({ children, backHref }: Props) => {
  return (
    <header className="flex gap-4 items-center p-6">
      <Link
        href={backHref}
        className="cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-zinc-900"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="size-6" />
      </Link>
      <div className=" flex-1">{children}</div>
    </header>
  );
};
