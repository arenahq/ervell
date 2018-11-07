import gql from 'graphql-tag';

export default gql`
  fragment CompactChannel on Channel {
    __typename
    id: slug
    href
    visibility
    title
    owner {
      ... on Group {
        name
      }
      ... on User {
        name
      }
    }
    counts {
      contents
    }
  }
`;
