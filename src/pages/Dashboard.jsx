import React from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="p-12 pt-4">
        <h1 className="text-3xl pb-5">Dashboard</h1>

        <div className="flex flex-col w-[40vw] justify-center h-[50vh]">
          <div>
            <div className="flex place-content-between">
              <p>Grupo 1</p>
              <p>20 Pontos</p>
            </div>
            <div className="relative h-6 rounded w-full bg-zinc-700">
              <div className="text-center absolute top-0 h-6 w-1/2 rounded bg-yellow-400">
                <span>50%</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex place-content-between mt-4">
              <p>Grupo 2</p>
              <p>10 Pontos</p>
            </div>
            <div className="relative h-6 rounded w-full bg-zinc-700">
              <div className="text-center absolute top-0 h-6 w-1/3 rounded bg-yellow-400">
                <span>30%</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex place-content-between mt-4">
              <p>Grupo 3</p>
              <p>10 Pontos</p>
            </div>
            <div className="relative h-6 rounded w-full bg-zinc-700">
              <div className="text-center absolute top-0 h-6 w-1/3 rounded bg-yellow-400">
                <span>30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
