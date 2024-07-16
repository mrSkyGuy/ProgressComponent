# Доступно по ссылке: https://mrskyguy.github.io/ProgressComponent/

## Использование
Чтобы использовать компонент в своих проектах, достаточно импортировать стили из `progressComponent.css` в Ваш html-файл,
и сам компонент установить в DOM через скрипт:

```ts
const {progressComponent, setPercentage, setAnimate, setHide} =
  getProgressComponent("my-classname", {
    isAnimated: true,
  });

body.append(progressComponent);
```

### API
- `setPercentage` — установить значение прогресса (от 0 до 100)
- `setAnimate` — анимировать вращение (`true` / `false`)
- `setHide` — скрыть компонент (`true` / `false`)
