import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Helper {
  id: number;
  name: string;
  age: number;
  photo: string;
  specialties: string[];
  rating: number;
  reviews: number;
  price: number;
  availability: string[];
  experience: string;
}

const mockHelpers: Helper[] = [
  {
    id: 1,
    name: "Мария Петрова",
    age: 16,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    specialties: ["Покупки", "Уборка", "Прогулки"],
    rating: 4.9,
    reviews: 23,
    price: 300,
    availability: ["Пн", "Ср", "Пт", "Сб"],
    experience: "1 год"
  },
  {
    id: 2,
    name: "Алексей Смирнов",
    age: 17,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    specialties: ["Техподдержка", "Покупки", "Ремонт"],
    rating: 4.8,
    reviews: 18,
    price: 400,
    availability: ["Вт", "Чт", "Сб", "Вс"],
    experience: "2 года"
  },
  {
    id: 3,
    name: "Анна Козлова",
    age: 15,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
    specialties: ["Общение", "Прогулки", "Чтение"],
    rating: 5.0,
    reviews: 31,
    price: 250,
    availability: ["Пн", "Вт", "Ср", "Чт", "Пт"],
    experience: "6 месяцев"
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    age: 16,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
    specialties: ["Покупки", "Уборка", "Готовка"],
    rating: 4.7,
    reviews: 15,
    price: 350,
    availability: ["Ср", "Пт", "Сб", "Вс"],
    experience: "1 год"
  },
  {
    id: 5,
    name: "София Новикова",
    age: 17,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
    specialties: ["Техподдержка", "Общение", "Документы"],
    rating: 4.9,
    reviews: 27,
    price: 380,
    availability: ["Пн", "Ср", "Пт", "Сб", "Вс"],
    experience: "1.5 года"
  },
  {
    id: 6,
    name: "Иван Морозов",
    age: 16,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan",
    specialties: ["Ремонт", "Покупки", "Прогулки"],
    rating: 4.6,
    reviews: 12,
    price: 320,
    availability: ["Вт", "Чт", "Сб"],
    experience: "8 месяцев"
  }
];

const services = [
  { name: "Покупки", icon: "ShoppingBag", description: "Продуктовый магазин, аптека" },
  { name: "Уборка", icon: "Sparkles", description: "Помощь по дому" },
  { name: "Прогулки", icon: "Trees", description: "Сопровождение на улице" },
  { name: "Техподдержка", icon: "Smartphone", description: "Помощь с гаджетами" },
  { name: "Общение", icon: "MessageCircle", description: "Приятная беседа" },
  { name: "Готовка", icon: "CookingPot", description: "Приготовление еды" },
  { name: "Документы", icon: "FileText", description: "Помощь с бумагами" },
  { name: "Ремонт", icon: "Wrench", description: "Мелкий бытовой ремонт" }
];

const reviews = [
  {
    name: "Валентина Ивановна",
    age: 72,
    text: "Мария помогает мне уже полгода. Очень добрая и ответственная девочка!",
    rating: 5
  },
  {
    name: "Геннадий Петрович",
    age: 68,
    text: "Алексей помог настроить телефон и компьютер. Объяснил все понятно и терпеливо.",
    rating: 5
  },
  {
    name: "Лидия Сергеевна",
    age: 75,
    text: "Анна читает мне книги и гуляет со мной в парке. Как родная внучка!",
    rating: 5
  }
];

