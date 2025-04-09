import { createEffect, createEvent, createStore } from "effector";

export const $theme = createStore<string>("");

export const updateTheme = createEvent();

type UpdateThemeParams = {
  weatherCode: number;
  isDay: number;
};

export const updateThemeFx = createEffect<UpdateThemeParams, string>((params): string => {
  if (!params) return "dayTheme";

  const isRainy = [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(params.weatherCode);

  const newTheme = isRainy
    ? "rainTheme"
    : params.isDay
    ? "dayTheme"
    : "nightTheme";

  document.body.classList.remove("dayTheme", "nightTheme", "rainTheme");
  document.body.classList.add(newTheme);

  return newTheme;
});

$theme.on(updateThemeFx.doneData, (_, newTheme) => newTheme);
