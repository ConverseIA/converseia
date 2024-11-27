import { Button } from './ui/button';

export const Video = () => {
	return (
		<div className="flex flex-col gap-10">
			<h2 className="text-4xl font-bold text-white text-center">
				Conheça mais sobre o <br /> ConverseIA Direito:
			</h2>

			<div className="max-w-5xl flex items-center justify-center mx-auto bg-neutral-400 w-full h-[500px] rounded-xl shadow text-black">
				Video
			</div>

			<Button className="max-w-64 h-12 w-full mx-auto">
				Converse com a IA
			</Button>
		</div>
	);
};
