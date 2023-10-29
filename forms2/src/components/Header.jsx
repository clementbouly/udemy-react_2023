import React from 'react';
import logoImg from '../assets/logo.jpg';

export default function Header() {
  return React.createElement(
    "header",
    null,
    React.createElement("img", { src: logoImg, alt: "A form and a pencil" }),
    React.createElement("h1", null, "React Forms")
  );
}
