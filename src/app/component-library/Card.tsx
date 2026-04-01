import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-xl shadow-md p-4 bg-white">{children}</div>;
}
