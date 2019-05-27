import React, { useState, useEffect } from 'react';

import Filme from '~/components/Filme/index';

import api from '~/services/api';

import {
  Container, Title, List,
} from './styles';

export default function Main() {
  const API_KEY = 'bf07c3118f25916442b631f3f81937c1';

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await api.get(`/movie/popular?api_key=${API_KEY}&language=pt-BR`);
        await setFilmes(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    loadFilmes();
  }, []);

  return (
    <Container>
      <Title>Filmes em Alta</Title>

      <List
        keyboardShouldPersistTaps="handled"
        data={filmes}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Filme data={item} />
        )}
      />

    </Container>
  );
}

Main.navigationOptions = {
  title: 'Main',
};
