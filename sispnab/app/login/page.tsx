"use client"

import { useState } from "react"
import { login } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Shield, User, Eye } from "lucide-react"

export default function LoginPage() {
  const [error, setError] = useState<string>("")

  async function handleLogin(formData: FormData) {
    const result = await login(formData)
    if (result?.error) {
      setError(result.error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <CardTitle className="text-2xl">SISPNAB</CardTitle>
          <CardDescription>Sistema de Informação e Transparência</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="profiles">Perfis</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <form action={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Usuário</Label>
                  <Input id="username" name="username" type="text" placeholder="Digite seu usuário" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" name="password" type="password" placeholder="Digite sua senha" required />
                </div>
                {error && <div className="text-sm text-red-600 bg-red-50 p-2 rounded">{error}</div>}
                <Button type="submit" className="w-full">
                  Entrar
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="profiles" className="space-y-4">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Tipos de Acesso</h3>
                  <p className="text-sm text-muted-foreground">Conheça os diferentes perfis de usuário</p>
                </div>

                {/* Gestor */}
                <Card className="border-green-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <CardTitle className="text-lg">Gestor</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Admin
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3">
                      Acesso completo ao sistema para gestores públicos
                    </p>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• Gerenciar editais e recursos</li>
                      <li>• Aprovar propostas</li>
                      <li>• Visualizar relatórios completos</li>
                      <li>• Administrar usuários</li>
                    </ul>
                    <div className="mt-3 p-2 bg-green-50 rounded text-xs space-y-1">
                      <p>
                        <strong>Pinhais:</strong> admin_pinhais / admin123
                      </p>
                      <p>
                        <strong>Colombo:</strong> admin_colombo / admin123
                      </p>
                      <p>
                        <strong>Piraquara:</strong> admin_piraquara / admin123
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Proponente */}
                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-lg">Proponente</CardTitle>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        Artista
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3">Para artistas e trabalhadores da cultura</p>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• Submeter propostas</li>
                      <li>• Acompanhar inscrições</li>
                      <li>• Atualizar dados pessoais</li>
                      <li>• Consultar editais</li>
                    </ul>
                    <div className="mt-3 p-2 bg-blue-50 rounded text-xs space-y-1">
                      <p>
                        <strong>Pinhais:</strong> artista_pinhais / prop123
                      </p>
                      <p>
                        <strong>Colombo:</strong> artista_colombo / prop123
                      </p>
                      <p>
                        <strong>Piraquara:</strong> artista_piraquara / prop123
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Visitante */}
                <Card className="border-gray-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-gray-600" />
                      <CardTitle className="text-lg">Visitante</CardTitle>
                      <Badge variant="outline">Público</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3">Acesso público para consulta e transparência</p>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• Consultar editais públicos</li>
                      <li>• Visualizar dados de transparência</li>
                      <li>• Acessar relatórios públicos</li>
                      <li>• Informações sobre PNAB</li>
                    </ul>
                    <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                      <strong>Teste:</strong> visitante1 / visit123
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
