import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <CardTitle className="text-2xl text-red-600">Acesso Negado</CardTitle>
          <CardDescription>Você não tem permissão para acessar esta página</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Esta área é restrita a usuários com permissões específicas. Verifique se você está logado com o perfil
            correto.
          </p>
          <div className="space-y-2">
            <Link href="/login">
              <Button className="w-full">Fazer Login</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full bg-transparent">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
