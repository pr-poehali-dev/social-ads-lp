import React from "react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
              Выбери свой путь
            </span>
            <br />к финансовой свободе!
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            30 дней интенсивного обучения, которые изменят твою жизнь навсегда
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Базовый тариф */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-600/50 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">БАЗОВЫЙ</h3>
              <p className="text-gray-400 mb-6">Старт в мир Reels</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">29,900₽</span>
                <p className="text-gray-400 mt-2">За 30 дней обучения</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <span className="text-gray-300">
                  Полный курс по созданию вирусных Reels
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <span className="text-gray-300">
                  30 готовых шаблонов контента
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <span className="text-gray-300">
                  Секреты монетизации Instagram
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <span className="text-gray-300">Доступ к закрытому чату</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <span className="text-gray-300">Техническая поддержка</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <span className="text-gray-300">Гарантия результата</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-bold py-4 px-6 rounded-full text-lg transition-all duration-300">
              Выбрать Базовый
            </button>
          </div>

          {/* Премиум тариф */}
          <div className="bg-gradient-to-br from-orange-900/80 to-purple-900/80 rounded-3xl p-8 border-2 border-orange-400/50 backdrop-blur-sm relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                🔥 МАКСИМАЛЬНЫЙ РЕЗУЛЬТАТ
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">ПРЕМИУМ</h3>
              <p className="text-orange-300 mb-6">Путь чемпионов</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">69,900₽</span>
                <p className="text-orange-300 mt-2">
                  За 30 дней + личная работа
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-orange-400 text-xl">🔥</span>
                <span className="text-white font-semibold">
                  ВСЁ из Базового тарифа +
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 text-xl">⭐</span>
                <span className="text-gray-200">
                  Личная работа с Андреем Дильман
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 text-xl">🚀</span>
                <span className="text-gray-200">
                  Индивидуальная стратегия масштабирования
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 text-xl">📈</span>
                <span className="text-gray-200">
                  Анализ твоего контента лично от эксперта
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 text-xl">💎</span>
                <span className="text-gray-200">VIP-поддержка 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 text-xl">🎯</span>
                <span className="text-gray-200">
                  Приоритетные ответы на вопросы
                </span>
              </div>
            </div>

            {/* Премиум преимущество */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-4 mb-6 border border-orange-400/30">
              <p className="text-orange-200 text-sm leading-relaxed">
                <strong>Сокращай дистанцию до цели!</strong> Получи максимальный
                результат за счет масштабирования и личной работы с Андреем
                Дильман. Поддержка на каждом шаге!
              </p>
            </div>

            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              🚀 ВЫБРАТЬ ПРЕМИУМ
            </button>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-green-400">100% гарантия результата</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Если через 30 дней ты не заработаешь минимум 50,000₽ выполнев все
              шаги ㅤМы вернем всю сумму!
            </p>

            <div className="flex justify-center items-center gap-6 text-gray-400 text-sm">
              <span>⏰ Ограниченное предложение</span>
              <span>🔒 Безопасная оплата</span>
              <span>💯 Без скрытых платежей</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
