import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Plus, Eye, Edit } from "lucide-react"

const artistas = [
  {
    id: 1,
    nome: "Maria Silva Santos",
    cpf: "123.456.789-00",
    cidade: "São Paulo",
    area: "Música",
    status: "Ativo",
    cadastro: "2024-01-15",
  },
  {
    id: 2,
    nome: "João Carlos Oliveira",
    cpf: "987.654.321-00",
    cidade: "Rio de Janeiro",
    area: "Teatro",
    status: "Pendente",
    cadastro: "2024-01-20",
  },
  {
    id: 3,
    nome: "Ana Paula Costa",
    cpf: "456.789.123-00",
    cidade: "Belo Horizonte",
    area: "Artes Visuais",
    status: "Ativo",
    cadastro: "2024-01-18",
  },
  {
    id: 4,
    nome: "Carlos Eduardo Lima",
    cpf: "789.123.456-00",
    cidade: "Salvador",
    area: "Dança",
    status: "Inativo",
    cadastro: "2024-01-10",
  },
]

export default function ArtistasPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Artistas</h1>
          <p className="text-muted-foreground">Gerencie o cadastro de artistas e trabalhadores da cultura</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Cadastro
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Artistas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cadastros Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">1,089</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">98</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Novos (30 dias)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">156</div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por nome ou CPF..." className="pl-8" />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros Avançados
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de artistas */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Artistas</CardTitle>
          <CardDescription>{artistas.length} artistas cadastrados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {artistas.map((artista) => (
              <div key={artista.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{artista.nome}</h3>
                    <Badge
                      variant={
                        artista.status === "Ativo" ? "default" : artista.status === "Pendente" ? "secondary" : "outline"
                      }
                    >
                      {artista.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    CPF: {artista.cpf} • {artista.cidade} • {artista.area}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Cadastrado em: {new Date(artista.cadastro).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
