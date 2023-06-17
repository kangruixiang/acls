<script>
	import { Card, CardItem, TopNav, Extra, Instruction } from '$lib/components/index';

	export let data;

	const inhaler = data.inhaler;
</script>

<TopNav />

<div
	class="mx-auto my-4 flex w-full max-w-5xl flex-col justify-between space-y-4 rounded bg-neutral-100 px-4 dark:bg-neutral-700 md:flex-row md:space-x-8 md:space-y-0"
>
	<div class="w-full md:w-1/2">
		<img src={inhaler.image} alt="" class="  aspect-square mx-auto h-96 rounded object-contain" />
	</div>
	<div class="mx-auto w-full rounded bg-neutral-200 p-10 dark:bg-neutral-800 md:w-1/2">
		<h1>{inhaler['brand name']}</h1>
		<span class="text-lg">Generic: {inhaler.generic}</span> <br />
		<span class="text-lg">Type of Inhaler: {inhaler.composition}</span> <br />
		<span class="text-lg">Instruction: {inhaler.frequency}</span> <br />
		<a class="break-words text-lg" href={inhaler.url}>{inhaler.url}</a>
	</div>
</div>

<div
	class="prose mx-auto h-full max-w-5xl rounded border-t border-neutral-200 bg-neutral-100 p-4 dark:prose-invert md:prose-lg dark:border-neutral-600 dark:bg-neutral-600 md:p-10"
>
	<Extra {inhaler} />
	<Instruction InhalerType={inhaler.type} />
</div>
