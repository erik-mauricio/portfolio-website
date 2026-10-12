import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`card card-border bg-base-100 border-base-300 overflow-hidden transition-shadow duration-200 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
