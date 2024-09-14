import { SignupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-md mx-auto mt-24 flex flex-col gap-8 px-4">
      <Logo size={56} />

      <h1 className="font-bold text-2xl md:text-3xl">Crie a sua conta</h1>
      <div className="flex flex-col gap-6">
        <SignupForm />
      </div>

      <div className="flex flex-col justify-center items-center gap-2 md:flex-row">
        <p className="text-zinc-500">Já tem uma conta?</p>
        <Link href="/signin" className="font-bold hover:underline">
          Entrar no Z
        </Link>
      </div>
    </div>
  );
}
