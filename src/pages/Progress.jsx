import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import useSWR from "swr";
import Cookies from "universal-cookie";

const fetcher = async (url, token) =>
  await fetch(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then(async (res) => {
      if (res.status !== 200) {
        console.log(res.status);
      }
      const data = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

function Progress() {
  const [isShow, setIsShow] = useState(false);

  const cookie = new Cookies();
  const session = cookie.get("session");

  const { data, error } = useSWR(
    session.token && ["http://localhost:3333/documents", session.token],
    fetcher
  );

  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="flex flex-col">
        <h1 className="text-3xl p-12 pt-4 pb-5">Progresso</h1>

        <div className="flex flex-wrap max-w-[70rem]">
          {data?.map((dados, index) => (
            <Card
              title={dados.title}
              group={dados.group}
              description={dados.description}
              key={index}
              dados={dados.id}
              session={session.token}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Progress;
