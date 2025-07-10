import { SYSTEM_CONFIG } from "@/lib/config"

export function SystemFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{SYSTEM_CONFIG.name}</h3>
            <p className="text-gray-300 text-sm">{SYSTEM_CONFIG.longDescription}</p>
            <p className="text-gray-400 text-xs mt-2">Versão {SYSTEM_CONFIG.version}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href={SYSTEM_CONFIG.links.minc}
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ministério da Cultura
                </a>
              </li>
              <li>
                <a
                  href={SYSTEM_CONFIG.links.lei}
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lei nº 14.399/2022
                </a>
              </li>
              <li>
                <a
                  href={SYSTEM_CONFIG.links.transparencia}
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portal da Transparência
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-300 text-sm">
              {SYSTEM_CONFIG.author}
              <br />
              {SYSTEM_CONFIG.contact.address}
              <br />
              {SYSTEM_CONFIG.contact.city}, {SYSTEM_CONFIG.contact.zipCode}
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 {SYSTEM_CONFIG.author}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
