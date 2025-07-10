"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export type UserRole = "gestor" | "proponente" | "visitante"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  cpf?: string
  municipio?: string
}

// Simulação de banco de dados de usuários
const users: Record<string, { password: string; user: User }> = {
  admin_pinhais: {
    password: "admin123",
    user: {
      id: "1",
      name: "João Silva",
      email: "joao@pinhais.pr.gov.br",
      role: "gestor",
      municipio: "Pinhais",
    },
  },
  admin_colombo: {
    password: "admin123",
    user: {
      id: "2",
      name: "Maria Santos",
      email: "maria@colombo.pr.gov.br",
      role: "gestor",
      municipio: "Colombo",
    },
  },
  admin_piraquara: {
    password: "admin123",
    user: {
      id: "3",
      name: "Carlos Oliveira",
      email: "carlos@piraquara.pr.gov.br",
      role: "gestor",
      municipio: "Piraquara",
    },
  },
  artista_pinhais: {
    password: "prop123",
    user: {
      id: "4",
      name: "Ana Paula Costa",
      email: "ana@email.com",
      role: "proponente",
      cpf: "123.456.789-00",
      municipio: "Pinhais",
    },
  },
  artista_colombo: {
    password: "prop123",
    user: {
      id: "5",
      name: "Roberto Lima",
      email: "roberto@email.com",
      role: "proponente",
      cpf: "987.654.321-00",
      municipio: "Colombo",
    },
  },
  artista_piraquara: {
    password: "prop123",
    user: {
      id: "6",
      name: "Fernanda Souza",
      email: "fernanda@email.com",
      role: "proponente",
      cpf: "456.789.123-00",
      municipio: "Piraquara",
    },
  },
  visitante1: {
    password: "visit123",
    user: {
      id: "7",
      name: "José Visitante",
      email: "jose@email.com",
      role: "visitante",
    },
  },
}

export async function login(formData: FormData) {
  const username = formData.get("username") as string
  const password = formData.get("password") as string

  const userData = users[username]

  if (userData && userData.password === password) {
    const cookieStore = await cookies()

    // Salva dados do usuário no cookie
    cookieStore.set("auth", JSON.stringify(userData.user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      path: "/",
    })

    // Redireciona baseado no role
    switch (userData.user.role) {
      case "gestor":
        redirect("/dashboard/gestor")
      case "proponente":
        redirect("/dashboard/proponente")
      case "visitante":
        redirect("/dashboard/visitante")
      default:
        redirect("/")
    }
  } else {
    return { error: "Credenciais inválidas" }
  }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete("auth")
  redirect("/login")
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("auth")

  if (!authCookie) return null

  try {
    return JSON.parse(authCookie.value)
  } catch {
    return null
  }
}

export async function isAuthenticated() {
  const user = await getCurrentUser()
  return !!user
}

export async function hasRole(role: UserRole) {
  const user = await getCurrentUser()
  return user?.role === role
}

export async function requireAuth(allowedRoles?: UserRole[]) {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    redirect("/unauthorized")
  }

  return user
}
