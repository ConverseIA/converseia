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
