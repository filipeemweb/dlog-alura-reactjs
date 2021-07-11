import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/base/base.css";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import { Pagina404 } from "./paginas/Pagina404";
import { Cabecalho } from "./components/Cabecalho";
import { Post } from "./paginas/Post";
import { Categoria } from "./paginas/Categoria";

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/categoria/:id" component={Categoria} />
        <Route path="/posts/:id" component={Post} />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
