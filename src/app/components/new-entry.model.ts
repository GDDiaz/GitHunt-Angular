import gql from 'graphql-tag';

export const submitRepositoryMutation = gql`
  mutation submitRepository($repoFullName: String!) {
    submitRepository(repoFullName: $repoFullName) {
      createdAt
    }
  }
`;
