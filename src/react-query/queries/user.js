import { useQuery } from 'react-query'
import { userData } from '../../hasura-graphql/queries/user'

async function userProfile(email) {
  const data = await userData({ email })
  return data
}

function useUserData() {
  return useQuery([ 'userData' ], userProfile, {
    initialData: {
      name: 'test_user',
      email: 'test@test.com'
    },
    initialStale: true,
    refetchOnMount: true,
    refetchOnWindowFocus: false
  })
}

export { useUserData }
