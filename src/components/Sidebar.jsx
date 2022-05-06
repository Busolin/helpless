import {
  CaretLeft,
  ChartBar,
  Envelope,
  Folder,
  Graph,
  House,
} from "phosphor-react";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState("open");

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 h-screen bg-yellow-400 relative px-6 pt-8`}
    >
      <CaretLeft
        size={32}
        weight="fill"
        className={`${
          !open && "rotate-180"
        } absolute top-8 right-6 bg-white rounded-full cursor-pointer hover:bg-yellow-300 transition-colors`}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <p className={`${!open && "scale-0"} duration-300 origin-left text-md`}>
        Olá, <span className="font-bold">usuário</span>!
      </p>

      <div className="flex justify-center mt-10">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className={`${
            !open && "w-8 h-8"
          } duration-300 w-40 h-40 rounded-full`}
        />
      </div>

      {/* Menu */}
      <div className="flex flex-col mt-10  justify-center">
        <ul>
          <li>
            <a
              href=""
              className="transition-colors flex items-center mt-3 hover:bg-yellow-300 p-2 rounded-md"
            >
              <House size={32} className="inline-block" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-neutral-800`}
              >
                Home
              </span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="transition-colors flex items-center mt-1 hover:bg-yellow-300 p-2 rounded-md"
            >
              <Folder size={32} className="inline-block" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-neutral-800`}
              >
                Documentos
              </span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="transition-colors flex items-center mt-1 hover:bg-yellow-300 p-2 rounded-md"
            >
              <ChartBar size={32} className="inline-block" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-neutral-800`}
              >
                Gráfico
              </span>
            </a>
          </li>
          <li>
            <a
              href=""
              className="transition-colors flex items-center mt-1 hover:bg-yellow-300 p-2 rounded-md"
            >
              <Envelope size={32} className="inline-block" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-neutral-800`}
              >
                Certificado
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center mt-60">
        <button className="px-6 py-3 rounded-md bg-neutral-900 text-white">
          Sair
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
