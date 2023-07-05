<script>
	export let type = 'default';
</script>

<!-- <button
	on:click
	class="{type == 'default'
		? 'bg-neutral-50 hover:text-neutral-200 active:bg-cyan-800 active:text-neutral-200  md:hover:bg-cyan-700 '
		: 'bg-yellow-400 hover:bg-yellow-500 hover:text-neutral-900 active:bg-yellow-600'} rounded border-2 border-black px-2 py-2 dark:bg-neutral-800"
	><slot /></button
> -->

<button
	on:click
	class="{type == 'default'
		? 'bg-neutral-50 hover:text-neutral-200 active:bg-cyan-800 active:text-neutral-200  md:hover:bg-cyan-700 '
		: 'bg-yellow-400 hover:bg-yellow-500 hover:text-neutral-900 active:bg-yellow-600'} rounded px-2 py-2 shadow-[2px_2px_0px_0px_#090907,0px_0px_0px_1px_#090907] active:shadow-[inset_0px_1px_0px_0px_#090907,0px_0px_0px_1px_#090907] dark:bg-neutral-800"
	><slot /></button
>
