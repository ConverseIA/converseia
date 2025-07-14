export function getInitials(name: string): string {
	// Split the name into words
	const words = name.split(' ');
	// Get the first letter of each word, capitalize it, and join them
	const initials = words.map((word) => word[0].toUpperCase()).join('');
	return initials;
}

export const TITLE = "Cargos Disponíveis";

export const CHARGES_AVALIABLE = [
	{
		title: 'Secretária',
		list: [
			'Compreende a demanda inicial',
			'Encaminha para o setor ou Agente de IA responsável',
			
		],
	},
	{
		title: 'SDR - Pré Vendedor(a)',
		list: [
			'Investiga a viabilidade do caso',
			'Entende a situação do potencial cliente',
			'Faz o processo de qualificação',
			'Convida e encaminha o cliente para o agendamento',
		],
	},
	{
		title: 'Suporte - Consulta de Processos',
		list: [
			'Faz a consulta de dados no PJE',
			'Retorna informações sobre o processo sem jurisdiquês',
			'Responde todas as dúvidas do cliente',
			'Acompanha a movimentação processual em tempo real',
			
		],
	},
	{
		title: 'Social Selling',
		list: [
			'Identifica a demanda',
			'Compreende a demanda inicial',
			'Encaminha para o setor ou Agente de IA responsável',
			'Recolhe o contato e faz contato ativo no whatsapp',
		],
	},
	{
		title: 'Secretária Agendamento',
		list: [
			'Agenda, cancela e remarcar reuniões',
			'Organiza a Agenda da Equipe',
		],
	},
	{
		title: 'Follow UP',
		list: [
		'Envia lembretes automáticos para leads que ainda não responderam',
		'Realiza tentativas de retorno com abordagens personalizadas',
		'Retoma conversas pausadas de forma contextualizada',
		],
	},
];
export const PLANS_AVALIABLE = [
	{
		title: 'Escritório Essencial',
		price: '499',
		list: [
			'Até 5 acessos e 5 mil contatos na plataforma',
			'WhatsApp QR Code, WhatsApp Oficial, Instagram/Direct e mais',
			'Todos os recursos avançados da plataforma + CRM Jurídico',
		],
	},

	{
		title: 'Escritório Avançado',
		price: '899',
		list: [
			'Tudo do plano Escritório Essencial, mais:',
			'Agente SDR',
			'4 tentativas de Follow-UP (FUP) fluido e personalizado',
			'Bônus de R$300 de API para até 1 mil conversas com seu Agente de IA',
		],
		buttonText: 'Teste grátis 7 dias', // Adicione apenas o texto
	},
	{
		title: 'Escritório Personalizado',
		price: ' A definir',
		list: [
			'Personalize o seu plano de acordo com a sua necessidade.',
		],
	},
];

export const LINK_CTA_WHATSAPP =
	'https://wa.me/5581991656423?text=Gostaria+de+saber+mais+sobre+a+ConverseIA+Direito';

export const LINK_VIDEO =
	'https://res.cloudinary.com/djlmnni49/video/upload/v1744822684/p5v7xcegbarzgevauk54.mp4';

export const LINK_AFFILIATES = '#';

export const LINK_LOGIN = '#';

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
		href: 'https://converseia.gitbook.io/converseia-docs', 
		label: 'Documentação',
	},
];

export const LINK_FOR_LINKEDIN = 'https://www.linkedin.com/company/converseia-direito';

export const LINK_FOR_INSTAGRAM = 'https://www.instagram.com/converse.ia/';