import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useMemo } from 'react';

export type Pokemon = {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
  classification: string;
};

export type PokemonOption = {
  id: Pokemon['id'];
  number: Pokemon['number'];
  name: Pokemon['name'];
  imageUrl: Pokemon['image'];
  types: Pokemon['types'];
};

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      image
    }
  }
`;

export const useGetPokemons = () => {
  const { data, ...queryRes } = useQuery(GET_POKEMONS, {
    variables: {
      first: 151, // Keep hard coded
    },
  });

  const pokemons: Pokemon[] = useMemo(() => data?.pokemons || [], [data]);

  const pokemonOptions: PokemonOption[] = useMemo(
    () =>
      pokemons.map((p: Pokemon) => ({
        id: p.id,
        name: p.name,
        number: p.number,
        imageUrl: p.image,
        types: p.types,
      })),
    [pokemons]
  );

  return {
    pokemons,
    pokemonOptions,
    ...queryRes,
  };
};
