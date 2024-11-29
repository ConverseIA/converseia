import { Hero } from './components/hero';
import { Convertional } from './components/convertional';
import { AnimatedSection } from './components/animate-section';
import { Video } from './components/video';
import { Depoiment } from './components/depoiment';
import { TechnologyIncorporte } from './components/technology-incorporate';
import { Plans } from './components/plans';
import { Button } from './components/ui/button';
import { Header } from './components/header';
import { LINK_CPA_WHATSAPP } from './lib/constants';
import { FormContact } from './components/form-contact';

export const App = () => {
	return (
		<main className="flex w-full flex-col base:py-4 md:py-8">
			<Button className="fixed bottom-2 right-2" asChild>
				<a href={LINK_CPA_WHATSAPP} target="_blank" rel="noreferrer">
					<span className="base:hidden md:flex"> Fale conosco </span>
					<img
						src="/icons/whatsapp.png"
						alt="whatsapp-icon"
						className="size-6"
					/>
				</a>
			</Button>
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
				className="w-full py-24 max-w-6xl mx-auto scroll-mt-24"
				id="planos"
			>
				<Plans />
			</AnimatedSection>

			<AnimatedSection
				className="w-full h-screen py-24 max-w-6xl mx-auto scroll-mt-24"
				id="contato"
			>
				<FormContact />
			</AnimatedSection>
		</main>
	);
};
