import type { Dictionary } from './index';

export const ru: Dictionary = {
  meta: {
    title: 'Гидроизоляционные добавки в бетон D5',
    description:
      'Кристаллизующая добавка D5 и ремонтная смесь D5 Aqua Stop. Сделано в России, поставки в Индию. Позвоните или напишите в WhatsApp.',
  },
  nav: {
    home: 'Главная',
    skip: 'К содержимому',
    lang: 'Язык',
    menu: 'Меню',
    close: 'Закрыть меню',
    items: [
      { href: '#products', label: 'Продукты' },
      { href: '#how-it-works', label: 'Как работает' },
      { href: '#benefits', label: 'Преимущества' },
      { href: '#applications', label: 'Применение' },
      { href: '#faq', label: 'Вопросы' },
      { href: '#contacts', label: 'Контакты' },
    ],
  },
  hero: {
    title: 'Бетон, который остаётся сухим весь срок службы',
    lead: 'Добавка D5 и ремонтная смесь D5 Aqua Stop. Сделано в России, доставка по всей Индии.',
  },
  products: { eyebrow: 'Продукты', title: 'Что мы поставляем' },
  cta: { call: 'Позвонить', whatsapp: 'WhatsApp', telegram: 'Telegram' },
  footer: { madeIn: 'Сделано в России', rights: 'Все права защищены.' },
  notFound: { title: 'Страница не найдена', back: 'На главную' },
};
