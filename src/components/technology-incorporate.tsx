import { CHARGES_AVALIABLE } from '@/lib/constants';
import Marquee from 'react-fast-marquee';

export const TechnologyIncorporte = () => {
	return (
		<div className="flex flex-col gap-8 items-center max-w-7xl mx-auto">
			<h2 className="text-4xl font-bold text-center text-light-primary">
				Tecnologias incorporadas
			</h2>
			<div className="bg-gradient-to-r py-4 px-6 from-dark-primary via-dark-third to-dark-primary rounded-lg">
				<Marquee
					autoFill
					gradient
					gradientColor="#1B1B21"
					className="gap-16 items-center"
				>
					{[
						{ src: '/icons/openai.svg', alt: 'OpenAI' },
						{ src: '/icons/brand-unknow.svg', alt: 'Marca desconhecida' },
						{ src: '/icons/grok.png', alt: 'grok' },
						{ src: '/icons/google.svg', alt: 'Google' },
						{ src: '/icons/meta.svg', alt: 'Meta' },
						{ src: '/icons/analytics.svg', alt: 'Google Analytics' },
						{ src: '/icons/gemini.svg', alt: 'Gemini' },
						{ src: '/icons/claude-ai.png', alt: 'claude-ai' },
					].map((icon, index) => (
						<img
							key={index}
							className="size-16 object-contain"
							src={icon.src}
							alt={icon.alt}
						/>
					))}
				</Marquee>
			</div>

			<div className="flex flex-col gap-6">
				<p className="base:text-3xl md:text-4xl text-center font-bold max-w-3xl mx-auto">
					Se um é <span className="text-secondary">revolucionário</span>,
					imagina um time completo disponível para seu cliente {' '}
					<span className="text-secondary">Conversar</span> com a{' '}
					<span className="text-secondary">IA</span> a qualquer momento
				</p>

				<p className="base:text-lg md:text-base text-white base:max-w-[273px] base:mx-auto text-center font-semibold !leading-tight">
					Conheça os cargos que alguns Funcionários da{' '}
					<span className="text-secondary">ConverseIA</span> poderão ocupar:
				</p>

				<div className="grid base:grid-cols-1 md:grid-cols-4 base base:gap-4 md:gap-6 mt-4 base:px-2 md:px-0">
					{CHARGES_AVALIABLE.map((avaliable: any) => (
						<div
							className="flex flex-col base:gap-3 md:gap-6"
							key={avaliable.title}
						>
							<div className="w-full flex base:justify-center md:justify-start">
								<div className="bg-secondary py-1.5 px-2 rounded w-fit text-center leading-5 text-dark-primary font-bold text-xl">
									{avaliable.title}
								</div>
							</div>

							<div className="font-semibold">
								{avaliable.list?.map((charge: any, index: any) => (
									<div
										key={`${avaliable.title}-${index}`}
										className="flex gap-2"
									>
										<img src="/icons/verify.svg" alt="verify-icon" />
										<span>{charge}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="flex flex-col gap-8 justify-center  base:px-2 md:px-0">
					<h3 className="text-white font-bold text-4xl text-center">
						Integração com processos ATIVOS em todos os tribunais do{' '}
						<span className="text-secondary">Brasil</span>
					</h3>
					<div>
						<div className="bg-white flex gap-6 items-center justify-center rounded-xl max-w-5xl mx-auto w-full flex-wrap">
							<Marquee autoFill pauseOnHover className="gap-16">
								<img
									src="/brands/pje.svg"
									alt="pje"
									className="base:size-16 object-contain md:size-24"
								/>
								<img
									src="/brands/tjpe.svg"
									alt="tjpe"
									className="base:size-16 object-contain md:size-24"
								/>
								<img
									src="/brands/tjsp.svg"
									alt="tjsp"
									className="base:size-16 object-contain md:size-24"
								/>
								<img
									src="/brands/pjerj.svg"
									alt="pjerj"
									className="base:size-16 object-contain md:size-24"
								/>
								<img
									src="/brands/tjam.png"
									alt="tjam"
									className="base:size-20 object-contain md:size-32"
								/>
								<img
									src="/brands/tjce.png"
									alt="tjce"
									className="base:size-20 object-contain md:size-32"
								/>
								<img
									src="/brands/tjmg.png"
									alt="tjmg"
									className="base:size-20 object-contain md:size-32"
								/>
							</Marquee>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
