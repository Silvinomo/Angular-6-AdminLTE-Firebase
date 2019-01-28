export class Emissor {
    sigla: string
    descricao: string;
}

export const Emissores = [
    { 'sigla': 'ABNC', 'descricao': 'Academia Brasileira de Neurocirurgia' },
    { 'sigla': 'CGPI/DUREX/DPF', 'descricao': 'Coordenação Geral de Polícia de Imigração da Polícia Federal' },
    { 'sigla': 'CGPI', 'descricao': 'Coordenação-Geral de Privilégios e Imunidades' },
    { 'sigla': 'CGPMAF', 'descricao': 'Coordenadoria Geral de Polícia Marítima, Aeronáutica e de Fronteiras' },
    { 'sigla': 'CNIG', 'descricao': 'Conselho Nacional de Imigração' },
    { 'sigla': 'CNT', 'descricao': 'Carteira Nacional de Habilitação' },
    { 'sigla': 'COREN', 'descricao': 'Conselho Regional de Enfermagem' },
    { 'sigla': 'CRA', 'descricao': 'Conselho Regional de Administração' },
    { 'sigla': 'CRAS', 'descricao': 'Conselho Regional de Assistentes Sociais' },
    { 'sigla': 'CRB', 'descricao': 'Conselho Regional de Biblioteconomia' },
    { 'sigla': 'CRC', 'descricao': 'Conselho Regional de Contabilidade' },
    { 'sigla': 'CRE', 'descricao': 'Conselho Regional de Estatística' },
    { 'sigla': 'CREA', 'descricao': 'Conselho Regional de Engenharia Arquitetura e Agronomia' },
    { 'sigla': 'CRECI', 'descricao': 'Conselho Regional de Corretores de Imóveis' },
    { 'sigla': 'CREFIT', 'descricao': 'Conselho Regional de Fisioterapia e Terapia Ocupacional' },
    { 'sigla': 'CRF', 'descricao': 'Conselho Regional de Farmácia' },
    { 'sigla': 'CRM', 'descricao': 'Conselho Regional de Medicina' },
    { 'sigla': 'CRN', 'descricao': 'Conselho Regional de Nutrição' },
    { 'sigla': 'CRO', 'descricao': 'Conselho Regional de Odontologia' },
    { 'sigla': 'CRP', 'descricao': 'Conselho Regional de Psicologia' },
    { 'sigla': 'CRPRE', 'descricao': 'Conselho Regional de Profissionais de Relações Públicas' },
    { 'sigla': 'CRQ', 'descricao': 'Conselho Regional de Química' },
    { 'sigla': 'CRRC', 'descricao': 'Conselho Regional de Representantes Comerciais' },
    { 'sigla': 'CRMV', 'descricao': 'Conselho Regional de Medicina Veterinária' },
    { 'sigla': 'CSC', 'descricao': 'Carteira Sede Carpina de Pernambuco' },
    { 'sigla': 'CTPS', 'descricao': 'Carteira de Trabalho e Previdência Social' },
    { 'sigla': 'DIC', 'descricao': 'Diretoria de Identificação Civil' },
    { 'sigla': 'DIREX', 'descricao': 'Diretoria-Executiva' },
    { 'sigla': 'DPMAF', 'descricao': 'Divisão de Polícia Marítima, Área e de Fronteiras' },
    { 'sigla': 'DPT', 'descricao': 'Departamento de Polícia Técnica Geral' },
    { 'sigla': 'DST', 'descricao': 'Programa Municipal DST/Aids' },
    { 'sigla': 'FGTS', 'descricao': 'Fundo de Garantia do Tempo de Serviço' },
    { 'sigla': 'FIPE', 'descricao': 'Fundação Instituto de Pesquisas Econômicas' },
    { 'sigla': 'FLS', 'descricao': 'Fundação Lyndolpho Silva' },
    { 'sigla': 'GOVGO', 'descricao': 'Governo do Estado de Goiás' },
    { 'sigla': 'I CLA', 'descricao': 'Carteira de Identidade Classista' },
    { 'sigla': 'IFP', 'descricao': 'Instituto Félix Pacheco' },
    { 'sigla': 'IICCECF/RO', 'descricao': 'Instituto de Identificação Civil e Criminal Engrácia da Costa Francisco de Rondônia' },
    { 'sigla': 'IIMG', 'descricao': 'Inter-institutional Monitoring Group' },
    { 'sigla': 'IML', 'descricao': 'Instituto Médico-Legal' },
    { 'sigla': 'IPC', 'descricao': 'Índice de Preços ao Consumidor' },
    { 'sigla': 'IPF', 'descricao': 'Instituto Pereira Faustino' },
    { 'sigla': 'MAE', 'descricao': 'Ministério da Aeronáutica' },
    { 'sigla': 'MEX', 'descricao': 'Ministério do Exército' },
    { 'sigla': 'MMA', 'descricao': 'Ministério da Marinha' },
    { 'sigla': 'OAB', 'descricao': 'Ordem dos Advogados do Brasil' },
    { 'sigla': 'OMB', 'descricao': 'Ordens dos Músicos do Brasil' },
    { 'sigla': 'PCMG', 'descricao': 'Policia Civil do Estado de Minas Gerais' },
    { 'sigla': 'PMMG', 'descricao': 'Polícia Militar do Estado de Minas Gerais' },
    { 'sigla': 'POF ou DPF', 'descricao': 'Polícia Federal' },
    { 'sigla': 'POM', 'descricao': 'Polícia Militar' },
    { 'sigla': 'SDS', 'descricao': 'Secretaria de Defesa Social (Pernambuco)' },
    { 'sigla': 'SNJ', 'descricao': 'Secretaria Nacional de Justiça / Departamento de Estrangeiros' },
    { 'sigla': 'SECC', 'descricao': 'Secretaria de Estado da Casa Civil' },
    { 'sigla': 'SEJUSP', 'descricao': 'Secretaria de Estado de Justiça e Segurança Pública – Mato Grosso' },
    { 'sigla': 'SES ou EST', 'descricao': 'Carteira de Estrangeiro' },
    { 'sigla': 'SESP', 'descricao': 'Secretaria de Estado da Segurança Pública do Paraná' },
    { 'sigla': 'SJS', 'descricao': 'Secretaria da Justiça e Segurança' },
    { 'sigla': 'SJTC', 'descricao': 'Secretaria da Justiça do Trabalho e Cidadania' },
    { 'sigla': 'SJTS', 'descricao': 'Secretaria da Justiça do Trabalho e Segurança' },
    { 'sigla': 'SPTC', 'descricao': 'Secretaria de Polícia Técnico-Científica' },
    { 'sigla': 'SSP', 'descricao': 'Secretaria de Segurança Pública' }
]
