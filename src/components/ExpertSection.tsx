import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExpertSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Dream Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
              🌟 А ТЫ МЕЧТАЕШЬ О ТАКОЙ ЖИЗНИ?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border-green-400/50 p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-5xl mb-4">🏝️</div>
                  <h3 className="text-xl font-bold mb-2 text-green-300">
                    Работать из любой точки мира
                  </h3>
                  <p className="text-[#000000]">
                    Только телефон и интернет - вся твоя "офисная техника"
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-blue-400/50 p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-2 text-blue-300">
                    Зарабатывать в долларах
                  </h3>
                  <p className="text-[#000000]">
                    От $2000 в месяц, работая всего 2-4 часа в день
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border-purple-400/50 p-6">
                <CardContent className="p-0 text-center">
                  <div className="text-5xl mb-4">⏰</div>
                  <h3 className="text-xl font-bold mb-2 text-purple-300">
                    Быть хозяином времени
                  </h3>
                  <p className="text-[#000000]">
                    Никаких будильников, дедлайнов и злых начальников
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-purple-600 p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-4">
                ✨ ЭТО НЕ МЕЧТА - ЭТО РЕАЛЬНОСТЬ!
              </h3>
              <p className="text-xl mb-6">
                Которую уже живут тысячи людей по моей методике
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-orange-100 text-xl px-12 py-6 rounded-full font-bold"
              >
                🎯 ХОЧУ ТАКУЮ ЖИЗНЬ!
              </Button>
            </div>
          </div>

          {/* Expert Section */}
          <div className="bg-gradient-to-r from-purple-800/50 to-orange-600/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl mb-6">
                  <img
                    src="https://cdn.poehali.dev/files/250ba8a6-b3b4-4663-9670-9872eaf3d026.jpg"
                    alt="Александр Иванов - эксперт по Reels"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge className="bg-orange-500 text-white text-lg px-6 py-2 mb-4">
                  ⭐ ЭКСПЕРТ В МОНЕТИЗАЦИИ КОНТЕНТА
                </Badge>
                <h3 className="text-3xl font-bold mb-2">Андрей Дильман</h3>
                <p className="text-xl text-orange-200">
                  Основатель "Reels Империя 1.0"
                </p>
              </div>

              {/* Facts */}
              <div className="space-y-6">
                <h4 className="text-3xl font-bold mb-8 text-center md:text-left">
                  🔥 ФАКТЫ ОБО МНЕ:
                </h4>

                <div className="space-y-4">
                  <Card className="bg-white/10 backdrop-blur-sm border-orange-400/50 p-4">
                    <CardContent className="p-0 flex items-center gap-4">
                      <div className="text-3xl">📈</div>
                      <div>
                        <div className="text-xl font-bold text-orange-300">
                          13 лет в маркетинге
                        </div>
                        <div className="text-orange-100">
                          Знаю все тренды и алгоритмы соцсетей
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-orange-400/50 p-4">
                    <CardContent className="p-0 flex items-center gap-4">
                      <div className="text-3xl">🚀</div>
                      <div>
                        <div className="text-xl font-bold text-orange-300">
                          11+ успешных проектов
                        </div>
                        <div className="text-orange-100">
                          От нуля до миллионных оборотов
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-orange-400/50 p-4">
                    <CardContent className="p-0 flex items-center gap-4">
                      <div className="text-3xl">💰</div>
                      <div>
                        <div className="text-xl font-bold text-orange-300">
                          40000+ партнеров из 44 стран
                        </div>
                        <div className="text-orange-100">
                          Рекордные чеки от 145к в сутки пруфы на YouTube
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-orange-400/50 p-4">
                    <CardContent className="p-0 flex items-center gap-4">
                      <div className="text-3xl">🏆</div>
                      <div>
                        <div className="text-xl font-bold text-orange-300">
                          Топ-Лидер и Амбассадор на рынке СНГ
                        </div>
                        <div className="text-orange-100">
                          По монетизации контента в социальных сетях
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-600/30 to-emerald-500/30 rounded-2xl border border-green-400/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-300 mb-2">
                      🎯 МОЯ ГАРАНТИЯ:
                    </div>
                    <p className="text-lg text-green-100">
                      Если не заработаешь минимум 50 000 ₽ за первый месяц -
                      <span className="font-bold text-green-300">
                        {" "}
                        верну деньги!
                      </span>
                    </p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white text-xl py-6 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all"
                >
                  📹 СМОТРЕТЬ ВИДЕО С ПОШАГОВОЙ СТРАТЕГИЕЙ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
