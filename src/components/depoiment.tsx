import { CardDepoiment } from './card-depoiment';

export const Depoiment = () => {
	return (
		<div className="flex flex-col gap-16 items-center">
			<h2 className="text-4xl font-bold">Depoimentos</h2>

			<div className="grid base:grid-cols-1 md:grid-cols-2 base:gap-2 md:gap-4 base:px-2 md:px-0">
				<CardDepoiment
					name="Eugenia Belo"
					job="Assistente Jurídica"
					depoiment="A funcionalidade das IAs é assustadora, permitindo uma agilidade impressionante no atendimento aos clientes e otimizando a capacidade do escritório. 
					A plataforma se destaca ao oferecer bons mecanismos, e a integração do CRM é um diferencial significativo, possibilitando o gerenciamento completo do cliente em um único lugar. Gostaria de ter descoberto antes!."
				/>
				<CardDepoiment
					name="Maykom Carvalho"
					job="Advogado/sócio de Escritório"
					depoiment="Incrível! A inteligência incorporada nos Agentes da ConverseIA é surpreendente. Agora consigo focar em gerir meu escritório."
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
