import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, MapPin, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function GestorDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard do Gestor</h1>
        <p className="text-muted-foreground">Sistema de informação e transparência - Visão administrativa completa</p>
      </div>

      {/* Cards de estatísticas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Editais Ativos</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 desde o mês passado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Propostas Pendentes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">12</div>
            <p className="text-xs text-muted-foreground">Aguardando análise</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recursos Aprovados</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ 2.4M</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Municípios Participantes</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Pinhais, Colombo, Piraquara</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Propostas para análise */}
        <Card>
          <CardHeader>
            <CardTitle>Propostas Aguardando Análise</CardTitle>
            <CardDescription>Requer atenção imediata</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                nome: "Ana Paula Costa",
                projeto: "Festival de Música de Pinhais",
                valor: "R$ 25.000",
                prazo: "2 dias",
                cidade: "Pinhais",
              },
              {
                nome: "Roberto Lima",
                projeto: "Teatro Comunitário Colombo",
                valor: "R$ 18.000",
                prazo: "5 dias",
                cidade: "Colombo",
              },
              {
                nome: "Fernanda Souza",
                projeto: "Arte e Cultura Piraquara",
                valor: "R$ 15.000",
                prazo: "1 dia",
                cidade: "Piraquara",
              },
            ].map((proposta, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">{proposta.projeto}</p>
                  <p className="text-xs text-muted-foreground">
                    {proposta.nome} • {proposta.cidade} • {proposta.valor}
                  </p>
                </div>
                <Badge variant={proposta.prazo === "1 dia" ? "destructive" : "secondary"}>{proposta.prazo}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Atividades recentes */}
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <p className="text-sm">Edital "Cultura Viva SP" aprovado</p>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-blue-500" />
              <p className="text-sm">Nova proposta submetida - Teatro Municipal</p>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-purple-500" />
              <p className="text-sm">15 novos artistas cadastrados</p>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <p className="text-sm">Relatório mensal gerado</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
