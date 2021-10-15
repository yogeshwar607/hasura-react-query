import graphQLRequest from '../service'

async function insertUser({ email, name }) {
  try {
    const query = `
        mutation addUser($email:String!,$name:String!,) {
        insert_users(objects: {email: $email, name: $name, }}}) {
          affected_rows
            returning {
              email
            }
          }
      }`

    const qv = { email: email, name: name }
    const data = await graphQLRequest({ query, variables: qv })
    return data
  } catch (error) {
    throw error
  }
}

export { insertUser }
