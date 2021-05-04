import '../styles/globals.css'
import { AuthProvider, ProtectRoute, useAuth } from '../contexts/auth'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
