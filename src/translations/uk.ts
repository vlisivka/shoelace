import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'uk',
  $name: 'Українська',
  $dir: 'ltr',

  carousel: 'Карусель',
  clearEntry: 'Очистити поле',
  close: 'Закрити',
  copied: 'Скопійовано',
  copy: 'Скопіювати',
  currentValue: 'Поточне значення',
  error: 'Збій',
  goToSlide: (slide, count) => `Перейти до слайда №${slide} з ${count}`,
  hidePassword: 'Приховати пароль',
  loading: 'Завантаження',
  nextSlide: 'Наступний слайд',
  numOptionsSelected: num => {
    if (num === 0) return 'вибрано 0 вариантів';
    if (num === 1) return 'вибрано 1 варіант';
    return `вибрано ${num} варіанти`;
  },
  previousSlide: 'Попередній слайд',
  progress: 'Поступ',
  remove: 'Видалити',
  resize: 'Змінити розмір',
  scrollToEnd: 'Прокрутити в кінець',
  scrollToStart: 'Прокрутити на початок',
  selectAColorFromTheScreen: 'Виберіть колір на екрані',
  showPassword: 'Показати пароль',
  slideNum: slide => `Слайд ${slide}`,
  toggleColorFormat: 'Переключити кольорову модель'
};

registerTranslation(translation);

export default translation;
