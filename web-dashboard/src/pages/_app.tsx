import '../styles/globals.css'
import { AuthProvider, ProtectRoute, useAuth } from '../contexts/auth'
import { createClient, Provider } from 'urql'

function MyApp({ Component, pageProps }) {
  const urlGraphql = process.env.NEXT_PUBLIC_GRAPHQL_DOMAIN + '/v1/graphql'
  const hasuraSecret = process.env.NEXT_PUBLIC_GRAPHQL_SECRET

  const client = createClient({
    url: urlGraphql,
    fetchOptions: () => {
      return {
        headers: {
          'x-hasura-admin-secret': hasuraSecret,
        },
      }
    },
  })

  return (
    <Provider value={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  )
}

export default MyApp
