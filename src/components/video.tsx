 
  
 
   import { LINK_VIDEO } from '@/lib/constants';

export const Video = () => {
	return (
		<div className="flex flex-col h-full justify-center gap-10 base:px-2 md:px-0">
			<h2 className="base:text-3xl md:text-4xl font-bold text-white text-center">
				Conheça mais sobre a <br /> ConverseIA Direito:
			</h2>
			<div className="max-w-5xl flex items-center justify-center mx-auto bg-neutral-400 w-full h-[500px] rounded-xl shadow text-black">
				<video
					src={LINK_VIDEO}
					controls
					className="w-full h-full rounded-xl"
					autoPlay={true} // autoPlay é gerenciado pelo estado
					muted // Inicia com som
				>
					Seu navegador não suporta o elemento de vídeo.
				</video>
			</div>
		</div>
	);
};
