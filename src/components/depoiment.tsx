import { CardDepoiment } from './card-depoiment';

export const Depoiment = () => {
	return (
		<div className="flex flex-col gap-16 items-center">
			<h2 className="text-4xl font-bold">Recursos</h2>

			<div className="grid base:grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8 bg-dark-primary rounded-lg shadow-lg">
  <CardDepoiment
    name="Recurso 1"
    job="SDR - Pré Vendedor(a)"
    depoiment="
      Investiga a viabilidade do caso.
      Entende a situação do potencial cliente.
      Faz o processo de qualificação.
      Convida e encaminha o cliente para o agendamento.
      Encaminha para humano apenas quando necessário.
      Preenche o CRM de forma automática."
  />
  <CardDepoiment
    name="Recurso 2"
    job="Secretária"
    depoiment="
      Compreende a demanda inicial.
      Encaminha para o setor ou Agente de IA responsável.
      Agenda, cancela e remarca reuniões.
      Organiza a Agenda da Equipe.
      Encaminha para o humano quando necessário."
  />
  <CardDepoiment
    name="Recurso 3"
    job="Consulta de processos"
    depoiment="
      Faz a consulta de dados no PJE.
      Retorna informações sobre o processo sem jurisdiquês.
      Responde todas as dúvidas do cliente.
      Acompanha a movimentação processual em tempo real.
      Encaminha para humano apenas quando necessário."
  />
  <CardDepoiment
    name="Recurso 4"
    job="Social Selling"
    depoiment="
      Identifica a demanda.
      Analisa a situação e a viabilidade do caso.
      Faz a qualificação necessária para conversão em cliente.
      Convida e encaminha para o agendamento.
      Encaminha para humano apenas quando necessário.
      Recolhe contato e faz contato ativo no WhatsApp."
  />
</div>
			<div className="flex base:flex-col md:flex-row items-center gap-8">
				<div className="flex-1 flex size-full">
					<img src="/elements/mobile-wrapper.png" alt="mobile-wrapper" />
				</div>

				<div className="flex flex-1 w-full flex-col gap-4 base:px-2 md:px-0">
					<h1 className="base:text-4xl md:text-6xl font-bold base:text-center md:text-left">
						O que é um <br /> funcionário 24h?
					</h1>

					<div className="space-y-6 font-semibold  base:text-sm md:text-base">
						<p className="base:text-center md:text-left">
							É um Agente de Inteligência Artificial personalizado, 
							Como um "ChatGPT" adaptado exclusivamente para atender seus futuros
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
								Deixe seu advogado <br /> ser advogado
							</span>
						</div>

						<p>
							Atendimento 100% automatizado e também 100% fluido.
							Proporcionando para seu escritório o tempo hábil para focar
							nas atividades jurídicas e genericas, sem preocupações com 
							o atendimento.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
