<script>
	import { Card, CardItem, TopNav, Extra, Instruction } from '$lib/components/index';

	export let data;

	const inhaler = data.inhaler;
</script>

<TopNav />

<div
	class="mx-auto my-4 flex w-full max-w-5xl justify-between space-x-8 rounded bg-neutral-100 px-4"
>
	<div class="w-1/2">
		<img src={inhaler.image} alt="" class="  aspect-square mx-auto h-96 rounded object-contain" />
	</div>
	<div class="w-1/2 rounded bg-neutral-200 p-10">
		<h1>{inhaler['brand name']}</h1>
		<span class="text-lg">Generic: {inhaler.generic}</span> <br />
		<span class="text-lg">Type of Inhaler: {inhaler.composition}</span> <br />
		<span class="text-lg">Instruction: {inhaler.frequency}</span> <br />
		<a class="text-lg" href={inhaler.url}>{inhaler.url}</a>
	</div>
</div>

<div
	class="prose mx-auto h-full max-w-5xl rounded border-t border-neutral-200 bg-neutral-100 p-10 md:prose-lg"
>
	<Extra {inhaler} />
	<Instruction InhalerType={inhaler.type} />
</div>
