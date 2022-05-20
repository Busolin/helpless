import {
  ArrowLineLeft,
  CaretLeft,
  ChartBar,
  Envelope,
  Folder,
  House,
} from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/cachorro_frentista.jpg";

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
        className={`${
          !open && "rotate-180"
        } absolute top-8 right-6 rounded-full cursor-pointer hover:bg-yellow-300 transition-colors`}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <p className={`${!open && "scale-0"} duration-300 ori text-md`}>
        Olá, <span className="font-bold">usuário</span>!
      </p>
      <div className="flex justify-center mt-10">
        <img
          src={profileImage}
          alt=""
          className={`${
            open ? "w-40 h-40" : "w-8 h-8"
          } duration-300  rounded-full`}
        />
      </div>
      {/* Menu */}
      <div className="flex flex-col mt-10  justify-center">
        <ul>
          <li>
            <Link
              to="/dashboard"
              href=""
              className="transition-colors flex items-center mt-3 hover:bg-yellow-300 p-2 rounded-md"
            >
              <House size={32} className="inline-block" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-neutral-800`}
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/documents"
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
            </Link>
          </li>
          <li>
            <Link
              to="/progress"
              href=""
              className="transition-colors flex items-center mt-1 hover:bg-yellow-300 p-2 rounded-md"
            >
              <ChartBar size={32} className="inline-block" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-neutral-800`}
              >
                Progresso
              </span>
            </Link>
          </li>
          {/* <li>
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
          </li> */}
        </ul>
      </div>
      <div className="absolute bottom-10 left-6">
        <Link to="/" className="">
          <button
            className={`${
              !open && "scale-0"
            } flex gap-2 items-center px-6 py-3 rounded-md font-bold text-zinc-900 hover:bg-yellow-300 hover:text-neutral-900 transition-colors origin-left `}
          >
            <ArrowLineLeft weight="bold" />
            Sair
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
