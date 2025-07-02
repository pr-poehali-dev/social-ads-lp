import React from "react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
              Смотри как зарабатывать
            </span>
            <br />
            на Reels уже сегодня!
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Эксклюзивная видео-презентация от Андрея Дильман — узнай секреты,
            которые изменят твою жизнь навсегда
          </p>

          {/* Video Container */}
          <div className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-900">
              <iframe
                src="https://vkvideo.ru/video-56722941_456239020"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Продающее видео курса"
              ></iframe>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                🔥 ХОЧУ НАЧАТЬ ЗАРАБАТЫВАТЬ!
              </button>

              <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
                📱 Узнать подробнее
              </button>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>100% гарантия результата</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>Поддержка 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✅</span>
              <span>5000+ довольных учеников</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
