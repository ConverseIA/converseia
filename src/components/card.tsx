interface ICard {
	title: string;
	hightlight: string;
}

export const Card = ({ hightlight, title }: ICard) => {
	return (
		<div className="bg-gradient-to-b from-primary-light to-primary-dark p-0.5 rounded-xl">
			<div className="flex items-center justify-center flex-col gap-4 bg-gradient-to-b from-dark-primary to-dark-secondary rounded-xl w-full p-4 min-h-40 h-full">
				<h4 className="text-xl font-bold  max-w-[220px] text-center">
					{title}
				</h4>
				<h2 className="text-6xl font-black text-primary">{hightlight}</h2>

				<span className="text-xl text-center">Dos atendimentos</span>
			</div>
		</div>
	);
};
