import { writable } from 'svelte/store'

export { default as Button } from './Button.svelte'
export { default as MedRow } from './MedRow.svelte'
export { default as HT } from './HT.svelte'
export { default as Summary } from './Summary.svelte'
export { default as Initial } from './Initial.svelte'
export { default as HTCard } from './HTCard.svelte'
export { default as Countdown } from './Countdown.svelte'

export const amio = writable([])
export const lido = writable([])
export const epi = writable([])
export const fluid = writable([])
export const airway = writable([])
export const bicarb = writable([])
export const dextrose = writable([])
export const mag = writable([])
export const ca = writable([])
export const tpa = writable([])
export const needle = writable([])
export const pericard = writable([])
export const shock = writable([])
export const rhythms = writable([])


export function getIntervalTime(startTime: number) {
  const intervalTime = Math.floor((Date.now() - startTime) / 1000 / 60);
  return intervalTime;
}
