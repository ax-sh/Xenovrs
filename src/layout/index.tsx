import React from "react";
import clsx from "clsx";
import Nav from "./nav";

export function List({
  children,
  ...props
}: React.HTMLProps<HTMLUListElement>) {
  return (
    <ul className={"list"} {...props}>
      {React.Children.map(children, (child, index) => (
        <li key={index}>{child}</li>
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