export default function Index() {
  const [selectedService, setSelectedService] = useState<string>("all");
  const [selectedDay, setSelectedDay] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("rating");

  const filteredHelpers = mockHelpers.filter(helper => {
    if (selectedService !== "all" && !helper.specialties.includes(selectedService)) {
      return false;
    }
    if (selectedDay !== "all" && !helper.availability.includes(selectedDay)) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-peach-50 to-white">
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-peach-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-peach-400 to-purple-300 rounded-full flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Руки помощи</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#helpers" className="text-gray-600 hover:text-peach-600 transition-colors">Помощники</a>
              <a href="#services" className="text-gray-600 hover:text-peach-600 transition-colors">Услуги</a>
              <a href="#how" className="text-gray-600 hover:text-peach-600 transition-colors">Как работает</a>
              <a href="#reviews" className="text-gray-600 hover:text-peach-600 transition-colors">Отзывы</a>
            </nav>
            <Button className="bg-peach-500 hover:bg-peach-600 text-white">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-purple-100 rounded-full">
            <span className="text-purple-700 font-medium">Забота и внимание для ваших близких</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Надёжная помощь
            <br />
            <span className="text-peach-600">от заботливых подростков</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Соединяем пожилых людей с ответственными подростками, готовыми помочь 
            в повседневных делах за доступную плату
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-peach-500 hover:bg-peach-600 text-white text-lg px-8">
              <Icon name="Search" size={20} className="mr-2" />
              Найти помощника
            </Button>
            <Button size="lg" variant="outline" className="border-peach-300 text-peach-700 hover:bg-peach-50 text-lg px-8">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Стать помощником
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-green-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">150+</h3>
              <p className="text-gray-600">Активных помощников</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" className="text-purple-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">4.8</h3>
              <p className="text-gray-600">Средний рейтинг</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-peach-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="text-peach-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">2000+</h3>
              <p className="text-gray-600">Выполненных заказов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Широкий спектр помощи в повседневных делах
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.name} className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-peach-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-peach-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-peach-600" size={32} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Как это работает</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Простой процесс в 4 шага</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-peach-300 via-purple-300 to-green-300 -z-10"></div>
            
            <div className="text-center relative">
              <div className="w-32 h-32 bg-gradient-to-br from-peach-400 to-peach-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-4xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Выберите помощника</h3>
              <p className="text-gray-600">Найдите подходящего по услугам и расписанию</p>
            </div>
            
            <div className="text-center relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-4xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Свяжитесь</h3>
              <p className="text-gray-600">Обсудите детали и договоритесь о времени</p>
            </div>
            
            <div className="text-center relative">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-4xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Получите помощь</h3>
              <p className="text-gray-600">Помощник приходит в назначенное время</p>
            </div>
            
            <div className="text-center relative">
              <div className="w-32 h-32 bg-gradient-to-br from-peach-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-4xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Оцените работу</h3>
              <p className="text-gray-600">Оставьте отзыв и помогите другим</p>
            </div>
          </div>
        </div>
      </section>

      <section id="helpers" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Наши помощники</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Проверенные и ответственные подростки готовы помочь
          </p>

          <div className="bg-purple-50 rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Услуга</label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все услуги</SelectItem>
                    {services.map(s => (
                      <SelectItem key={s.name} value={s.name}>{s.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">День недели</label>
                <Select value={selectedDay} onValueChange={setSelectedDay}>
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Любой день</SelectItem>
                    <SelectItem value="Пн">Понедельник</SelectItem>
                    <SelectItem value="Вт">Вторник</SelectItem>
                    <SelectItem value="Ср">Среда</SelectItem>
                    <SelectItem value="Чт">Четверг</SelectItem>
                    <SelectItem value="Пт">Пятница</SelectItem>
                    <SelectItem value="Сб">Суббота</SelectItem>
                    <SelectItem value="Вс">Воскресенье</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Сортировка</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="price-low">Сначала дешевле</SelectItem>
                    <SelectItem value="price-high">Сначала дороже</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHelpers.map((helper) => (
              <Card key={helper.id} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-peach-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={helper.photo} 
                      alt={helper.name}
                      className="w-20 h-20 rounded-full border-4 border-peach-200"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{helper.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{helper.age} лет • {helper.experience}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                          <span className="font-bold text-gray-800">{helper.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({helper.reviews} отзывов)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Услуги:</p>
                    <div className="flex flex-wrap gap-2">
                      {helper.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="bg-purple-100 text-purple-700">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Доступен:</p>
                    <div className="flex flex-wrap gap-2">
                      {helper.availability.map((day) => (
                        <Badge key={day} variant="outline" className="border-green-300 text-green-700">
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">От</p>
                      <p className="text-2xl font-bold text-peach-600">{helper.price}₽<span className="text-sm text-gray-500">/час</span></p>
                    </div>
                    <Button className="bg-peach-500 hover:bg-peach-600 text-white">
                      Выбрать
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Отзывы наших клиентов</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Что говорят те, кому мы помогли
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-2 border-green-200 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.age} лет</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-peach-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы получить помощь?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Найдите своего помощника уже сегодня и сделайте жизнь проще
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-peach-600 hover:bg-gray-100 text-lg px-8">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              8 (800) 555-35-35
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-peach-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">Руки помощи</h3>
              </div>
              <p className="text-gray-400">
                Платформа для объединения поколений через заботу и взаимопомощь
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#helpers" className="hover:text-peach-400 transition-colors">Помощники</a></li>
                <li><a href="#services" className="hover:text-peach-400 transition-colors">Услуги</a></li>
                <li><a href="#how" className="hover:text-peach-400 transition-colors">Как работает</a></li>
                <li><a href="#reviews" className="hover:text-peach-400 transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Для помощников</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-peach-400 transition-colors">Стать помощником</a></li>
                <li><a href="#" className="hover:text-peach-400 transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-peach-400 transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-peach-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>8 (800) 555-35-35</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@rukipomoshi.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, Россия</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Руки помощи. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}