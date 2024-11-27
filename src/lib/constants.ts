export const LINK_NAVIGATE = [
	{
		href: '#inicio',
		label: 'Início',
	},
	{
		href: '#sobre',
		label: 'Sobre',
	},
	{
		href: '#recursos',
		label: 'Recursos',
	},
	{
		href: '#planos',
		label: 'Planos',
	},
	{
		href: '#afiliados',
		label: 'Afiliados',
	},
];

export function getInitials(name: string): string {
	// Split the name into words
	const words = name.split(' ');
	// Get the first letter of each word, capitalize it, and join them
	const initials = words.map((word) => word[0].toUpperCase()).join('');
	return initials;
}

export const CHARGES_AVALIABLE = [
	{
		title: 'Secretária',
		list: [
			'Compreende a demanda',
			'Encaminha o atendimento para o setor ou Agente de IA responsável',
			'Faz: Agendamento, Cancelamento, Reagendamento',
			'Gerenciamento das reuniões',
			'Encaminha para o humano quando necessário',
		],
	},
	{
		title: 'SDR - Pré Vendor(a)',
		list: [
			'Identifica a demanda',
			'Analisa a situação e a viabilidade do caso',
			'Faz a qualificação necessária para a conversão da pessoa em cliente',
			'Convida e encaminha para o agendamento',
			'Encaminha para o humano quando necessário',
			'Preenche o CRM',
		],
	},
	{
		title: 'Suporte - Especialista em Consulta de Processos',
		list: [
			'Faz a consulta de dados no PJE',
			'Retorna para o cliente com as informações do processo sem jurisdiquês',
			'Responde as dúvidas do cliente em relação aos processos',
			'Movimentação processual em tempo real',
			'Encaminha para o humano quando necessário',
		],
	},
	{
		title: 'Social Selling',
		list: [
			'Identifica a demanda',
			'Analisa a situação e a viabilidade do caso',
			'Faz a qualificação necessária para a conversão da pessoa em cliente',
			'Convida e encaminha para o agendamento',
			'Encaminha para o humano quando necessário',
			'Preenche o CRM',
		],
	},
];

export const PLANS_AVALIABLE = [
	{
		title: 'Escritório Essencial',
		price: '799',
		list: [
			'5 Atendentes Humanos',
			'1 Secretária de Inteligência Artificial',
			'CRM Personalizado para o setor Jurídico',
			'Business Intelligence para performance dos Agentes de IA',
			'Multicanais / Ominichannel - Disponibilidade de integrar 1 canal de Whatsapp QR Code, +1 Whatsapp Oficial, +1 do Instagram/Direct',
			'Até 10 mil contatos',
			'* Bônus de R$ 300 para consumir em média até 3.000 conversas com seu Agente de IA',
		],
	},
	{
		title: 'Escritório Avançado',
		price: '1.890',
		list: [
			'10 Atendentes Humanos',
			'Até 3 Agentes de Artificial - sem consulta de processos',
			'Módulo de Pesquisas de Satisfação e Acompanhamento do contato (FUP) por IA',
			'CRM Personalizado para o setor Jurídico > Business Intelligence para performance dos Agentes de IA',
			'Disponibilidade de integrar 1 canal de Whatsapp QR Code, +1 Whatsapp Oficial, +1 de Instagram/Direct',
			'Até 25 mil contatos',
			'* Bônus de R$ 300 para consumir em média até 4.000 conversas com seu Agente de IA',
		],
	},
	{
		title: 'Escritório de Excelência',
		price: '2.499',
		list: [
			'20 Atendentes Humanos',
			'Até 5 Agentes de Artificial - incluindo consulta de processos',
			'Módulo de Pesquisas de Satisfação e Acompanhamento do contato (FUP) por IA',
			'CRM Personalizado para o setor Jurídico',
			'Business Intelligence para performance dos Agentes de IA',
			'Disponibilidade de integrar 1 canal de Whatsapp QR Code, +1 Whatsapp Oficial, +1 de Instagram/Direct',
			'Até 10 mil contatos',
			'* Bônus de R$ 300 para consumir em média até 5.000 conversas com seu Agente de IA',
			'* Bônus de R$ 300 para consumir em média até 800 processos dos clientes do seu escritório',
		],
	},
];
