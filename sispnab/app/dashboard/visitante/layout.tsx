import type React from "react"
import { requireAuth } from "@/lib/auth"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { VisitanteSidebar } from "@/components/visitante-sidebar"

export default async function VisitanteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await requireAuth(["visitante"])

  return (
    <SidebarProvider>
      <VisitanteSidebar user={user} />
      <SidebarInset>
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
