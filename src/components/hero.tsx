import { LINK_CTA_WHATSAPP } from '@/lib/constants';
import { Button } from './ui/button';

export const Hero = () => {
	return (
		<div className="px-4 flex base:flex-col-reverse md:flex-row">
			<div className="flex flex-col gap-4 justify-center base:items-center md:items-start base:text-center md:text-left">
				<h1 className="max-w-xl text-4xl font-bold ">
					Automotize o atendimento com funcionários de IA que trabalham{' '}
					<span className="text-primary">24h por dia</span>
				</h1>

				<h3 className="max-w-sm">
  {'Agentes de Inteligência Artificial para receber toda a demanda de ' +
  'atendimento do seu escritório'}
</h3>
				<Button
					className="base:max-w-[65%] w-full md:max-w-56 base:h-16 h-12 mt-4 !px-2"
					asChild
				>
					<a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
						Teste 20 dias grátis
					</a>
				</Button>
			</div>

			<div>
				<img
					src="/elements/hero-wrapper.png"
					alt="hero-wrapper"
					className="object-contain size-full"
				/>
			</div>
		</div>
	);
};
