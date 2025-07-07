import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Waves" className="text-[#2D5016] w-8 h-8" />
              <h1 className="text-2xl font-bold text-[#2D5016]">ООО Август</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#услуги"
                className="text-[#6682B4] hover:text-[#2D5016] transition-colors"
              >
                Услуги
              </a>
              <a
                href="#портфолио"
                className="text-[#6682B4] hover:text-[#2D5016] transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#контакты"
                className="text-[#6682B4] hover:text-[#2D5016] transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-[#2D5016] hover:bg-[#1a2f0a] text-white">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#F5F5DC] to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-[#2D5016] mb-6">
              Профессиональное строительство прудов и ландшафтный дизайн
            </h2>
            <p className="text-xl text-[#6682B4] mb-8 max-w-2xl mx-auto">
              Создаем уникальные водные объекты и благоустраиваем территории с
              2013 года. Полный цикл работ от проектирования до сдачи под ключ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#2D5016] hover:bg-[#1a2f0a] text-white"
              >
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Бесплатная консультация
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2D5016] text-[#2D5016] hover:bg-[#2D5016] hover:text-white"
              >
                <Icon name="Eye" className="w-5 h-5 mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-[#6682B4] max-w-2xl mx-auto">
              Комплексные решения для создания и обслуживания водных объектов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-[#F5F5DC]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-cyan-500">
                  <Icon name="Waves" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-[#2D5016]">
                  Строительство прудов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#6682B4] text-center">
                  Декоративные пруды, рыбные водоемы, каскады и водопады под
                  ключ
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-[#F5F5DC]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-lime-500">
                  <Icon name="TreePine" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-[#2D5016]">
                  Ландшафтный дизайн
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#6682B4] text-center">
                  Проектирование и благоустройство территорий, создание садов и
                  парков
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-[#F5F5DC]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-300">
                  <Icon name="Hammer" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-[#2D5016]">
                  Строительные работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#6682B4] text-center">
                  Земляные работы, дренаж, укладка инженерных коммуникаций
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="портфолио" className="py-20 bg-[#F5F5DC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-[#6682B4] max-w-2xl mx-auto">
              Примеры реализованных проектов прудов и ландшафтного дизайна
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-white">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/img/9c86175b-1c9a-4c3b-ba4d-823b3ff5a7ab.jpg"
                  alt="Декоративный пруд с кувшинками"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#2D5016]">
                  Декоративный пруд
                </CardTitle>
                <CardDescription className="text-[#6682B4]">
                  Пруд с кувшинками и природным камнем. Создан для частного дома
                  в Подмосковье.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/img/e5f1f96a-ecfa-43b5-99a1-705498e9a959.jpg"
                  alt="Каскадный водопад"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#2D5016]">
                  Каскадный водопад
                </CardTitle>
                <CardDescription className="text-[#6682B4]">
                  Многоуровневый водопад с природными камнями и профессиональным
                  озеленением.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/img/d2f6c55a-5461-4227-b016-719b89db6eb1.jpg"
                  alt="Пруд с карпами кои"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#2D5016]">
                  Пруд с карпами кои
                </CardTitle>
                <CardDescription className="text-[#6682B4]">
                  Рыбный пруд в японском стиле с деревянным настилом и садом.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D5016] mb-4">Контакты</h2>
            <p className="text-xl text-[#6682B4] max-w-2xl mx-auto">
              Свяжитесь с нами для консультации и расчета стоимости
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="border-[#F5F5DC]">
              <CardHeader>
                <CardTitle className="text-[#2D5016]">
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="w-5 h-5 text-[#2D5016]" />
                  <span className="text-[#6682B4]">
                    +7 (921) 340-05-20 +7 (921) 659-12-67
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="w-5 h-5 text-[#2D5016]" />
                  <span className="text-[#6682B4]">4010061@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="w-5 h-5 text-[#2D5016]" />
                  <span className="text-[#6682B4]">г. Санкт-Петербург</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="w-5 h-5 text-[#2D5016]" />
                  <span className="text-[#6682B4]">Пн-Пт: 9:00-18:00</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#F5F5DC]">
              <CardHeader>
                <CardTitle className="text-[#2D5016]">
                  Заказать звонок
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6682B4] mb-4">
                  Оставьте заявку и мы перезвоним в течение 30 минут
                </p>
                <Button className="w-full bg-[#2D5016] hover:bg-[#1a2f0a] text-white">
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  Заказать звонок
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D5016] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Waves" className="w-8 h-8" />
                <h3 className="text-xl font-bold">ООО Август</h3>
              </div>
              <p className="text-[#F5F5DC] opacity-80">
                Профессиональное строительство прудов и ландшафтный дизайн
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-[#F5F5DC] opacity-80">
                <li>Строительство прудов</li>
                <li>Ландшафтный дизайн</li>
                <li>Строительные работы</li>
                <li>Обслуживание водоемов</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-[#F5F5DC] opacity-80">
                <li>+7 (921) 340-05-20 +7 (921) 659-12-67</li>
                <li>info@avgust-landscape.ru</li>
                <li>г. Санкт-Петербург</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#F5F5DC] opacity-20 mt-8 pt-8 text-center">
            <p className="text-[#F5F5DC] opacity-60">
              © 2024 ООО Август. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
