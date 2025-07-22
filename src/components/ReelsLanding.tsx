import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ReelsLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-6 bg-orange-500/20 text-orange-200 border-orange-400"
            >🔥 НОВЫЙ ТРЕНД ЗАРАБОТКА 2025-2026</Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Устал работать за копейки?
            </h1>

            <div className="text-2xl md:text-3xl mb-8 text-orange-100">
              <p className="mb-4">⚡ Пока ты сидишь в офисе за 30-50к...</p>
              <p className="mb-4">
                💰 Другие зарабатывают{" "}
                <span className="text-orange-300 font-bold">
                  от 300к в месяц
                </span>{" "}
                на Reels
              </p>
              <p className="text-white font-semibold">
                📱 Всего 2-4 часа в день!
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-purple-600 p-8 rounded-3xl mb-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">
                🎯 ПОЛУЧИ РЕЗУЛЬТАТ УЖЕ ЧЕРЕЗ 7 ДНЕЙ
              </h2>
              <p className="text-xl mb-6">
                Авторская методика, которая работает даже у новичков
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-orange-100 text-xl px-12 py-6 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all"
              >
                🚀 НАЧАТЬ ЗАРАБАТЫВАТЬ СЕГОДНЯ
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-4xl mb-2">⏱️</div>
                <div className="text-xl font-bold">2 часа в день</div>
                <div className="text-orange-200">Минимум времени</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-4xl mb-2">💰</div>
                <div className="text-xl font-bold">От 50к в месяц</div>
                <div className="text-orange-200">Уже в первый месяц</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-4xl mb-2">📈</div>
                <div className="text-xl font-bold">До 500к</div>
                <div className="text-orange-200">Через 3-6 месяцев</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-red-400">
              🚨 ЗНАКОМЫЕ ПРОБЛЕМЫ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-red-900/30 border-red-500/50 p-8">
                <CardContent className="p-0">
                  <div className="text-6xl mb-4">😤</div>
                  <h3 className="text-2xl font-bold mb-4 text-red-300">
                    Работаешь как раб
                  </h3>
                  <p className="text-lg text-red-100">
                    8 часов в офисе, начальник на шее, а зарплата не покрывает
                    даже базовые потребности
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-red-900/30 border-red-500/50 p-8">
                <CardContent className="p-0">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-2xl font-bold mb-4 text-red-300">
                    Листаешь соцсети
                  </h3>
                  <p className="text-lg text-red-100">
                    Тратишь часы на Instagram и TikTok, но не знаешь, как на
                    этом заработать
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-red-900/30 border-red-500/50 p-8">
                <CardContent className="p-0">
                  <div className="text-6xl mb-4">💸</div>
                  <h3 className="text-2xl font-bold mb-4 text-red-300">
                    Денег всегда не хватает
                  </h3>
                  <p className="text-lg text-red-100">
                    К концу месяца живешь в долг, мечтаешь о путешествиях и
                    свободе
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-red-900/30 border-red-500/50 p-8">
                <CardContent className="p-0">
                  <div className="text-6xl mb-4">😴</div>
                  <h3 className="text-2xl font-bold mb-4 text-red-300">
                    Нет энергии на жизнь
                  </h3>
                  <p className="text-lg text-red-100">
                    После работы только диван и телевизор, на хобби и семью сил
                    не остается
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-orange-500 p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-4">
                ⏰ ХВАТИТ ЖИТЬ ЧУЖОЙ ЖИЗНЬЮ!
              </h3>
              <p className="text-xl mb-6">
                Время взять контроль в свои руки и начать зарабатывать на том,
                что ты уже делаешь каждый день
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-orange-100 text-xl px-12 py-6 rounded-full font-bold"
              >
                💪 ИЗМЕНИТЬ ЖИЗНЬ ПРЯМО СЕЙЧАС
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReelsLanding;