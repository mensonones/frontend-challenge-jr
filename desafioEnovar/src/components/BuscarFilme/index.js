import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Filme from '~/components/Filme/index';

import api from '~/services/api';

import {
  Container, Form, Input, Submit, List,
} from './styles';

export default function Buscar() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const API_KEY = 'bf07c3118f25916442b631f3f81937c1';

  const [filmes, setFilmes] = useState([]);

  async function buscarFilmes() {
    try {
      const response = await api.get(`/search/movie?api_key=${API_KEY}&language=pt-BR&query=${input}`);

      await setFilmes(response.data.results);
      console.log(response);
      setInput('');
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      setError(true);
    }
  }

  return (
    <Container>
      <Form>
        <Input
          value={input}
          error={error}
          onChangeText={text => setInput(text)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar filme..."
        />

        <Submit onPress={buscarFilmes}>
          <Icon name="search" size={22} color="#FFF" />
        </Submit>
      </Form>

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

Buscar.navigationOptions = {
  title: 'Buscar',
};
