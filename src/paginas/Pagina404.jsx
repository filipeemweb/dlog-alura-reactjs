import React from "react";

import imgErro from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

export const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={imgErro} alt="Ilustração doguito de pagina não encontrada" />
      <p className="naoencontrado-texto">Ops, Essa página não existe!</p>
    </main>
  );
};
