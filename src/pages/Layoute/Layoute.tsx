import { FC } from "react";
import "./Layoute.module.scss";
import { LayouteProps } from "./Layoute.props.ts";
import { Header } from "@components/Header/Header.tsx";
import { Outlet } from "react-router-dom";

export const Layoute: FC<LayouteProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
