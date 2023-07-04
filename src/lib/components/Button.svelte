<script>
	export let title;
	export let type = 'default';
</script>

<button
	on:click
	class="{type == 'default'
		? 'bg-neutral-50 hover:bg-cyan-700 hover:text-neutral-200 active:bg-cyan-800 active:text-neutral-200 '
		: 'bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600'} rounded border-2 border-black px-2 py-2 dark:bg-neutral-800"
	>{title}</button
>
