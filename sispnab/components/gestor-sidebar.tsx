"use client"

import { FileText, Info, Users, MapPin, LogOut, Home, Settings, BarChart3 } from "lucide-react"
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
import { Badge } from "@/components/ui/badge"
import { logout } from "@/lib/auth"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard/gestor",
    icon: Home,
  },
  {
    title: "Editais",
    url: "/dashboard/gestor/editais",
    icon: FileText,
  },
  {
    title: "Propostas",
    url: "/dashboard/gestor/propostas",
    icon: Users,
    badge: "12",
  },
  {
    title: "Municípios",
    url: "/dashboard/gestor/municipios",
    icon: MapPin,
  },
  {
    title: "Relatórios",
    url: "/dashboard/gestor/relatorios",
    icon: BarChart3,
  },
  {
    title: "Sobre PNAB",
    url: "/dashboard/gestor/sobre-pnab",
    icon: Info,
  },
  {
    title: "Configurações",
    url: "/dashboard/gestor/configuracoes",
    icon: Settings,
  },
]

interface GestorSidebarProps {
  user: {
    name: string
    email: string
    municipio?: string
  }
}

export function GestorSidebar({ user }: GestorSidebarProps) {
  const pathname = usePathname()

  return (
    <Sidebar>
      <div className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <div>
            <h2 className="font-semibold text-sm">SISPNAB - Gestor</h2>
            <p className="text-xs text-muted-foreground">{user.municipio}</p>
          </div>
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Administrativo</SidebarGroupLabel>
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
