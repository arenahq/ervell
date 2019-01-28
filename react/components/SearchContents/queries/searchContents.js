import gql from 'graphql-tag';

import identifiableCellFragment from 'react/components/Cell/components/Identifiable/fragments/identifiableCell';
import konnectableCellFragment from 'react/components/Cell/components/Konnectable/fragments/konnectableCell';

export default gql`
  query SearchContents($type: [SsearchType], $page: Int, $per: Int, $q: String!) {
    contents: ssearch(q: $q, per: $per, page: $page, type: $type) {
      ...KonnectableCell
      ... IdentifiableCell
    }
  }
  ${konnectableCellFragment}
  ${identifiableCellFragment}
`;
