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
						{ src: '/icons/whatsapp.svg', alt: 'WhatsApp' },
						{ src: '/icons/instagram.svg', alt: 'Instagram' },
						{ src: '/icons/openai.svg', alt: 'OpenAI' },
						{ src: '/icons/brand-unknow.svg', alt: 'Marca desconhecida' },
						{ src: '/icons/google.svg', alt: 'Google' },
						{ src: '/icons/meta.svg', alt: 'Meta' },
						{ src: '/icons/analytics.svg', alt: 'Google Analytics' },
						{ src: '/icons/gemini.svg', alt: 'Gemini' },
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
				<p className="text-4xl text-center font-bold max-w-3xl mx-auto">
					Se um é <span className="text-secondary">revolucionário</span>,
					imagina um time que estará disponível para seu cliente{' '}
					<span className="text-secondary">Conversar</span> com a{' '}
					<span className="text-secondary">IA</span> agora mesmo
				</p>

				<p className="text-base text-white text-center font-semibold">
					Conheça os cargos que alguns Funcionários da <br />{' '}
					<span className="text-secondary">ConverseIA</span> poderão ocupar:
				</p>

				<div className="grid grid-cols-4 gap-6 mt-4">
					{CHARGES_AVALIABLE.map((avaliable: any) => (
						<div className="flex flex-col gap-6" key={avaliable.title}>
							<div className="bg-secondary py-1.5 px-2 rounded w-fit text-center leading-5 text-dark-primary font-bold text-xl">
								{avaliable.title}
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

				<div className="flex flex-col gap-8 justify-center">
					<h3 className="text-white font-bold text-4xl text-center">
						Integração com processos ATIVOS <br /> em todos os tribunais do{' '}
						<span className="text-secondary">Brasil</span>
					</h3>

					<div className="bg-white flex gap-6 items-center justify-center rounded-xl max-w-5xl mx-auto w-full">
						<img src="/brands/pje.svg" alt="pje" />
						<img src="/brands/tjpe.svg" alt="tjpe" />
						<img src="/brands/tjsp.svg" alt="tjsp" />
						<img src="/brands/pjerj.svg" alt="pjerj" />
					</div>
				</div>
			</div>
		</div>
	);
};
