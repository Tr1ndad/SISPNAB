import Link from "next/link"

const editais = [
  {
    id: 1,
    titulo: "Fomento Cultural Pinhais 2024",
    municipio: "Pinhais",
    valor: "R$ 120.000",
    status: "Ativo",
    prazo: "2024-02-15",
    tipo: "Fomento",
  },
  {
    id: 2,
    titulo: "Apoio a Espaços Culturais - Colombo",
    municipio: "Colombo",
    valor: "R$ 180.000",
    status: "Em análise",
    prazo: "2024-01-30",
    tipo: "Espaços",
  },
  {
    id: 3,
    titulo: "Renda Emergencial Cultural - Piraquara",
    municipio: "Piraquara",
    valor: "R$ 95.000",
    status: "Finalizado",
    prazo: "2024-01-15",
    tipo: "Renda",
  },
  {
    id: 4,
    titulo: "Festival de Inverno - Colombo",
    municipio: "Colombo",
    valor: "R$ 85.000",
    status: "Ativo",
    prazo: "2024-03-01",
    tipo: "Evento",
  },
  {
    id: 5,
    titulo: "Oficinas Culturais - Pinhais",
    municipio: "Pinhais",
    valor: "R$ 45.000",
    status: "Ativo",
    prazo: "2024-02-28",
    tipo: "Formação",
  },
]

export default function EditaisPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Editais</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Título</th>
              <th className="py-2 px-4 border-b">Município</th>
              <th className="py-2 px-4 border-b">Valor</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Prazo</th>
              <th className="py-2 px-4 border-b">Tipo</th>
              <th className="py-2 px-4 border-b">Ações</th>
            </tr>
          </thead>
          <tbody>
            {editais.map((edital) => (
              <tr key={edital.id}>
                <td className="py-2 px-4 border-b">{edital.titulo}</td>
                <td className="py-2 px-4 border-b">{edital.municipio}</td>
                <td className="py-2 px-4 border-b">{edital.valor}</td>
                <td className="py-2 px-4 border-b">{edital.status}</td>
                <td className="py-2 px-4 border-b">{edital.prazo}</td>
                <td className="py-2 px-4 border-b">{edital.tipo}</td>
                <td className="py-2 px-4 border-b">
                  <Link href={`/dashboard/gestor/editais/${edital.id}`} className="text-blue-500 hover:underline">
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
