'use client';

import { useState } from 'react'; // 1. Importando o useState
import { LINK_CTA_WHATSAPP, PLANS_AVALIABLE } from '@/lib/constants';
import { Button } from './ui/button';

export const Plans = () => {
  // 2. Criando o estado para controlar o período selecionado.
  // Começa com o índice 0, que corresponde a "1 mês".
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(0);

  return (
    <div className="space-y-8">
      <h1 className="text-white text-center font-bold text-4xl">
        Escolha o <span className="text-secondary">plano sob medida</span> para você:
      </h1>

      {/* 3. Botões para seleção de período */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {PLANS_AVALIABLE[0].periods && PLANS_AVALIABLE[0].periods.map((period, index) => (
          <button
            key={period.label}
            onClick={() => setSelectedPeriodIndex(index)}
            className={`py-2 px-4 rounded-full text-white font-semibold transition-colors duration-300 ${
              selectedPeriodIndex === index 
                ? 'bg-blue-600' // Estilo do botão ativo
                : 'bg-gray-700 hover:bg-gray-600' // Estilo do botão inativo
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-8 items-center">
        <div className="grid base:grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
          {PLANS_AVALIABLE.map((plan, index) => {
            // 4. Lógica para calcular o preço dinamicamente
            const currentPeriod = plan.periods ? plan.periods[selectedPeriodIndex] : null;
            const calculatedPrice = currentPeriod
              ? (plan.monthlyPrice * currentPeriod.months * (1 - currentPeriod.discount)).toFixed(2)
              : null;

            return (
              <div
                key={plan.title}
                className="bg-gradient-to-b from-[#004bb5] to-[#003a8c] p-8 flex flex-col gap-6 rounded-xl shadow-xl transform transition-transform hover:scale-[1.05]"
              >
                <h3 className="text-center font-extrabold text-3xl text-white transition-colors duration-300 hover:text-yellow-400">
                  {plan.title}
                </h3>
                
                {/* 5. Exibição condicional do preço */}
                {/* Mostra o preço calculado para os planos "Essencial" e "Avançado" */}
                {plan.title !== 'Escritório Personalizado' && calculatedPrice && (
                  <div className="flex justify-center items-baseline mt-2 transition-transform duration-300 hover:scale-[1.1]">
                    <span className="text-white text-2xl font-bold">R${calculatedPrice}</span>
                    <span className="text-gray-400 text-lg font-medium">/total</span>
                  </div>
                )}

                {/* Mostra o texto "A definir" para o plano "Personalizado" */}
                {plan.title === 'Escritório Personalizado' && (
                  <div className="flex justify-center items-baseline mt-2 transition-transform duration-300 hover:scale-[1.1]">
                    <span className="text-white text-2xl font-bold">{plan.price}</span>
                  </div>
                )}

                <ul className="list-disc list-inside space-y-2 text-gray-100 custom-font leading-relaxed">
                  {plan.list?.map((charge, idx) => (
                    <li key={`${plan.title}-${idx}`} className="flex items-start gap-2">
                      <img src="/icons/verify-white.svg" alt="verify-icon" />
                      {charge}
                    </li>
                  ))}
                </ul>

                {/* A lógica dos botões de ação continua a mesma */}
                {index < 2 && (
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-full mt-auto shadow-md transform transition-transform hover:scale-105"
                    asChild
                  >
                    <a href="https://forms.gle/83EQjA4E7xEL9kSPA" target="_blank" rel="noreferrer">
                      Teste grátis 7 dias
                    </a>
                  </Button>
                )}

                {index === 2 && (
                  <div className="mt-auto">
                    <Button
                      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-full shadow-md transform transition-transform hover:scale-105"
                      asChild
                    >
                      <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
                        Fale conosco
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};