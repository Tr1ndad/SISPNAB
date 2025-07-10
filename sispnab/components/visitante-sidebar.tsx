"use client"

import { SidebarHeader } from "@/components/ui/sidebar"

import { FileText, Info, BarChart3, LogOut, Home, Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { logout } from "@/lib/auth"

const menuItems = [
  {
    title: "Início",
    url: "/dashboard/visitante",
    icon: Home,
  },
  {
    title: "Consultar Editais",
    url: "/dashboard/visitante/editais",
    icon: FileText,
  },
  {
    title: "Transparência",
    url: "/dashboard/visitante/transparencia",
    icon: BarChart3,
  },
  {
    title: "Sobre PNAB",
    url: "/dashboard/visitante/sobre-pnab",
    icon: Info,
  },
  {
    title: "Busca Avançada",
    url: "/dashboard/visitante/busca",
    icon: Search,
  },
]

interface VisitanteSidebarProps {
  user: {
    name: string
    email: string
  }
}

export function VisitanteSidebar({ user }: VisitanteSidebarProps) {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <div>
            <h2 className="font-semibold text-sm">SISPNAB - Público</h2>
            <p className="text-xs text-muted-foreground">Sistema de Informação e Transparência</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Consulta Pública</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
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
