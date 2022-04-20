import React from "react";

function Page({ children }: any) {
  return (
    <div className="App">
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}

export default Page;
