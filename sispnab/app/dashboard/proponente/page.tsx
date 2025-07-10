import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Send, Clock, CheckCircle, Plus, AlertCircle } from "lucide-react"

export default function ProponenteDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bem-vinda, Ana Paula!</h1>
          <p className="text-muted-foreground">
            Artista de Pinhais - Acompanhe suas propostas e descubra novos editais
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Proposta
        </Button>
      </div>

      {/* Cards de status */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Editais Disponíveis</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">8</div>
            <p className="text-xs text-muted-foreground">Abertos para inscrição</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Propostas Enviadas</CardTitle>
            <Send className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Total submetidas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Em Análise</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">3</div>
            <p className="text-xs text-muted-foreground">Aguardando resultado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aprovadas</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">2</div>
            <p className="text-xs text-muted-foreground">Projetos aprovados</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Minhas propostas */}
        <Card>
          <CardHeader>
            <CardTitle>Minhas Propostas</CardTitle>
            <CardDescription>Status das suas submissões</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { projeto: "Festival de Música Popular", status: "Aprovado", valor: "R$ 50.000", cor: "green" },
              { projeto: "Oficina de Dança Contemporânea", status: "Em análise", valor: "R$ 25.000", cor: "orange" },
              { projeto: "Exposição Fotográfica", status: "Em análise", valor: "R$ 15.000", cor: "orange" },
            ].map((proposta, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">{proposta.projeto}</p>
                  <p className="text-xs text-muted-foreground">{proposta.valor}</p>
                </div>
                <Badge
                  variant={proposta.cor === "green" ? "default" : "secondary"}
                  className={proposta.cor === "green" ? "bg-green-100 text-green-700" : ""}
                >
                  {proposta.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Editais em destaque */}
        <Card>
          <CardHeader>
            <CardTitle>Editais em Destaque</CardTitle>
            <CardDescription>Oportunidades que podem interessar você</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { titulo: "Fomento à Música Regional - Colombo", prazo: "15 dias", valor: "Até R$ 25.000" },
              { titulo: "Apoio a Grupos de Teatro - Pinhais", prazo: "22 dias", valor: "Até R$ 18.000" },
              { titulo: "Cultura Digital - Piraquara", prazo: "8 dias", valor: "Até R$ 12.000" },
            ].map((edital, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">{edital.titulo}</p>
                  <p className="text-xs text-muted-foreground">{edital.valor}</p>
                </div>
                <div className="text-right">
                  <Badge variant={Number.parseInt(edital.prazo) <= 10 ? "destructive" : "secondary"}>
                    {edital.prazo}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Notificações importantes */}
      <Card>
        <CardHeader>
          <CardTitle>Notificações Importantes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <p className="text-sm">Sua proposta "Festival de Música Popular" foi aprovada!</p>
          </div>
          <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
            <AlertCircle className="w-4 h-4 text-blue-500" />
            <p className="text-sm">Novo edital disponível: "Fomento à Música Regional"</p>
          </div>
          <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg">
            <Clock className="w-4 h-4 text-orange-500" />
            <p className="text-sm">Prazo para complementar documentação: 5 dias</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
