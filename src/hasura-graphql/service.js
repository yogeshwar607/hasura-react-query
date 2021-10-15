import fetch from 'node-fetch'

const hgeEndpoint = process.env.REACT_APP_HGE_ENDPOINT

async function graphQLRequest({ query, variables }) {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public'
    }

    const response = await fetch(hgeEndpoint, {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
      headers: headers
    })

    const jsonResponse = await response.json()
    if (jsonResponse.errors) {
      const { message } = jsonResponse.errors[0] || 'Error..'
      throw new Error(message)
    }
    return jsonResponse.data
  } catch (error) {
    throw error
  }
}

export default graphQLRequest
