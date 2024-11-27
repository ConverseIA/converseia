import { Button } from './ui/button';

export const Hero = () => {
	return (
		<div className="px-4 flex">
			<div className="flex flex-col gap-4 justify-center">
				<h1 className="max-w-xl text-4xl font-bold">
					Automotize o atendimento desde a recepção de processos, com
					funcionários de IA que trabalham{' '}
					<span className="text-primary">24h por dia.</span>
				</h1>

				<h3 className="max-w-sm">
					Agentes de Inteligência Artificial para receber toda a demanda de
					atendimento do seu escritório
				</h3>
				<Button className="max-w-56 h-12 mt-4">Teste 20 dias grátis</Button>
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
