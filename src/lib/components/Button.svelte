<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export let grow = false;
	export let color = 'default';

	const baseClass =
		'rounded px-2 py-2 shadow-[2px_2px_0px_0px_black,0px_0px_0px_1px_black] active:shadow-[inset_0px_1px_0px_0px_black,0px_0px_0px_1px_black]';
	const colorClasses = {
		default:
			'bg-neutral-50 hover:text-neutral-200 active:bg-cyan-800 active:text-neutral-200  dark:bg-neutral-800 md:hover:bg-cyan-700',
		yellow:
			'bg-yellow-400 text-neutral-900 hover:bg-yellow-500 active:bg-yellow-600 dark:bg-yellow-500',
		red: 'bg-[#a52222] hover:bg-[#8d1c1c] active:bg-[#811a1a] text-neutral-50 dark:hover:bg-[#3d1010] dark:active:bg-[#370d0d] dark:bg-[#481414]'
	};

	$: btnClass = twMerge(baseClass, colorClasses[color], grow && 'w-full grow');
</script>

<button on:click class={btnClass}><slot /></button>
