import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../api';
import '../assets/css/blog.css';

export const ListaCategorias = () => {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    busca('/categorias', setCategoria);
  }, []);

  return (
    <ul className="lista-categorias container flex">
      {
        categoria.map(categoria => (
          <Link to={`/categoria/${categoria.id}`}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>{categoria.nome}</li>
          </Link>
        ))
      }
    </ul>
  );
}