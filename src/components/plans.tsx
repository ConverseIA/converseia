import { LINK_CTA_WHATSAPP, PLANS_AVALIABLE } from '@/lib/constants';
import { Button } from './ui/button';

export const Plans = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-white text-center font-bold text-4xl">
        Escolha o <span className="text-secondary">plano sob medida</span> para você:
      </h1>

      <div className="flex flex-col gap-8 items-center">
        <div className="grid base:grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
          {PLANS_AVALIABLE.map((plans) => (
            <div
              className="bg-gradient-to-b from-[#004bb5] to-[#003a8c] p-8 flex flex-col gap-6 rounded-xl shadow-xl transform transition-transform hover:scale-105"
              key={plans.title}
            >
              <h3 className="text-center font-extrabold text-xl text-white">{plans.title}</h3>
              <h4 className="text-center text-lg font-semibold text-gray-200">
                R$ {plans.price}/mês
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-100 custom-font leading-relaxed">
                {plans.list?.map((charge, index) => (
                  <li key={`${plans.title}-${index}`} className="flex items-start gap-2">
                    <img src="/icons/verify-white.svg" alt="verify-icon" />
                    {charge}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-full mt-auto shadow-md transform transition-transform hover:scale-105" asChild>
          <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
            Teste grátis 7 dias
          </a>
        </Button>
      </div>
    </div>
  );
};