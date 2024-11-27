import Marquee from 'react-fast-marquee';
import { Card } from './components/card';
import { Header } from './components/header';
import { Hero } from './components/hero';

export const App = () => {
	return (
		<main className=" flex flex-col py-8">
			<Header />
			<div className="max-w-6xl mx-auto">
				<Hero />

				<div className="flex flex-col gap-8">
					<div className="grid grid-row-1 grid-cols-3 gap-6">
						<Card title="Teste 20 dias grátis" hightlight="94%" />
						<Card title="IA aumenta sua taxa de conversão" hightlight="+30%" />
						<Card title="Economia no escritório de até" hightlight="70%" />
					</div>

					<div className="flex justify-center">
						<h3 className="text-4xl font-bold">dos escritórios</h3>
					</div>

					<div className="bg-gradient-to-r py-4 from-background via-dark-third to-background">
						<Marquee autoFill gradient gradientColor="#17171B">
							<img src="/brands/vibra.svg" alt="vibra" />
							<img src="/brands/eurofarma.svg" alt="eurofarma" />
							<img src="/brands/mercado-bitcoin.svg" alt="mercado-bitcoin" />
						</Marquee>
					</div>
				</div>
			</div>
		</main>
	);
};
