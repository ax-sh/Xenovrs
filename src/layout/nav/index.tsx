import React from "react";
import { List } from "../index";

import { SiInstagram } from "react-icons/all";

function NavLogo() {
  return <div>xenovrs</div>;
}

function NavLinks() {
  return (
    <div>
      <SiInstagram size={28} />
    </div>
  );
}
const list = ["HOME", "PAGES", "PAGES", "PAGES", "PAGES"];
function NavRoutes() {
  return (
    <List className={"flex gap-10"}>
      {list.map((i) => (
        <a>{i}</a>
      ))}
    </List>
  );
}

export default function Nav() {
  return (
    <nav className={"flex justify-between items-center py-10"}>
      <NavLogo />
      <NavRoutes />
      <NavLinks />
    </nav>
  );
}
