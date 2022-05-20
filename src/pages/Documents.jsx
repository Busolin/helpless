import React from "react";
import Sidebar from "../components/Sidebar";

function Documents() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />

      <div className="flex flex-col w-1/2">
        <h1 className="text-3xl pl-12 pt-4 pb-5">Documentos</h1>
        <p className="pl-12 text-lg">Inserir atividade</p>
        <form
          action=""
          className="flex flex-col gap-8 mt-4 pl-12 pb-0 
        "
        >
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="hoursInput" className="text-zinc-700">
                  Quantidade de horas
                </label>
                <input
                  type="number"
                  name="hoursInput"
                  id="hoursInput"
                  placeholder="Horas (apenas números)"
                  className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="groupInput" className="text-zinc-700">
                  Grupo da atividade
                </label>
                <input
                  type="text"
                  name="groupInput"
                  id="groupInput"
                  placeholder="Grupo 1, 2 ou 3"
                  className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
                />
              </div>
            </div>

            <label htmlFor="raInput" className="text-zinc-700 mt-4">
              Identidade (R.A.)
            </label>
            <input
              type="text"
              name="raInput"
              id="raInput"
              placeholder="Insira seu R.A. (Apenas números)"
              className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
            />

            <label htmlFor="descriptionActivityInput" className="mt-4">
              Breve descrição da atividade
            </label>
            <textarea
              name="descriptionActivityInput"
              placeholder="Nessa atividade foi aprendido/desenvolvido..."
              id="descriptionActivityInput"
              cols="30"
              rows="6"
              className="resize-none p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
            ></textarea>

            <div className="flex flex-col mt-8">
              <label htmlFor="">Certificado</label>
              {/* <label
                type="password"
                name="form-label"
                for="form-input"
                placeholder=""
                className="form-label inline-block w-2/4 border-2 h-11 border-yellow-300 "
              ></label> */}
              <input
                type="file"
                className="form-label border-2 border-yellow-300 p-2 w-2/4 cursor-pointer"
                id="form-input"
              />
            </div>
          </div>

          <button className="bg-yellow-500 p-4 font-bold focus:border-yellow-500 focus:ring-yellow-700 focus:ring-1 focus:outline-none">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Documents;
