import { Header } from './components/header';
import { Hero } from './components/hero';
import { Convertional } from './components/convertional';
import { AnimatedSection } from './components/animate-section';
import { Video } from './components/video';
import { Depoiment } from './components/depoiment';
import { TechnologyIncorporte } from './components/technology-incorporate';

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
		</main>
	);
};
