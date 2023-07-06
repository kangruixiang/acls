<script>
	export let type = 'default';
	export let grow = false;
</script>

<button
	on:click
	class="{type == 'default'
		? 'bg-neutral-50 hover:text-neutral-200 active:bg-cyan-800 active:text-neutral-200  dark:bg-neutral-800 md:hover:bg-cyan-700'
		: 'bg-yellow-400 text-neutral-900 hover:bg-yellow-500 active:bg-yellow-600 dark:bg-yellow-500'}
		{grow === true ? 'w-full grow' : ''}
		 rounded px-2 py-2 shadow-[2px_2px_0px_0px_black,0px_0px_0px_1px_black] active:shadow-[inset_0px_1px_0px_0px_black,0px_0px_0px_1px_black]"
	><slot /></button
>
