import React from "react";

const ProofSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Я — ПРАКТИК,
            </span>
            <br />
            <span className="text-white">а не теоретик!</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Зарабатываю на партнерских программах с{" "}
            <span className="text-green-400 font-bold">2012 года</span>. Вот
            лишь{" "}
            <span className="text-blue-400 font-bold">
              малая часть айсберга
            </span>{" "}
            моих результатов
          </p>
        </div>

        {/* Financial Screenshots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Screenshot 1 */}
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-2xl p-6 border border-green-400/30 backdrop-blur-sm">
            <div className="aspect-[4/3] bg-gray-800 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-green-400/50">
              <div className="text-center text-green-400">
                <div className="text-4xl mb-2">💰</div>
                <p className="text-sm font-semibold">Скриншот #1</p>
                <p className="text-xs mt-1">Доход за месяц</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-green-400 font-bold text-lg mb-2">
                Январь 2024
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-green-400 font-bold text-xl">
                  847,000₽
                </span>{" "}
                за месяц только с одной партнерской программы. Это результат
                правильной стратегии и системного подхода к созданию контента.
              </p>
            </div>
          </div>

          {/* Screenshot 2 */}
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl p-6 border border-blue-400/30 backdrop-blur-sm">
            <div className="aspect-[4/3] bg-gray-800 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-blue-400/50">
              <div className="text-center text-blue-400">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-sm font-semibold">Скриншот #2</p>
                <p className="text-xs mt-1">Статистика продаж</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-blue-400 font-bold text-lg mb-2">
                Февраль 2024
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-blue-400 font-bold text-xl">
                  1,200,000₽
                </span>
                рекордный месяц! Показывает, как масштабируется бизнес при
                правильном подходе. Каждый Reels работает на результат.
              </p>
            </div>
          </div>

          {/* Screenshot 3 */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
            <div className="aspect-[4/3] bg-gray-800 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-purple-400/50">
              <div className="text-center text-purple-400">
                <div className="text-4xl mb-2">🚀</div>
                <p className="text-sm font-semibold">Скриншот #3</p>
                <p className="text-xs mt-1">Рост аудитории</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-purple-400 font-bold text-lg mb-2">
                Март 2024
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-purple-400 font-bold text-xl">
                  +250,000
                </span>
                новых подписчиков за месяц. Вирусная механика работает! Больше
                аудитории = больше продаж.
              </p>
            </div>
          </div>

          {/* Screenshot 4 */}
          <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-2xl p-6 border border-orange-400/30 backdrop-blur-sm">
            <div className="aspect-[4/3] bg-gray-800 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-orange-400/50">
              <div className="text-center text-orange-400">
                <div className="text-4xl mb-2">💎</div>
                <p className="text-sm font-semibold">Скриншот #4</p>
                <p className="text-xs mt-1">Пассивный доход</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-orange-400 font-bold text-lg mb-2">
                Апрель 2024
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-orange-400 font-bold text-xl">
                  673,000₽
                </span>
                пассивного дохода с уже созданного контента. Это сила системы —
                один раз создал, получаешь постоянно.
              </p>
            </div>
          </div>

          {/* Screenshot 5 */}
          <div className="bg-gradient-to-br from-yellow-900/50 to-amber-900/50 rounded-2xl p-6 border border-yellow-400/30 backdrop-blur-sm md:col-span-2 lg:col-span-1">
            <div className="aspect-[4/3] bg-gray-800 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-yellow-400/50">
              <div className="text-center text-yellow-400">
                <div className="text-4xl mb-2">🏆</div>
                <p className="text-sm font-semibold">Скриншот #5</p>
                <p className="text-xs mt-1">Годовой результат</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-yellow-400 font-bold text-lg mb-2">
                Итог за 2024
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-yellow-400 font-bold text-xl">
                  12,4 млн₽
                </span>
                чистой прибыли за год! 10 лет опыта, сотни протестированных
                стратегий. Теперь это доступно и тебе.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-gradient-to-r from-slate-800/80 to-gray-800/80 rounded-3xl p-8 md:p-12 border border-gray-600/50 backdrop-blur-sm mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-green-400">13 лет</span> в партнерском
              маркетинге
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              То, что ты видишь выше — это только{" "}
              <span className="text-blue-400 font-bold">верхушка айсберга</span>
              . За эти годы я:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-white font-bold mb-2">Протестировал</h4>
              <p className="text-gray-300 text-sm">50+ различных стратегий продвижения</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="text-white font-bold mb-2">Заработал</h4>
              <p className="text-gray-300 text-sm">Более 25 млн рублей суммарно</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">👥</div>
              <h4 className="text-white font-bold mb-2">Обучил</h4>
              <p className="text-gray-300 text-sm">Более 5,000 партнёров</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-6 border border-green-400/20">
            <p className="text-center text-gray-200 text-lg leading-relaxed">
              <span className="text-green-400 font-bold">
                Каждый может повторить мой успех!
              </span>
              Я создал пошаговую систему, которая работает для всех — от
              новичков до экспертов. Все мои знания и секреты теперь доступны в
              курсе.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl p-8 border border-orange-400/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">
              Готов начать свой путь к{" "}
              <span className="text-orange-400">финансовой свободе</span>?
            </h3>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Присоединяйся к комьюнити успешных людей, которые уже зарабатывают
              по моей системе
            </p>

            <button className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/25">
              🚀 ПРИСОЕДИНИТЬСЯ К КОМЬЮНИТИ
            </button>

            <p className="text-gray-400 text-sm mt-4">
              Более 5000 участников уже изменили свою жизнь
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;