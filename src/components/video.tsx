import { LINK_VIDEO } from '@/lib/constants';
import Marquee from 'react-fast-marquee';

export const Video = () => {
  return (
	<div className="flex flex-col h-full justify-center gap-6 base:px-2 md:px-0 mt-8"> {/* Ajuste aqui */}
      <h2 className="base:text-3xl md:text-4xl font-bold text-white text-center">
        Conheça mais sobre a <br /> ConverseIA Direito:
      </h2>
      <div className="max-w-5xl flex items-center justify-center mx-auto bg-neutral-400 w-full h-[500px] rounded-xl shadow text-black">
        <video
          src={LINK_VIDEO}
          controls
          className="w-full h-full rounded-xl"
          autoPlay={true}
          muted
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>

      {/* Seção de Tecnologias Incorporadas */}
      <div className="flex flex-col gap-8 items-center max-w-7xl mx-auto mt-8">
        <h2 className="text-4xl font-bold text-center text-light-primary">
          Tecnologias incorporadas
        </h2>
        <div className="bg-gradient-to-r py-4 px-6 from-dark-primary via-dark-third to-dark-primary rounded-lg">
          <Marquee autoFill pauseOnHover={true} gradient gradientColor="#1B1B21" className="items-center">
            {[
              { src: '/icons/openai.svg', alt: 'OpenAI' },
              { src: '/icons/brand-unknow.svg', alt: 'Marca desconhecida' },
              { src: '/icons/grok.png', alt: 'grok' },
              { src: '/icons/google.svg', alt: 'Google' },
              { src: '/icons/meta.svg', alt: 'Meta' },
              { src: '/icons/analytics.svg', alt: 'Google Analytics' },
              { src: '/icons/gemini.svg', alt: 'Gemini' },
              { src: '/icons/claude-ai.png', alt: 'claude-ai' },
            ].map((icon, index) => (
              <img
                key={index}
                className="size-16 object-contain mx-4"
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};