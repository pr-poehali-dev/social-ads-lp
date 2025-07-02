import React from "react";

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
              Отзывы учеников
            </span>
            <br />
            которые уже зарабатывают!
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Реальные результаты реальных людей. Скриншоты доходов и истории
            успеха
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Review Card Template */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm"
            >
              {/* Screenshot Placeholder */}
              <div className="aspect-square bg-gray-800 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-gray-600">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-sm">Скриншот дохода #{index}</p>
                  <p className="text-xs mt-1">Вставить изображение</p>
                </div>
              </div>

              {/* Review Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  "Благодаря курсу Андрея за первый месяц заработал{" "}
                  <span className="text-green-400 font-bold">
                    {index % 2 === 0 ? "78,000₽" : "125,000₽"}
                  </span>
                  ! Методика работает на 100%"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(65 + index - 1)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">Ученик #{index}</p>
                    <p className="text-gray-400 text-xs">
                      {index % 3 === 0
                        ? "Москва"
                        : index % 2 === 0
                          ? "СПб"
                          : "Екатеринбург"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-green-400">5000+</span> довольных учеников
            </h3>
            <p className="text-gray-300 mb-6">
              Средний доход учеников в первый месяц — 85,000₽
            </p>

            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              🚀 ПРИСОЕДИНИТЬСЯ К УСПЕШНЫМ!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
