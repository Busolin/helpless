import React from "react";
import Sidebar from "../components/Sidebar";

function Progress() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />

      <div className="flex flex-col w-1/2">
        <h1 className="text-3xl p-12 pt-4 pb-5">Progresso</h1>

        <div>
          <select
            name="selectGroup"
            id="selectGroup"
            className="cursor-pointer p-2 ml-12 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
          >
            <option value="grupo 1">Grupo 1</option>
            <option value="grupo 2">Grupo 2</option>
            <option value="grupo 3">Grupo 3</option>
          </select>
        </div>

        <div className="pl-12 mt-5">
          <p>Selecione um documento</p>
          <select
            name=""
            id=""
            className="cursor-pointer max-w-md p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
          >
            <option value="opt1">Atividades esportivas.</option>
            <option value="2">Curso de língua estrangeira.</option>

            <option value="3">
              Participação em atividades artísticas e culturais.
            </option>
            <option value="4">
              Participação efetiva na organização de exposições e seminários
              artístico ou cultural.
            </option>
            <option value="5">
              Participação como expositor em exposição artística ou cultural.
            </option>
          </select>

          <p className="mt-5">Você tem 5 pontos dessa atividade. </p>

          <p className="mt-5 ">Das quais:</p>
          <ul className="ml-5 mt-1">
            <li className="list-disc"> Futebol dos crias - 2 pontos</li>
            <li className="list-disc"> Vôlei DACOMP - 2 pontos</li>
            <li className="list-disc"> e-Sports - 1 pontos</li>
          </ul>

          <p className="mt-5">Deseja editar uma atividade?</p>
          <div className="mt-3 flex gap-5">
            <button className="hover:bg-yellow-300 transition-colors bg-yellow-500 px-4 py-2 font-bold focus:border-yellow-500 focus:ring-yellow-700 focus:ring-1 focus:outline-none">
              Sim
            </button>
            <button className="hover:bg-yellow-300 transition-colors bg-yellow-500 px-4 py-2 font-bold focus:border-yellow-500 focus:ring-yellow-700 focus:ring-1 focus:outline-none">
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
