import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SystemHeader } from "@/components/system-header"
import { SYSTEM_CONFIG } from "@/lib/config"
import { SystemFooter } from "@/components/system-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <SystemHeader />

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{SYSTEM_CONFIG.fullName}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {SYSTEM_CONFIG.longDescription} nas cidades de {SYSTEM_CONFIG.cities.join(", ")}.
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Acessar Sistema
            </Button>
          </Link>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* PNAB Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">O que é a PNAB?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  A Política Nacional Aldir Blanc (PNAB) é uma política pública permanente de fomento ao setor cultural,
                  criada pela Lei nº 14.399/2022, que institucionaliza o apoio emergencial dado durante a pandemia.
                </p>
                <p className="text-gray-700">
                  A PNAB destina recursos federais para estados, municípios e Distrito Federal aplicarem em ações de
                  fomento ao setor cultural, priorizando espaços culturais, trabalhadores da cultura e manifestações
                  culturais.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Objetivos principais:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Garantir renda emergencial para trabalhadores da cultura</li>
                    <li>• Manter espaços artísticos e culturais em funcionamento</li>
                    <li>• Fomentar atividades culturais em todo território nacional</li>
                    <li>• Fortalecer a economia criativa brasileira</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Foco Regional - Anel Metropolitano:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Pinhais - População: ~130.000 habitantes</li>
                    <li>• Colombo - População: ~240.000 habitantes</li>
                    <li>• Piraquara - População: ~110.000 habitantes</li>
                    <li>• Fortalecimento da cultura regional paranaense</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Aldir Blanc Bio */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Aldir Blanc (1946-2020)</CardTitle>
                <CardDescription>Homenagem ao grande compositor brasileiro</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Aldir Blanc Mendes foi um dos maiores letristas da música popular brasileira, nascido no Rio de
                  Janeiro em 1946. Formado em Medicina, dedicou sua vida à música, criando parcerias memoráveis com João
                  Bosco, Guinga, Maurício Tapajós e outros grandes nomes.
                </p>
                <p className="text-gray-700">
                  Entre suas composições mais conhecidas estão "O Bêbado e a Equilibrista", "Resposta ao Tempo", "Dois
                  Pra Lá, Dois Pra Cá" e "O Mestre-Sala dos Mares". Suas letras retratavam com sensibilidade o cotidiano
                  urbano e os sentimentos humanos.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700 italic">
                    "A política que leva seu nome perpetua seu legado de valorização da cultura brasileira e do trabalho
                    dos artistas em todo o país."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SystemFooter />
    </div>
  )
}
