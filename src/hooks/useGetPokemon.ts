import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// TODO: consolidate types
export type Pokemon = {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
};

interface GetPokemonParam {
  id: string;
}

export const GET_POKEMON = gql`
  query pokemon($id: String!) {
    pokemon(id: $id) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const useGetPokemon = ({ id }: GetPokemonParam) => {
  const { data, ...queryRes } = useQuery(GET_POKEMON, {
    variables: {
      id,
    },
  });
  // TODO: using raw response type for now
  const pokemon: Pokemon = data?.pokemon || {};
  return {
    pokemon,
    ...queryRes,
  };
};
