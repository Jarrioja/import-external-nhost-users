export const GET_USER_BY_EMAIL = `
  query getUserByEmail($email: citext!) {
    users(where: {email: {_ilike: $email}}) {
      id
      email
      metadata
    }
  }
`;

export const UPDATE_USER_METADATA = `
mutation updateUserMetadata($id: uuid!, $metadata: jsonb!) {
  updateUser(pk_columns: {id: $id}, _set: {metadata: $metadata}) {
    id
    metadata
  }
}
`;

export const CREATE_USER = `
  mutation insertUser($user: users_insert_input!) {
    insertUser(object: $user) {
      id
      email
      displayName
      metadata
    }
  }
`;
