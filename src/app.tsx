import { Header } from './components/header';
import { Hero } from './components/hero';
import { Convertional } from './components/convertional';
import { AnimatedSection } from './components/animate-section';
import { Video } from './components/video';
import { Depoiment } from './components/depoiment';
import { TechnologyIncorporte } from './components/technology-incorporate';
import { Plans } from './components/plans';

export const App = () => {
	return (
		<main className="flex w-full flex-col base:py-4 md:py-8">
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

			<AnimatedSection
				id="recursos"
				className="w-full max-w-7xl mx-auto scroll-mt-24"
			>
				<Depoiment />
			</AnimatedSection>

			<AnimatedSection className="size-full bg-dark-primary py-24">
				<TechnologyIncorporte />
			</AnimatedSection>

			<AnimatedSection
				className="w-full h-screen py-24 max-w-6xl mx-auto scroll-mt-24"
				id="planos"
			>
				<Plans />
			</AnimatedSection>
		</main>
	);
};
