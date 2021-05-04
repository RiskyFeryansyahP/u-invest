import React, { useState } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'

import api from '../services/Api'
import { Spin } from 'antd'
import { NextPage } from 'next'

export type AuthContextT = {
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: any, password: any) => Promise<void>
  logout: () => void
  user: any
}

const AuthContext = React.createContext<AuthContextT>(null)

export const AuthProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  React.useEffect(() => {
    async function loadUserFromCookies() {
      const member_id = Cookies.get('member')

      if (member_id) {
        console.log('Got a member_id')
        const result = await api.post('auth/me', { id: member_id })
        setUser(result.data)
      }
      setLoading(false)
    }
    loadUserFromCookies()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const result = await api.post('auth/login', { email, password })

      if (result.data) {
        setUser(result.data)
        Cookies.set('member', result.data.id, { expires: 7 })
        window.location.href = '/'
      }
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    Cookies.remove('member')
    setUser(null)
    window.location.pathname = '/auth/signin'
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        isLoading: loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)

export const ProtectRoute = (InnerComponent: NextPage) => {
  const ProtectedRoute: NextPage<any> = (props) => {
    const { isAuthenticated, isLoading } = useAuth()

    if (isLoading) {
      return <Spin />
    }

    if (!isAuthenticated) {
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/signin'
      }
    }

    return <InnerComponent {...props} />
  }

  return ProtectedRoute
}
