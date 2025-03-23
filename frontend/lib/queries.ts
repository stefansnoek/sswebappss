import { gql } from "@apollo/client";

export const GET_POSTS = gql`
query Content($limit: Int!) {
  content(limit: $limit) {
    id
    createdAt
    mediaType
    mediaUrl
  }
}
`;
