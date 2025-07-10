import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download, FileText } from "lucide-react"

export default function SobrePNABPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sobre a PNAB</h1>
        <p className="text-muted-foreground">Informações completas sobre a Política Nacional Aldir Blanc</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Informações gerais */}
        <Card>
          <CardHeader>
            <CardTitle>O que é a PNAB?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              A Política Nacional Aldir Blanc (PNAB) é uma política pública permanente de fomento ao setor cultural
              brasileiro, instituída pela Lei nº 14.399/2022.
            </p>
            <p className="text-sm">
              Criada em homenagem ao compositor Aldir Blanc, a PNAB tem como objetivo garantir o acesso à cultura e
              fomentar a economia criativa em todo o território nacional.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Principais eixos:</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Renda emergencial para trabalhadores da cultura</li>
                <li>• Manutenção de espaços artísticos e culturais</li>
                <li>• Fomento a atividades culturais</li>
                <li>• Fortalecimento da economia criativa</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Marco legal */}
        <Card>
          <CardHeader>
            <CardTitle>Marco Legal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">Lei nº 14.399/2022</p>
                  <p className="text-xs text-muted-foreground">Lei de criação da PNAB</p>
                </div>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">Decreto nº 11.453/2023</p>
                  <p className="text-xs text-muted-foreground">Regulamentação da PNAB</p>
                </div>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">Portaria MinC nº 123/2023</p>
                  <p className="text-xs text-muted-foreground">Diretrizes operacionais</p>
                </div>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recursos e orçamento */}
        <Card>
          <CardHeader>
            <CardTitle>Recursos e Orçamento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">R$ 3B</p>
                <p className="text-sm text-blue-700">Orçamento 2024</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">2.847</p>
                <p className="text-sm text-green-700">Municípios atendidos</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Os recursos são distribuídos entre estados, municípios e Distrito Federal com base em critérios
              populacionais e de desenvolvimento humano.
            </p>
          </CardContent>
        </Card>

        {/* Downloads */}
        <Card>
          <CardHeader>
            <CardTitle>Downloads</CardTitle>
            <CardDescription>Documentos e materiais informativos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Manual da PNAB 2024
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Relatório de Execução 2023
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Cartilha para Gestores
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <FileText className="mr-2 h-4 w-4" />
              Perguntas Frequentes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
