import { LINK_CTA_WHATSAPP, PLANS_AVALIABLE } from '@/lib/constants';
import { Button } from './ui/button';
import { useEffect } from 'react';

export const Plans = () => {
  useEffect(() => {
    // Adiciona o script do chatbot quando o componente é montado
    const script = document.createElement("script");
    script.id = "ra_chatbot" + Math.floor(200 * Math.random());
    script.defer = true;
    script.src = "https://sitewidget.net/chatbot-sdk.js";

    script.onload = () => {
      let a = document.createElement("ra-chatbot-widget");
      a.id = "ra_wc_chatbot";
      a.setAttribute("slug", "qs0VjV3e8DoFLrakFnU8jdUHuSzVyp8q7W4SKBkN");
      document.body.appendChild(a);
    };

    document.body.appendChild(script);

    // Limpeza: remove o script quando o componente for desmontado
    return () => {
      document.body.removeChild(script);
      const chatbotWidget = document.getElementById("ra_wc_chatbot");
      if (chatbotWidget) {
        document.body.removeChild(chatbotWidget);
      }
    };
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-white text-center font-bold text-4xl">
        Escolha o <span className="text-secondary">plano sob medida</span> para você:
      </h1>

      <div className="flex flex-col gap-8 items-center">
        <div className="grid base:grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
          {PLANS_AVALIABLE.map((plans, index) => (
            <div
              className="bg-gradient-to-b from-[#004bb5] to-[#003a8c] p-8 flex flex-col gap-6 rounded-xl shadow-xl transform transition-transform hover:scale-[1.05]"
              key={plans.title}
            >
              <h3 className="text-center font-extrabold text-3xl text-white transition-colors duration-300 hover:text-yellow-400">
                {plans.title}
              </h3>
              <div className="flex justify-center items-baseline mt-2 transition-transform duration-300 hover:scale-[1.1]">
                <span className="text-white text-2xl font-bold">R${plans.price}</span>
                <span className="text-gray-500 text-lg font-medium">/mês</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-100 custom-font leading-relaxed">
                {plans.list?.map((charge, idx) => (
                  <li key={`${plans.title}-${idx}`} className="flex items-start gap-2">
                    <img src="/icons/verify-white.svg" alt="verify-icon" />
                    {charge}
                  </li>
                ))}
              </ul>

              {/* Exibe o botão "Teste grátis 7 dias" nos dois primeiros cards */}
              {index < 2 && (
                <Button
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-full mt-auto shadow-md transform transition-transform hover:scale-105"
                  asChild
                >
                  <a href={'https://forms.gle/83EQjA4E7xEL9kSPA'} target="_blank" rel="noreferrer">
                    Teste grátis 7 dias
                  </a>
                </Button>
              )}

              {/* Exibe o botão "Fale conosco" apenas no terceiro card */}
              {index === 2 && (
                <div className="mt-auto">
                  {/* O chatbot será carregado apenas no terceiro card */}
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-full mt-auto shadow-md transform transition-transform hover:scale-105"
                    asChild
                  >
                    <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
                      Fale conosco
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
