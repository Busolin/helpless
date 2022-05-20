import { Link } from "react-router-dom";
import loginImage from "../assets/loginImage.jpg";
import logoUTF from "../assets/logoUTF.png";

function LoginScreen() {
  return (
    <div className="flex items-center">
      <div className="lg:w-1/2 h-[100vh] hidden lg:block" id="leftSection">
        <img src={loginImage} alt="" className="w-full h-full object-cover" />
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
            <label htmlFor="emailInput" className="text-zinc-700">
              Email
            </label>
            <input
              type="text"
              name="emailInput"
              id="emailInput"
              placeholder="Insira seu email"
              className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passwordInput" className="text-zinc-700">
              Senha
            </label>
            <input
              type="password"
              name="passwordInput"
              id="passwordInput"
              placeholder="Insira sua senha"
              className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
            />
          </div>
          <Link to="/dashboard">
            <button className="w-full bg-yellow-500 p-4 font-bold focus:border-yellow-500 focus:ring-yellow-700 focus:ring-1 focus:outline-none">
              Entrar
            </button>
          </Link>
        </form>

        <p className="lg:pl-12 text-zinc-700">
          Não tem uma conta? Registre-se{" "}
          <Link to="/register">
            <span className="underline underline-offset-1 cursor-pointer text-zinc-500">
              aqui!
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginScreen;
