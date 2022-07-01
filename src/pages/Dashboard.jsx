import React from "react";
import Sidebar from "../components/Sidebar";
import useSWR from "swr";
import Cookies from "universal-cookie";
import { useState } from "react";

const fetcher = async (url, userId) =>
  await fetch(url)
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

function Dashboard() {
  const cookie = new Cookies();
  const session = cookie.get("session");

  const { data, error } = useSWR(
    session.user.id && ["http://localhost:3333/profile?id=" + session.user.id],
    fetcher
  );

  const pointsGroup1 = data?.groupPoints["Grupo 1"];
  const pointsGroup2 = data?.groupPoints["Grupo 2"];
  const pointsGroup3 = data?.groupPoints["Grupo 3"];

  const [point1, usePoint1] = useState(0);
  const [point2, usePoint2] = useState(0);
  const [point3, usePoint3] = useState(0);
  const [isLoaded, useIsLoaded] = useState(false);

  if (data && !isLoaded) {
    usePoint1(Math.round(pointsGroup1 * 3.33));
    usePoint2(Math.round(pointsGroup2 * 3.33));
    usePoint3(Math.round(pointsGroup3 * 2.5));

    useIsLoaded(true);
  }

  console.log("pointgroup3: ", pointsGroup3);
  console.log("point3: ", point3);

  return (
    <div className="flex ">
      <Sidebar />

      <div className="p-12 pt-4">
        <h1 className="text-3xl pb-5">Dashboard</h1>

        <div className="flex flex-col w-[40vw] justify-center h-[50vh]">
          <div>
            <div className="flex place-content-between">
              <p>Grupo 1</p>
              <p>{pointsGroup1} pontos</p>
            </div>
            <div className="relative h-6 rounded w-full bg-zinc-700">
              <div
                style={{
                  width: `${point1}%`,
                }}
                className={
                  "text-center absolute top-0 h-6 w-" +
                  (point1 == 100 ? "full" : `[${point1}%]`) +
                  " rounded bg-yellow-400"
                }
              >
                <span>{point1}%</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex place-content-between mt-4">
              <p>Grupo 2</p>
              <p>{pointsGroup2} pontos</p>
            </div>
            <div className="relative h-6 rounded w-full bg-zinc-700">
              <div
                style={{
                  width: `${point2}%`,
                }}
                className={
                  "text-center absolute top-0 h-6 w-" + " rounded bg-yellow-400"
                }
              >
                <span>{point2}%</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex place-content-between mt-4">
              <p>Grupo 3</p>
              <p>{pointsGroup3} pontos</p>
            </div>
            <div className="relative h-6 rounded w-full bg-zinc-700">
              <div
                style={{
                  width: `${point3}%`,
                }}
                className={
                  "text-center absolute top-0 h-6 w-" + " rounded bg-yellow-400"
                }
              >
                <span>{point3}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
