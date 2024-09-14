import { SigninForm } from "@/components/auth/signin-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-md mx-auto mt-24 flex flex-col gap-8 px-4">
      <Logo size={56} />

      <h1 className="font-bold text-2xl md:text-3xl">Entre na sua conta</h1>
      <div className="flex flex-col gap-6">
        <SigninForm />
      </div>

      <div className="flex flex-col justify-center items-center gap-2 md:flex-row">
        <p className="text-zinc-500">Ainda não tem uma conta?</p>
        <Link href="/signup" className="font-bold hover:underline">
          Cadastre-se
        </Link>
      </div>
    </div>
  );
}
