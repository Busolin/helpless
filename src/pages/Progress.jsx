import React from "react";
import Sidebar from "../components/Sidebar";

function Progress() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />

      <div className="flex flex-col w-1/2">
        <div>
          <h1 className="text-3xl p-12 pt-4 pb-5">Progresso</h1>

          <div className="flex ">
            <div className="ml-12 mt-4">
              <div className="border-2 border-yellow-400 w-48 p-3">
                <h3 className="font-bold">Palestra Física Buracos Negros</h3>

                <p className="text-left ">Grupo 1</p>

                <p className="text-sm">
                  Palestra sobre física dos buracos negros realizado em 2019
                </p>

                <button className="bg-yellow-600 p-3">Editar</button>
              </div>
            </div>

            <div className="ml-12 mt-4">
              <div className="border-2 border-yellow-400 w-48 p-3">
                <h3 className="font-bold">Palestra Física Buracos Negros</h3>

                <p className="text-left ">Grupo 1</p>

                <p className="text-sm">
                  Palestra sobre física dos buracos negros realizado em 2019
                </p>

                <button className="bg-yellow-600 p-3">Editar</button>
              </div>
            </div>

            <div className="ml-12 mt-4">
              <div className="border-2 border-yellow-400 w-48 p-3">
                <h3 className="font-bold">Palestra Física Buracos Negros</h3>

                <p className="text-left ">Grupo 1</p>

                <p className="text-sm">
                  Palestra sobre física dos buracos negros realizado em 2019
                </p>

                <button className="bg-yellow-600 p-3">Editar</button>
              </div>
            </div>

            <div className="ml-12 mt-4">
              <div className="border-2 border-yellow-400 w-48 p-3">
                <h3 className="font-bold">Palestra Física Buracos Negros</h3>

                <p className="text-left ">Grupo 1</p>

                <p className="text-sm">
                  Palestra sobre física dos buracos negros realizado em 2019
                </p>

                <button className="bg-yellow-600 p-3">Editar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
