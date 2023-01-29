import { writable } from 'svelte/store';
import { defaultInhalers } from './inhalers';

export const inhalers = writable(defaultInhalers);
