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
  return <footer></footer>;
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
