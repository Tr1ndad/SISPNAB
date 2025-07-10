import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, BarChart3, Search, Download, ExternalLink } from "lucide-react"

export default function VisitanteDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sistema de Informação e Transparência</h1>
        <p className="text-muted-foreground">PNAB no Anel Metropolitano de Curitiba - Pinhais, Colombo e Piraquara</p>
      </div>

      {/* Busca rápida */}
      <Card>
        <CardHeader>
          <CardTitle>Busca Rápida</CardTitle>
          <CardDescription>Encontre editais, dados de transparência e informações públicas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar editais, municípios, projetos..." className="pl-8" />
              </div>
            </div>
            <Button>Buscar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Cards de acesso rápido */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <FileText className="h-8 w-8 text-blue-500 mb-2" />
            <CardTitle className="text-lg">Editais Públicos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Consulte todos os editais publicados e seus resultados</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">24 ativos</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <BarChart3 className="h-8 w-8 text-green-500 mb-2" />
            <CardTitle className="text-lg">Dados de Transparência</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Visualize investimentos e estatísticas por região</p>
            <p className="text-2xl font-bold text-green-600 mt-2">R$ 2.4M</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <Download className="h-8 w-8 text-purple-500 mb-2" />
            <CardTitle className="text-lg">Relatórios</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Baixe relatórios e documentos oficiais</p>
            <p className="text-2xl font-bold text-purple-600 mt-2">12 docs</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <ExternalLink className="h-8 w-8 text-orange-500 mb-2" />
            <CardTitle className="text-lg">Links Oficiais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Acesse sites oficiais e documentação legal</p>
            <p className="text-2xl font-bold text-orange-600 mt-2">8 links</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Editais recentes */}
        <Card>
          <CardHeader>
            <CardTitle>Editais Recentes</CardTitle>
            <CardDescription>Últimos editais publicados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                titulo: "Fomento Cultural - Pinhais",
                municipio: "Pinhais",
                valor: "R$ 120.000",
                data: "15/01/2024",
              },
              {
                titulo: "Apoio a Espaços Culturais - Colombo",
                municipio: "Colombo",
                valor: "R$ 180.000",
                data: "12/01/2024",
              },
              {
                titulo: "Renda Emergencial - Piraquara",
                municipio: "Piraquara",
                valor: "R$ 95.000",
                data: "10/01/2024",
              },
            ].map((edital, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">{edital.titulo}</p>
                  <p className="text-xs text-muted-foreground">
                    {edital.municipio} • {edital.data}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">{edital.valor}</p>
                  <Button variant="outline" size="sm" className="mt-1 bg-transparent">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Dados de transparência */}
        <Card>
          <CardHeader>
            <CardTitle>Resumo de Investimentos</CardTitle>
            <CardDescription>Dados consolidados por região</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { regiao: "Colombo", valor: "R$ 180K", projetos: "12", cor: "blue" },
              { regiao: "Pinhais", valor: "R$ 120K", projetos: "8", cor: "green" },
              { regiao: "Piraquara", valor: "R$ 95K", projetos: "6", cor: "purple" },
            ].map((dados, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-${dados.cor}-500`}></div>
                  <div>
                    <p className="font-medium text-sm">{dados.regiao}</p>
                    <p className="text-xs text-muted-foreground">{dados.projetos} projetos</p>
                  </div>
                </div>
                <p className="font-medium">{dados.valor}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Links úteis */}
      <Card>
        <CardHeader>
          <CardTitle>Links Úteis</CardTitle>
          <CardDescription>Acesso rápido a informações importantes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <Button variant="outline" className="justify-start bg-transparent">
              <ExternalLink className="mr-2 h-4 w-4" />
              Lei nº 14.399/2022 (Lei Aldir Blanc)
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <ExternalLink className="mr-2 h-4 w-4" />
              Portal do Ministério da Cultura
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Manual da PNAB 2024
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Relatório de Transparência
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
