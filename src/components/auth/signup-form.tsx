"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignupForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Digite seu nome"
        value={name}
        onChange={(t) => setName(t)}
      />
      <Input
        placeholder="Digite seu email"
        value={email}
        onChange={(t) => setEmail(t)}
      />
      <Input
        placeholder="Digite sua senha"
        value={password}
        onChange={(t) => setPassword(t)}
        password
      />

      <Button label="Criar conta" onClick={handleSubmit} size={1} />
    </>
  );
};
