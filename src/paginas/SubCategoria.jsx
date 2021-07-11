import React from 'react';
import { useParams } from 'react-router-dom';
import { ListaPost } from '../components/ListaPost';

export const SubCategoria = () => {
  const { subcategoria } = useParams();

  return (
    <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
  );
}