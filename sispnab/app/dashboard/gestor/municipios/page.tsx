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
  { municipio: "Colombo", recursos: 180000, artistas: 89, editais: 4, populacao: 240000 },
  { municipio: "Pinhais", recursos: 120000, artistas: 67, editais: 3, populacao: 130000 },
  { municipio: "Piraquara", recursos: 95000, artistas: 45, editais: 2, populacao: 110000 },
]

const evolucaoMensal = [
  { mes: "Jan", recursos: 85000, projetos: 8 },
  { mes: "Fev", recursos: 120000, projetos: 12 },
  { mes: "Mar", recursos: 165000, projetos: 15 },
  { mes: "Abr", recursos: 220000, projetos: 18 },
  { mes: "Mai", recursos: 285000, projetos: 22 },
  { mes: "Jun", recursos: 395000, projetos: 28 },
]

const distribuicaoRecursos = [
  { municipio: "Colombo", valor: 45.6, cor: "#0088FE" },
  { municipio: "Pinhais", valor: 30.4, cor: "#00C49F" },
  { municipio: "Piraquara", valor: 24.0, cor: "#FFBB28" },
]

export default function MunicipiosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Anel Metropolitano de Curitiba</h1>
        <p className="text-muted-foreground">Dados da PNAB em Pinhais, Colombo e Piraquara</p>
      </div>

      {/* Cards de resumo */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Recursos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 395K</div>
            <p className="text-xs text-muted-foreground">Investidos na região</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Artistas Cadastrados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">201</div>
            <p className="text-xs text-muted-foreground">Nos 3 municípios</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Editais Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">9</div>
            <p className="text-xs text-muted-foreground">Em andamento</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">População Atendida</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">480K</div>
            <p className="text-xs text-muted-foreground">Habitantes</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Gráfico de recursos por município */}
        <Card>
          <CardHeader>
            <CardTitle>Recursos por Município</CardTitle>
            <CardDescription>Investimento da PNAB por cidade</CardDescription>
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
                  <XAxis dataKey="municipio" fontSize={12} />
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
            <CardTitle>Evolução dos Investimentos</CardTitle>
            <CardDescription>Crescimento mensal na região</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                recursos: {
                  label: "Recursos (R$)",
                  color: "hsl(var(--chart-1))",
                },
                projetos: {
                  label: "Projetos",
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
                    dataKey="projetos"
                    stroke="var(--color-projetos)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Distribuição de recursos */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Recursos</CardTitle>
            <CardDescription>Percentual por município</CardDescription>
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
                    data={distribuicaoRecursos}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="valor"
                    label={({ municipio, valor }) => `${municipio}: ${valor}%`}
                  >
                    {distribuicaoRecursos.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.cor} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Detalhes por município */}
        <Card>
          <CardHeader>
            <CardTitle>Detalhes por Município</CardTitle>
            <CardDescription>Informações completas de cada cidade</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dadosMunicipios.map((municipio, index) => (
                <div key={municipio.municipio} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{municipio.municipio}</h3>
                    <div className="text-right">
                      <p className="font-medium text-green-600">R$ {municipio.recursos.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">População</p>
                      <p className="font-medium">{municipio.populacao.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Artistas</p>
                      <p className="font-medium">{municipio.artistas}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Editais</p>
                      <p className="font-medium">{municipio.editais}</p>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Investimento per capita: R$ {(municipio.recursos / municipio.populacao).toFixed(2)}
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
