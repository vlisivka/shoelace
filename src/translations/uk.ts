import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'uk',
  $name: 'Українська',
  $dir: 'ltr',

  carousel: 'Карусель',
  clearEntry: 'Очистити запис',
  close: 'Закрити',
  copied: 'Скопійовано',
  copy: 'Скопіювати',
  currentValue: 'Поточне значення',
  error: 'Збій',
  goToSlide: (slide, count) => `Перейти до слайду №${slide} з ${count}`,
  hidePassword: 'Приховати пароль',
  loading: 'Завантаження',
  nextSlide: 'Наступний слайд',
  numOptionsSelected: num => {
    if (num === 0) return 'Не вибрано варіантів';
    if ((num % 10) === 0) return `Вибрано ${num} варіантів`;
    if (num === 1 ) return 'Вибрано 1 варіант';
    if ((num % 10) === 1) return `Вибрано ${num} варіант`;
    return `вибрано ${num} варіанти`;
  },
  previousSlide: 'Попередній слайд',
  progress: 'Поступ',
  remove: 'Видалити',
  resize: 'Змінити розмір',
  scrollToEnd: 'Прокрутити до кінця',
  scrollToStart: 'Прокрутити до початку',
  selectAColorFromTheScreen: 'Виберіть колір на екрані',
  showPassword: 'Показати пароль',
  slideNum: slide => `Слайд ${slide}`,
  toggleColorFormat: 'Перемкнути кольорову модель'
};

registerTranslation(translation);

export default translation;
