"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const SigninForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Digite seu email..."
        value={email}
        onChange={(t) => setEmail(t)}
      />
      <Input
        placeholder="Digite sua senha..."
        value={password}
        onChange={(t) => setPassword(t)}
        password
      />

      <button onClick={handleSubmit}>Entrar</button>
    </>
  );
};
