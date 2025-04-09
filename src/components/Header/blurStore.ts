import { createEvent, createStore } from "effector"

export const setBlur = createEvent<boolean>()
export const $blurActive = createStore(false).on(setBlur, (_, value) => value)
