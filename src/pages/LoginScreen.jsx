import loginImage from "../assets/loginImage.jpg";
import logoUTF from "../assets/logoUTF.png";

function LoginScreen() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img src={loginImage} className="h-screen bg-cover" />
      </div>
      <div className="bg-white w-1/2">
        {/* <img src={logoUTF} alt="" className="w-40" /> */}

        <form
          action=""
          className="flex flex-col gap-8 p-28
        "
        >
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Insira seu email"
              className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Senha</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Insira sua senha"
              className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
            />
          </div>

          <button className="bg-yellow-500 p-4 font-bold">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
