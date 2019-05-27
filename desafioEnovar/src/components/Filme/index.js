import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

import {
  Container, Name, Description, Stats, Stat, StatCount, Favoritar, FavoritarText,
} from './styles';

export default function Filme({ data }) {
  const [cor, setCor] = useState('#000');

  return (
    <Container>
      <Name>{data.title}</Name>
      <Image
        style={{ width: 300, height: 150 }}
        source={{ uri: `https://image.tmdb.org/t/p/w400/${data.backdrop_path}` }}
      />
      <Description>{data.overview}</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.vote_average}</StatCount>
        </Stat>
        <Stat>
          <Icon name="film" size={16} color="#333" />
          <StatCount>{data.release_date}</StatCount>
        </Stat>
      </Stats>

      <Favoritar onPress={() => (cor === '#000' ? setCor('#ff6961') : setCor('#000'))}>
        <Icon name="heart" color={cor} size={16} />
        <FavoritarText>Favoritar</FavoritarText>
      </Favoritar>
    </Container>
  );
}
