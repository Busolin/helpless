import React, { useState } from "react";
import Cookies from "universal-cookie";
import Sidebar from "../components/Sidebar";

function Documents() {
  const [selectValue, setSelectValue] = useState("Grupo 1");

  const cookie = new Cookies();
  const session = cookie.get("session");

  const [title, useTitle] = useState();
  const [hours, useHours] = useState();
  const [grupo, useGrupo] = useState("Grupo 1");
  const [ativ, useAtiv] = useState("1");
  const [desc, useDesc] = useState();

  const [arqValue, useArqValue] = useState();
  const [arq, useArq] = useState();

  return (
    <div className="flex overflow-hidden">
      <Sidebar />

      <div className="flex flex-col w-1/2">
        <h1 className="text-3xl pl-12 pt-4 pb-5">Documentos</h1>
        <p className="pl-12 text-lg">Inserir atividade</p>

        <div className="flex flex-col gap-8 mt-4 pl-12 pb-0">
          <div className="flex flex-col">
            <div>
              <div className="flex flex-col">
                <label htmlFor="title" className="text-zinc-700">
                  Titulo da atividade:
                </label>
                <input
                  value={title}
                  onChange={(e) => {
                    useTitle(e.target.value);
                  }}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Título da atividade"
                  className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="hours" className="text-zinc-700">
                  Quantidade de horas
                </label>
                <input
                  value={hours}
                  onChange={(e) => {
                    useHours(e.target.value);
                  }}
                  type="number"
                  name="hours"
                  id="hours"
                  placeholder="Horas (apenas números)"
                  className="p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="selectGroup">Selecione o grupo</label>
                <select
                  name="selectGroup"
                  id="selectGroup"
                  className="cursor-pointer p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
                  value={grupo}
                  onChange={(e) => {
                    setSelectValue(e.target.value);
                    useGrupo(e.target.value);
                  }}
                >
                  <option value="Grupo 1">Grupo 1</option>
                  <option value="Grupo 2">Grupo 2</option>
                  <option value="Grupo 3">Grupo 3</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="ativ">Selecione a atividade</label>
              {selectValue === "Grupo 1" ? (
                <select
                  name="ativ"
                  id="ativ"
                  className="cursor-pointer p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
                  value={ativ}
                  onChange={(e) => {
                    useAtiv(e.target.value);
                  }}
                >
                  <option value="1">1.Atividades esportivas.</option>
                  <option value="2">2.Curso de língua estrangeira.</option>

                  <option value="3">
                    3.Participação em atividades artísticas e culturais.
                  </option>
                  <option value="4">
                    4.Participação efetiva na organização de exposições e
                    seminários artístico ou cultural.
                  </option>
                  <option value="5">
                    5.Participação como expositor em exposição artística ou
                    cultural.
                  </option>
                </select>
              ) : selectValue === "Grupo 2" ? (
                <select
                  name="ativ"
                  id="ativ"
                  className="cursor-pointer p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
                  value={ativ}
                  onChange={(e) => {
                    useAtiv(e.target.value);
                  }}
                >
                  <option value="1">
                    1.Participação efetiva em Diretórios e Centros Acadêmicos,
                    Entidades de Classe, Conselhos e Colegiados internos à
                    Instituição,
                  </option>
                  <option value="2">
                    2.Participação efetiva em trabalho voluntário, atividades
                    comunitárias, CIPAS, associações de bairros, brigadas de
                    incêndio e associações escolares
                  </option>
                  <option value="3">
                    3.Participação em atividades beneficentes
                  </option>
                  <option value="4">
                    4.Atuação como instrutor em palestras técnicas, seminários,
                    cursos da área específica, desde que não remunerados e de
                    interesse da sociedade
                  </option>
                  <option value="5">
                    5.Engajamento como docente não remunerado em cursos
                    preparatórios e de reforço escolar
                  </option>
                  <option value="6">
                    6.Participação em projetos de extensão e de interesse social
                  </option>
                  <option value="7">7.Monitoria em disciplina do curso</option>
                </select>
              ) : (
                <select
                  name="ativ"
                  id="ativ"
                  className="cursor-pointer p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
                  value={ativ}
                  onChange={(e) => {
                    useAtiv(e.target.value);
                  }}
                >
                  <option value="1">
                    1.Participação em cursos extraordinários da sua área de
                    formação
                  </option>
                  <option value="2">
                    2.Participação em palestras, congressos e seminários
                    técnico-científicos
                  </option>
                  <option value="3">
                    3.Participação como apresentador de trabalhos em palestras,
                    congressos e seminários técnico-científicos
                  </option>
                  <option value="4">
                    4.Participação em projetos de iniciação científica e
                    tecnológica, relacionados com o objetivo do curso
                  </option>
                  <option value="5">
                    5.Participação como expositor em exposições
                    técnico-científicas
                  </option>
                  <option value="6">
                    6.Participação efetiva na organização de exposições e
                    seminários de caráter acadêmico
                  </option>
                  <option value="7">7.Publicações em revistas técnicas</option>
                  <option value="8">
                    8.Publicações em anais de eventos técnico-científicos
                  </option>
                  <option value="9">
                    9.Publicações em periódicos científicos
                  </option>
                  <option value="10">
                    10.Estágio não obrigatório na área do curso
                  </option>
                  <option value="11">
                    11.Trabalho com vínculo empregatício, desde que na área do
                    curso
                  </option>
                  <option value="12">
                    12.Trabalho como empreendedor na área do curso
                  </option>
                  <option value="13">
                    13.Participação em visitas técnicas organizadas pela UTFPR
                  </option>
                  <option value="14">
                    14.Aprovação em disciplinas/unidades curriculares de
                    enriquecimento curricular de interesse do Curso, desde que
                    tais disciplinas/unidades curriculares tenham sido aprovadas
                    pelo Colegiado de Curso
                  </option>
                  <option value="15">
                    15.Participação em Empresa Júnior, Hotel Tecnológico ou
                    Incubadora Tecnológica
                  </option>
                  <option value="16">
                    16.Participação em Projetos multidisciplinares ou
                    interdisciplinares
                  </option>
                  <option value="17">17.Registro de patente</option>
                  <option value="18">18.Registro de software</option>
                </select>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="descriptionActivityInput">
                Descrição da atividade
              </label>
              <textarea
                name="descriptionActivityInput"
                placeholder="Nessa atividade foi aprendido/desenvolvido..."
                id="descriptionActivityInput"
                cols="30"
                rows="6"
                className="resize-none p-2 border-2 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:outline-none"
                value={desc}
                onChange={(e) => {
                  useDesc(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="flex flex-col mt-2 ">
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
                value={arqValue}
                onChange={(e) => {
                  useArq(e.target.files);
                  useArqValue(e.target.value);
                }}
              />
            </div>
          </div>

          <button
            onClick={async () => {
              const object = {
                title: title,
                group: grupo,
                activity: ativ,
                hours: hours,
                description: desc,
                userId: session.user.id,
              };

              const response = await fetch("http://localhost:3333/documents", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + session.token,
                },
                body: JSON.stringify(object),
              }).then((res) => res.json());

              if (arq) {
                var formData = new FormData();
                for (let i = 0; arq && i < arq.length; i++) {
                  formData.append("document", arq[i]);
                }

                // const file = await fetch(
                //   "http://localhost:3333/documents/file/?id=" + response.id,
                //   {
                //     method: "PATCH",
                //     headers: {
                //       "Content-Type": "multipart/form-data",
                //       Authorization: "Bearer " + session.token,
                //     },
                //     body: formData,
                //   }
                // ).then((res) => res.json());
              }

              useTitle("");
              useHours("");
              useGrupo("Grupo 1");
              useAtiv(1);
              useDesc("");
              useArqValue("");

              alert("Documento enviado com sucesso");
            }}
            className="bg-yellow-500 p-4 font-bold focus:border-yellow-500 focus:ring-yellow-700 focus:ring-1 focus:outline-none"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Documents;
