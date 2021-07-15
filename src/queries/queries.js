import {gql} from 'apollo-boost';

export const GET_PIECES = gql`
  {
    launches(limit:1) {
    id
    }
   }
`;