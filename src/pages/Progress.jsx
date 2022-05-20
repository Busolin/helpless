import React from "react";
import Sidebar from "../components/Sidebar";

function Progress() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />

      <div className="flex flex-col w-1/2">
        <h1 className="text-3xl p-12 pb-5">Progresso</h1>

        <div>
          <select
            name="selectGroup"
            id="selectGroup"
            className="p-2 ml-12 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
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
            className="max-w-md p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
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
        </div>
      </div>
    </div>
  );
}

export default Progress;
