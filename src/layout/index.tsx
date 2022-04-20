import React from "react";
import clsx from "clsx";
import Nav from "./nav";

interface ListProps extends React.HTMLProps<HTMLUListElement> {
  render?: (props: any) => React.ReactNode;
}

export function List({ children, render, ...props }: ListProps) {
  return (
    <ul className={"list"} {...props}>
      {React.Children.map(children, (child, index) => (
        <li key={index}>{render ? render(child) : child}</li>
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer className={"bg-yellow p-20 flex"}>
      <span
        className={
          "transform -rotate-90 bg-black text-white py-5 px-5 text-3xl"
        }
      >
        Xenovrs
      </span>
      <div className={"flex-grow "}>
        <div className={"p-7 border-b border-b-black"}>
          <span className={"inline-block transform -rotate-90"}>+ 3 (425) 521 60 21</span>
        </div>
        <div className={"flex justify-between"}>
          <div>© Centrix 2021. All Rights Resevered</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
}

const Layout = ({ children, className }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className={clsx("Layout", className)}>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
