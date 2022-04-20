import React from "react";
import { List } from "../index";

import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { ImTwitter } from "react-icons/im";
import { Link } from "react-router-dom";

function NavLogo() {
  return <figure className={"text-3xl"}>xenovrs</figure>;
}

function NavLinks() {
  return (
    <List
      className={"flex gap-2"}
      render={(child) => (
        <div className={"w-10 h-10 grid place-content-center"}>{child}</div>
      )}
    >
      <FaLinkedinIn size={28} />
      <CgFacebook size={28} />
      <SiInstagram size={28} />
      <ImTwitter size={28} />
    </List>
  );
}
const list = ["HOME",
    // "PAGES",
    "Portfolio", "Blog", "Contact"];
function NavRoutes() {
  return (
    <List className={"flex gap-10 font-bold uppercase"}>
      {list.map((i) => (
        <Link to={"/" + i.toLowerCase()}>{i}</Link>
      ))}
    </List>
  );
}

export default function Nav() {
  return (
    <nav className={"page-nav"}>
      <NavLogo />
      <NavRoutes />
      <NavLinks />
    </nav>
  );
}
