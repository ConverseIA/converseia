import Marquee from 'react-fast-marquee';
import { Card } from './card';

export const Convertional = () => {
	return (
		<div className="flex flex-col base:mt-4 md:mt-0 gap-8 base:px-2 md:px-0">
			<div className="grid grid-row-1 base:grid-cols-1 md:grid-cols-3 gap-6">
				<Card title="Resolve até" hightlight="90%" />
				<Card title="Taxa de conversão alta" hightlight="+30%" />
				<Card title="Economia de até" hightlight="70%" />
			</div>

			<div className="flex justify-center">
				<h3 className="text-4xl font-bold"> Alguns escritórios parceiros</h3>
			</div>

			<div className="bg-gradient-to-r py-4 from-background via-dark-third to-background">
				<Marquee autoFill gradient gradientColor="#17171B" className="gap-16">
					<img src="/brands/vibra.svg" alt="vibra" />
					<img src="/brands/eurofarma.svg" alt="eurofarma" />
					<img src="/brands/mercado-bitcoin.svg" alt="mercado-bitcoin" />
					<img src="/brands/grupo-fv.svg" alt="grupo-fv" />
					<img src="/brands/mc-adv.svg" alt="mc-adv" />
				</Marquee>
			</div>
		</div>
	);
};
