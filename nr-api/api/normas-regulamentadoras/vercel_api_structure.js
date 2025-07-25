// api/normas-regulamentadoras/index.js
// Base de dados das NRs
const nrsDatabase = {
  "NR-01": {
    numero: "NR-01",
    titulo: "Disposições Gerais e Gerenciamento de Riscos Ocupacionais",
    objetivo: "Estabelece as diretrizes e os requisitos para o gerenciamento dos riscos ocupacionais e as medidas de prevenção em Segurança e Saúde no Trabalho.",
    aplicacao: "Esta Norma se aplica aos empregadores e trabalhadores abrangidos pela CLT.",
    principais_pontos: [
      "Gerenciamento de riscos ocupacionais",
      "Programa de Gerenciamento de Riscos (PGR)",
      "Análise preliminar de riscos",
      "Medidas de prevenção"
    ],
    ultima_atualizacao: "2019-07-24"
  },
  "NR-06": {
    numero: "NR-06",
    titulo: "Equipamentos de Proteção Individual - EPI",
    objetivo: "Estabelece os requisitos para fornecimento, uso, guarda e conservação de equipamentos de proteção individual.",
    aplicacao: "Aplica-se a todas as empresas que possuam empregados regidos pela CLT.",
    principais_pontos: [
      "Obrigatoriedade do fornecimento gratuito",
      "Certificado de Aprovação (CA)",
      "Treinamento para uso correto",
      "Responsabilidades do empregador e empregado"
    ],
    ultima_atualizacao: "2018-12-20"
  },
  "NR-35": {
    numero: "NR-35",
    titulo: "Trabalho em Altura",
    objetivo: "Estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura.",
    aplicacao: "Aplica-se diretamente aos trabalhos em altura, onde há risco de queda livre superior a 2,00m.",
    principais_pontos: [
      "Análise de Risco (AR)",
      "Permissão de Trabalho (PT)",
      "Sistemas de proteção contra quedas",
      "Capacitação e treinamento obrigatórios"
    ],
    ultima_atualizacao: "2012-03-27"
  },
  "NR-10": {
    numero: "NR-10",
    titulo: "Segurança em Instalações e Serviços em Eletricidade",
    objetivo: "Estabelece os requisitos e condições mínimas objetivando a implementação de medidas de controle e sistemas preventivos de segurança e saúde de trabalhadores que direta ou indiretamente interajam em instalações elétricas e serviços com eletricidade.",
    aplicacao: "Esta NR se aplica às fases de geração, transmissão, distribuição e consumo, incluindo as etapas de projeto, construção, montagem, operação, manutenção das instalações elétricas.",
    principais_pontos: [
      "Medidas de controle",
      "Medidas de proteção coletiva",
      "Medidas de proteção individual",
      "Segurança em projetos",
      "Segurança na construção e montagem",
      "Segurança em instalações desenergizadas",
      "Segurança em instalações energizadas"
    ],
    ultima_atualizacao: "2004-12-08"
  }
};

export default function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    // Listar todas as NRs
    const nrsList = Object.values(nrsDatabase).map(nr => ({
      numero: nr.numero,
      titulo: nr.titulo,
      descricao: nr.objetivo.substring(0, 100) + "..."
    }));
    
    return res.status(200).json({
      success: true,
      data: nrsList
    });
  }

  return res.status(405).json({ success: false, error: 'Método não permitido' });
}