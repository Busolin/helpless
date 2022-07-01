import React from "react";
import { useState } from "react";
import { Code, Swap, Trash } from "phosphor-react";

export default function Card(props) {
  const [isShow, setIsShow] = useState(false);

  console.log(props);

  return (
    <div
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className="ml-12 mt-4 relative"
    >
      <div className="flex flex-col border-2 overflow-hidden border-yellow-400 w-64 h-48 p-3 hover:scale-105 transition-all hover:cursor-pointer">
        <h3 className="font-bold">{props.title}</h3>

        <p className="text-left ">{props.group}</p>

        <p className="text-sm overflow-hidden max-h-[60px]">
          {props.description}
        </p>

        <div className="flex gap-1 center justify-self-end">
          <button className="p-2 hover:bg-yellow-400 rounded">
            <Code size={32} />
          </button>
          <button className="p-2 hover:bg-yellow-400 rounded">
            <Trash
              size={32}
              onClick={async () => {
                const object = {
                  documentId: props.dados,
                };

                const response = await fetch(
                  "http://localhost:3333/documents",
                  {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + props.session,
                    },
                    body: JSON.stringify(object),
                  }
                ).then((res) => res.json());

                window.location.reload();
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
