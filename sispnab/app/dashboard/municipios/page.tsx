"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

const dadosMunicipios = [
  { municipio: "São Paulo", recursos: 850000, artistas: 245, editais: 8 },
  { municipio: "Rio de Janeiro", recursos: 620000, artistas: 189, editais: 6 },
  { municipio: "Belo Horizonte", recursos: 420000, artistas: 134, editais: 5 },
  { municipio: "Salvador", recursos: 380000, artistas: 98, editais: 4 },
  { municipio: "Brasília", recursos: 350000, artistas: 87, editais: 4 },
  { municipio: "Fortaleza", recursos: 290000, artistas: 76, editais: 3 },
]

const evolucaoMensal = [
  { mes: "Jan", recursos: 1200000, municipios: 45 },
  { mes: "Fev", recursos: 1450000, municipios: 52 },
  { mes: "Mar", recursos: 1680000, municipios: 58 },
  { mes: "Abr", recursos: 1920000, municipios: 64 },
  { mes: "Mai", recursos: 2150000, municipios: 71 },
  { mes: "Jun", recursos: 2380000, municipios: 78 },
]

const distribuicaoRegional = [
  { regiao: "Sudeste", valor: 45, cor: "#0088FE" },
  { regiao: "Nordeste", valor: 28, cor: "#00C49F" },
  { regiao: "Sul", valor: 15, cor: "#FFBB28" },
  { regiao: "Norte", valor: 8, cor: "#FF8042" },
  { regiao: "Centro-Oeste", valor: 4, cor: "#8884D8" },
]

export default function MunicipiosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Municípios</h1>
        <p className="text-muted-foreground">Dados e estatísticas por município participante da PNAB</p>
      </div>

      {/* Cards de resumo */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Municípios Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12 este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recursos Totais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 2.4M</div>
            <p className="text-xs text-muted-foreground">Distribuídos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Editais Publicados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Em todos os municípios</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Artistas Beneficiados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,247</div>
            <p className="text-xs text-muted-foreground">Cadastros ativos</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Gráfico de recursos por município */}
        <Card>
          <CardHeader>
            <CardTitle>Recursos por Município</CardTitle>
            <CardDescription>Top 6 municípios com maior investimento</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                recursos: {
                  label: "Recursos (R$)",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dadosMunicipios}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="municipio" fontSize={12} angle={-45} textAnchor="end" height={80} />
                  <YAxis fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="recursos" fill="var(--color-recursos)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Evolução mensal */}
        <Card>
          <CardHeader>
            <CardTitle>Evolução Mensal</CardTitle>
            <CardDescription>Recursos investidos e municípios participantes</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                recursos: {
                  label: "Recursos (R$)",
                  color: "hsl(var(--chart-1))",
                },
                municipios: {
                  label: "Municípios",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={evolucaoMensal}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="recursos"
                    stroke="var(--color-recursos)"
                    strokeWidth={2}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="municipios"
                    stroke="var(--color-municipios)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Distribuição regional */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição Regional</CardTitle>
            <CardDescription>Percentual de municípios por região</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                valor: {
                  label: "Percentual",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distribuicaoRegional}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="valor"
                    label={({ regiao, valor }) => `${regiao}: ${valor}%`}
                  >
                    {distribuicaoRegional.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.cor} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Ranking de artistas por município */}
        <Card>
          <CardHeader>
            <CardTitle>Artistas por Município</CardTitle>
            <CardDescription>Número de artistas cadastrados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dadosMunicipios.map((municipio, index) => (
                <div key={municipio.municipio} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-600">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{municipio.municipio}</p>
                      <p className="text-sm text-muted-foreground">{municipio.editais} editais</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{municipio.artistas}</p>
                    <p className="text-sm text-muted-foreground">artistas</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
