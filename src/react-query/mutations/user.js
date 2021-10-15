import { useMutation } from 'react-query'
import { updateUserProfile } from 'graphql/mutations'

const useUpdateUserData = () =>
  useMutation(
    async (data) => {
      return await updateUserProfile(data)
    },
    {
      onMutate: (editedValue) => {
        // console.log(data, error, editedValue)
      },

      onError: (error, editedValue) => {
        console.log(error, editedValue)
      },

      onSettled: (data, error, editedValue) => {
        // console.log(data, error, editedValue)
      },
      onSuccess: (data, variables) => {
        // console.log(data, variables)
      }
    }
  )

export { useUpdateUserData }
