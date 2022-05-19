import registerImage from "../assets/registerImage.jpg";
import logoUTF from "../assets/logoUTF.png";
import { Link } from "react-router-dom";

function RegisterScreen() {
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

        <form
          action=""
          className="flex flex-col gap-8 lg:p-12 pb-4 
        "
        >
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="" className="text-zinc-700">
                  Nome
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nome"
                  className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="text-zinc-700">
                  Sobrenome
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Sobrenome"
                  className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
                />
              </div>
            </div>

            <label htmlFor="" className="text-zinc-700 mt-4">
              Identidade (R.A.)
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Insira seu R.A. (Apenas números)"
              className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
            />

            <label htmlFor="" className="text-zinc-700 mt-4">
              Senha
            </label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Insira sua senha"
              className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
            />
          </div>

          <button className="bg-yellow-500 p-4 font-bold focus:border-yellow-500 focus:ring-yellow-700 focus:ring-1 focus:outline-none">
            Entrar
          </button>
        </form>

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
