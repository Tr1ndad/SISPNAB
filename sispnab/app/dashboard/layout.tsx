import type React from "react"
import { redirect } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (!(await isAuthenticated())) {
    redirect("/login")
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
