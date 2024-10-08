import React from "react";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};

export default function Rootlayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
