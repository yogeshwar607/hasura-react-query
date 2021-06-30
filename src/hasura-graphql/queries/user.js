import requestGQL from '../service'

const userData = async ({ email }) => {
  try {
    const query = `
          query User($email:String!) {
            users_by_pk(email:$email) {
              name
              email
            }   
          }
        `

    const qv = { email: email }
    const user = await requestGQL({
      query,
      variables: qv,
    })
    return user
  } catch (error) {
    throw error
  }
}

export {
  userData
}