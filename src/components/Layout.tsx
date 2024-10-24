import React from "react";
import { useSold } from "../hook/data";

type Props = React.PropsWithChildren;

export default function Layout({ children }: Props) {
  const {data: sold} = useSold();

  return (
    <div className="flex justify-between gap-3 w-full h-full p-1 rounded-lg bg-[url('/prisma.avif')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col gap-3 w-[17rem] h-full">
        <div className="flex flex-col items-center gap-3 w-full h-max p-5 rounded-xl shadow-lg border bg-white">
          <h1 className="font-bold italic text-2xl underline">Solde</h1>
          <div className="text-2xl font-mono">{JSON.stringify(sold)} Ar</div>
        </div>
        <div className="flex flex-col w-full h-full rounded-xl shadow-lg border inset-0 backdrop-blur-lg">
          
        </div>
      </div>
      <div className="flex-grow h-full p-2 rounded-xl shadow-lg border">{children}</div>
    </div>
  );
}
