import React from "react";
import clsx from "clsx";
import Nav, { navRoutesList } from "./nav";

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
    <footer className={"bg-yellow p-20 flex gap-4"}>
      <span className={"vertical text-6xl bg-black text-white px-10"}>
        Xenovrs
      </span>
      <div className={"flex-grow"}>
        <div
          className={
            "p-7 border-b border-b-black flex gap-4 pb-20 mb-10 justify-between"
          }
        >
          <span className={"vertical"}>+ 3 (425) 521 60 21</span>
          <List>
            <strong className={"text-xl"}>Quick Links</strong>
            {navRoutesList.map((i) => (
              <a className={"uppercase font-bold"} key={i}>{i}</a>
            ))}
          </List>
          <List>
            <strong className={"text-xl"}>Follow</strong>
            <a className={"uppercase font-bold"}>FACEBOOK</a>
            <a className={"uppercase font-bold"}>INSTAGRAM</a>
            <a className={"uppercase font-bold"}>TWITTER</a>
            <a className={"uppercase font-bold"}>LINKEDIN</a>
          </List>
          <form className={"md:w-80 flex flex-col gap-5"}>
            <strong>Sign up to our newsletter</strong>
            <input
              type={"email"}
              className={
                "active:outline-0 w-full block bg-transparent border-0 border-b-3 p-2"
              }
            />
            <p className={"text-xs font-bold"}>
              This site is protected by reCAPTHCHA and the Google{" "}
              <b>Privacy Policy</b>
              and <b>Terms of Service</b> apply.
            </p>
          </form>
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
