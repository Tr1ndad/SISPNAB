"use client"

import { FileText, User, Send, Clock, LogOut, Home, Bell } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { logout } from "@/lib/auth"

const menuItems = [
  {
    title: "Início",
    url: "/dashboard/proponente",
    icon: Home,
  },
  {
    title: "Editais Disponíveis",
    url: "/dashboard/proponente/editais",
    icon: FileText,
    badge: "8",
  },
  {
    title: "Minhas Propostas",
    url: "/dashboard/proponente/propostas",
    icon: Send,
  },
  {
    title: "Acompanhamento",
    url: "/dashboard/proponente/acompanhamento",
    icon: Clock,
    badge: "3",
  },
  {
    title: "Meu Perfil",
    url: "/dashboard/proponente/perfil",
    icon: User,
  },
  {
    title: "Notificações",
    url: "/dashboard/proponente/notificacoes",
    icon: Bell,
    badge: "2",
  },
]

interface ProponenteSidebarProps {
  user: {
    name: string
    email: string
    cpf?: string
    municipio?: string
  }
}

export function ProponenteSidebar({ user }: ProponenteSidebarProps) {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <div>
            <h2 className="font-semibold text-sm">SISPNAB - Artista</h2>
            <p className="text-xs text-muted-foreground">{user.municipio}</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu do Proponente</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <div className="mb-3 text-xs">
          <p className="font-medium">{user.name}</p>
          <p className="text-muted-foreground">{user.email}</p>
          {user.cpf && <p className="text-muted-foreground">CPF: {user.cpf}</p>}
        </div>
        <form action={logout}>
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </form>
      </SidebarFooter>
    </Sidebar>
  )
}
