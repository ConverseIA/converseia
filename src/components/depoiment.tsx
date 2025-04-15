import { CardDepoiment } from './card-depoiment';

export const Depoiment = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h2 className="text-4xl font-bold">Principais recursos da plataforma</h2>

      <div className="grid base:grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8 bg-dark-primary rounded-lg shadow-lg">
        <CardDepoiment
          icon="/icons/ia.png" // Caminho completo para o ícone
          name=""
          job="IA Conversacional Avançada"
          depoiment="
            Na plataforma temos transcrição de todos os áudios, agentes com diálogo fluido: ouvindo, enviando audio, lendo documentos, imagens, concatenando mensagens
         e enviando mensagens partidas, além de preencheer as principais informações da conversa de forma automática.
          "
        />
        <CardDepoiment
          icon="/icons/multi.png" // Caminho completo para o ícone
          name=" "
          job="Multi Canais"
          depoiment="
            Conecte várias contas da mesma rede social – como múltiplos perfis do Instagram, Facebook, WhatsApp, Telegram, Twilio e outras – em um único lugar."
        />
        <CardDepoiment
          icon="/icons/smartflow.png" // Caminho completo para o ícone
          name=""
          job="Automações personalizadas"
          depoiment="
            Crie CHATBOTS, conversas personalizadas e automáticas com ações e condições lógicas para aumentar vendas e a satisfação do cliente."
        />
        <CardDepoiment
          icon="/icons/agendamento.png" // Caminho completo para o ícone
          name=""
          job="Agendamento automático"
          depoiment="
           Organize compromissos e reuniões de forma automática e fluida através da IA, além disso, programe lembretes para evitar a falta de comparecimento dos leads/ clientes nas reuniões."
        />
		  <CardDepoiment
          icon="/icons/integrações.png" // Caminho completo para o ícone
          name=" "
          job="Principais Integrações"
          depoiment="
            Integrações direta com PJE, Asaas, ADVBOX, principais CRM's do mercado como: Pipefy, Pipedrive, RDCRM e afins ."
        />
		  <CardDepoiment
          icon="/icons/CRM.png" // Caminho completo para o ícone
          name=" "
          job="CRM Integrado"
          depoiment="
            Gerenciamento de relacionamento com o cliente (CRM) avançado, possibilitando você a gerir as negociações em seu quadro kanban, garatindo a previsibilidade dos seus processos comerciais."
        />
      </div>
			<div className="flex base:flex-col md:flex-row items-center gap-8">
				<div className="flex-1 flex size-full">
					<img src="/elements/mobile-wrapper.png" alt="mobile-wrapper" />
				</div>

				<div className="flex flex-1 w-full flex-col gap-4 base:px-2 md:px-0">
					<h1 className="base:text-4xl md:text-6xl font-bold base:text-center md:text-left">
						O que é um <br /> Agente de IA?
					</h1>

					<div className="space-y-6 font-semibold  base:text-sm md:text-base">
						<p className="base:text-center md:text-left">
							É um funcionário de Inteligência Artificial personalizado, 
							como um "ChatGPT" adaptado exclusivamente para atender seus futuros
							e atuais clientes. Ele contém conteúdos específicos sobre
							seu escritório e sua atuação jurídica, garantindo disponibilidade
							24h por dia e resposta imediata.
						</p>

						<div className="flex items-center gap-2">
							<img src="/icons/user.svg" alt="icon-hammer" className="size-8" />{' '}
							<span className="leading-5 font-bold">
								Se comporta como um <br />
								especialista humano
							</span>
						</div>

						<p>
							Seu cliente terá uma experiência de atendimento humanizado,
							natural e fluida.
						</p>

						<div className="flex items-center gap-2">
							<img
								src="/icons/hammer.svg"
								alt="icon-hammer"
								className="size-8"
							/>
							<span className="leading-5 font-bold">
								Tenha mais tempo <br /> para gerir o seu negócio
							</span>
						</div>

						<p>
							Libere tempo hábil para focar
							na gestão do seu escritório, sem preocupações com 
							o atendimento.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
