import { Header } from './components/header';
import { Hero } from './components/hero';
import { Convertional } from './components/convertional';
import { AnimatedSection } from './components/animate-section';
import { Video } from './components/video';
import { Depoiment } from './components/depoiment';
import { TechnologyIncorporte } from './components/technology-incorporate';
import { PLANS_AVALIABLE } from './lib/constants';

export const App = () => {
	return (
		<main className=" flex flex-col py-8">
			<Header />
			<AnimatedSection id="inicio" className="max-w-6xl mx-auto">
				<Hero />

				<Convertional />
			</AnimatedSection>

			<AnimatedSection
				className="w-full h-screen bg-dark-primary py-24"
				id="sobre"
			>
				<Video />
			</AnimatedSection>

			<AnimatedSection id="recursos" className="w-full max-w-7xl mx-auto">
				<Depoiment />
			</AnimatedSection>

			<AnimatedSection className="size-full bg-dark-primary py-24">
				<TechnologyIncorporte />
			</AnimatedSection>

			<AnimatedSection className="w-full h-screen py-24 max-w-6xl mx-auto">
				<h1 className="text-white text-center font-bold text-4xl">
					Escolha o <span className="text-secondary">plano sob medida</span>{' '}
					<br /> para você:
				</h1>

				<div className="grid grid-cols-3 gap-6">
					{PLANS_AVALIABLE.map((plans) => (
						<div
							className="border-2 border-background bg-gradient-to-b from-primary-light to-primary-dark p-6 flex flex-col gap-3 rounded-xl size-full"
							key={plans.title}
						>
							<h3 className="text-center font-bold text-4xl">{plans.title}</h3>
							<h4 className="text-center text-2xl font-semibold">
								R$ {plans.price}/mês
							</h4>
							<div className="font-semibold">
								{plans.list?.map((charge: any, index: any) => (
									<div
										key={`${plans.title}-${index}`}
										className="flex items-start gap-2"
									>
										<img
											src="/icons/verify-white.svg"
											alt="verify-icon"
											className="pt-2"
										/>
										<span>{charge}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</AnimatedSection>
		</main>
	);
};
