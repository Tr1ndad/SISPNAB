"use client"

import { FileText, Info, Users, MapPin, LogOut, Home } from "lucide-react"
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
import { logout } from "@/lib/auth"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Editais",
    url: "/dashboard/editais",
    icon: FileText,
  },
  {
    title: "Sobre PNAB",
    url: "/dashboard/sobre-pnab",
    icon: Info,
  },
  {
    title: "Artistas",
    url: "/dashboard/artistas",
    icon: Users,
  },
  {
    title: "Municípios",
    url: "/dashboard/municipios",
    icon: MapPin,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div>
            <h2 className="font-semibold text-sm">SISPNAB</h2>
            <p className="text-xs text-muted-foreground">Portal da Transparência</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
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
