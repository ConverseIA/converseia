import { Button } from './ui/button';

export const Video = () => {
	return (
		<div className="flex flex-col h-full justify-center gap-10 base:px-2 md:px-0">
			<h2 className="base:text-3xl md:text-4xl font-bold text-white text-center">
				Conheça mais sobre a <br /> ConverseIA Direito:
			</h2>

			<div className="max-w-5xl flex items-center justify-center mx-auto bg-neutral-400 w-full h-[500px] rounded-xl shadow text-black">
				<video
					src="https://res.cloudinary.com/djlmnni49/video/upload/v1732852437/oiveoadic5wsn4zivjw6.mp4"
					controls
					className="w-full h-full rounded-xl"
				>
					Seu navegador não suporta o elemento de vídeo.
				</video>
			</div>

			<Button className="max-w-64 h-12 w-full mx-auto">
				Converse com a IA
			</Button>
		</div>
	);
};
