import { CardDepoiment } from './card-depoiment';

export const Depoiment = () => {
	return (
		<div className="flex flex-col gap-16 items-center">
			<h2 className="text-4xl font-bold">Depoimentos: </h2>

			<div className="grid base:grid-cols-1 md:grid-cols-2 base:gap-2 md:gap-4 base:px-2 md:px-0">
				<CardDepoiment
					name="Simone Campos"
					job="Advogada"
					depoiment="Ferramenta prática, com alto nível de precisão em pesquisas e elaboração de peças! Seu impacto positivo no campo jurídico é inegável, e é notável ver como contribui para o avanço da prática jurídica no Brasil. Parabéns por essa inovação valiosa! Recomendo!"
				/>
				<CardDepoiment
					name="Paulo Dantas"
					job="Advogada Criminalista"
					depoiment="Fantástico! A inteligência embarcada no ChatADV realmente nos permite poupar muito tempo.
      Extremamente eficiente e assertivo.
      RECOMENDO 100%!"
				/>
			</div>

			<div className="flex base:flex-col md:flex-row items-center gap-8">
				<div className="flex-1 flex w-full">
					<img src="/elements/mobile-wrapper.png" alt="mobile-wrapper" />
				</div>

				<div className="flex flex-1 w-full flex-col gap-4 base:px-2 md:px-0">
					<h1 className="base:text-5xl md:text-6xl font-bold">
						O que é um <br /> Funcionário 24h?
					</h1>

					<div className="space-y-6 font-semibold">
						<p>
							É um Agente de Inteligência Artificial, como se você tivesse um
							"ChatGPT" personificado e especializado para atender seus futuros
							clientes com habilidades especificas e conteúdos específicos sobre
							seu escritório e sua atuação jurídica. Ele trabalha 24h por dia
							para você.
						</p>

						<div className="flex items-center gap-2">
							<img src="/icons/user.svg" alt="icon-hammer" className="size-8" />{' '}
							<span className="leading-5 font-bold">
								Se comporta como um <br />
								humano especialista
							</span>
						</div>

						<p>
							Seu cliente terá uma experiência de atendimento humanizado,
							natural e que estará sempre e imediatamente disponível.
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
							Proporcionalizando para seu escritório o tempo hábil para focar
							nas atividades advocatícias e não no atendimento apenas.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
