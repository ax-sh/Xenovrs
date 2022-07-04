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

const links = {
  FACEBOOK: "",
  INSTAGRAM: "",
  TWITTER: "",
  LINKEDIN: "",
};

function Footer() {
  return (
    <footer className={"bg-yellow md:p-20 flex gap-4"}>
      <span className={"vertical text-6xl bg-black text-white px-10"}>Xenovrs</span>
      <span className={"vertical md:hidden"}>+ 3 (425) 521 60 21</span>
      <div className={"flex-grow "}>
        <div
          className={
            "p-5 border-b border-b-black flex md:flex-row flex-col gap-4 pb-20 mb-10 justify-between"
          }
        >
          <span className={"vertical hidden md:inline-block"}>+ 3 (425) 521 60 21</span>
          <List>
            <strong className={"text-xl"}>Quick Links</strong>
            {navRoutesList.map((i) => (
              <a key={i} className={"uppercase font-bold text-black cursor-pointer"}>
                {i}
              </a>
            ))}
          </List>
          <List>
            <strong className={"text-xl"}>Follow</strong>
            {Object.entries(links).map(([key, value]) => (
              <a
                href={value}
                className={
                  "uppercase font-bold !text-black hover:text-black/80 pointer cursor-pointer"
                }
              >
                {key}
              </a>
            ))}
          </List>
          <form className={"md:w-80 flex flex-col gap-5"}>
            <strong>Sign up to our newsletter</strong>
            <input
              type={"email"}
              className={
                "active:outline-0 outline-0  w-full block bg-transparent border-0 border-b-3 p-2"
              }
            />
            <p className={"text-xs font-bold"}>
              This site is protected by reCAPTHCHA and the Google <b>Privacy Policy</b>
              and <b>Terms of Service</b> apply.
            </p>
          </form>
        </div>
        <div className={"md:flex justify-between"}>
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
