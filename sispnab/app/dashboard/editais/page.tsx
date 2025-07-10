import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Plus } from "lucide-react"

const editais = [
  {
    id: 1,
    titulo: "Edital de Fomento Cultural - São Paulo",
    municipio: "São Paulo",
    valor: "R$ 500.000",
    status: "Ativo",
    prazo: "2024-02-15",
    tipo: "Fomento",
  },
  {
    id: 2,
    titulo: "Apoio a Espaços Culturais - Rio de Janeiro",
    municipio: "Rio de Janeiro",
    valor: "R$ 300.000",
    status: "Em análise",
    prazo: "2024-01-30",
    tipo: "Espaços",
  },
  {
    id: 3,
    titulo: "Renda Emergencial Cultural - Belo Horizonte",
    municipio: "Belo Horizonte",
    valor: "R$ 200.000",
    status: "Finalizado",
    prazo: "2024-01-15",
    tipo: "Renda",
  },
]

export default function EditaisPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Editais</h1>
          <p className="text-muted-foreground">Gerencie e acompanhe os editais da PNAB</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Edital
        </Button>
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
                <Input placeholder="Buscar editais..." className="pl-8" />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de editais */}
      <div className="space-y-4">
        {editais.map((edital) => (
          <Card key={edital.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{edital.titulo}</CardTitle>
                  <CardDescription>
                    {edital.municipio} • Prazo: {new Date(edital.prazo).toLocaleDateString("pt-BR")}
                  </CardDescription>
                </div>
                <Badge
                  variant={
                    edital.status === "Ativo" ? "default" : edital.status === "Em análise" ? "secondary" : "outline"
                  }
                >
                  {edital.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Valor: {edital.valor}</p>
                  <p className="text-sm text-muted-foreground">Tipo: {edital.tipo}</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                  <Button size="sm">Editar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
