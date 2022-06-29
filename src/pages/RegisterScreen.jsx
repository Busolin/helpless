import registerImage from "../assets/registerImage.jpg";
import logoUTF from "../assets/logoUTF.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function RegisterScreen() {
  const [name, useName] = useState("");
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");

  return (
    <div className="flex items-center">
      <div className="lg:w-1/2 h-[100vh] hidden lg:block" id="leftSection">
        <img
          src={registerImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white w-full p-6 lg:w-1/2 flex flex-col justify-center h-[100vh]">
        <img
          src={logoUTF}
          alt=""
          className="max-w-[200px] absolute top-10 lg:right-20 right-6"
        />

        <div
          className="flex flex-col gap-8 lg:p-12 pb-4 
        "
        >
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-zinc-700">
                Nome
              </label>
              <input
                value={name}
                onChange={(e) => {
                  useName(e.target.value);
                }}
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-zinc-700 mt-4">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => {
                  useEmail(e.target.value);
                }}
                type="text"
                name="email"
                id="email"
                placeholder="Insira seu email"
                className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-zinc-700 mt-4">
                Senha
              </label>
              <input
                value={password}
                onChange={(e) => {
                  usePassword(e.target.value);
                }}
                type="password"
                name="password"
                id="password"
                placeholder="Insira sua senha"
                className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
              />
            </div>
          </div>

          <button
            onClick={async () => {
              const object = {
                name: name,
                email: email,
                password: password,
              };

              try {
                const login = await fetch("http://localhost:3333/users", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(object),
                }).then((res) => {
                  if (res.status != 200) {
                    throw new Error(`HTTP ERROR ${res.status}`);
                  } else {
                    return res.json();
                  }
                });
              } catch (error) {
                console.error("deu erro");
              }
            }}
            className="bg-yellow-500 p-4 font-bold focus:border-yellow-500 focus:ring-yellow-700 focus:ring-1 focus:outline-none"
          >
            Entrar
          </button>
        </div>

        <p className="lg:pl-12 text-zinc-700">
          Já tem uma conta? Clique{" "}
          <Link to="/">
            <span className="underline underline-offset-1 cursor-pointer text-zinc-500">
              aqui!
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterScreen;
