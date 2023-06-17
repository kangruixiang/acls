<script>
	import { Card, TopNav, Extra, Instruction } from '$lib/components/index';

	export let data;

	const inhaler = data.inhaler;
</script>

<TopNav />

<div
	class="mx-auto my-4 flex w-full max-w-5xl flex-col justify-between space-y-4 rounded bg-neutral-100 px-4 dark:bg-neutral-700 md:flex-row md:space-x-8 md:space-y-0"
>
	<Card {inhaler} />
</div>

<div
	class="prose mx-auto h-full max-w-5xl rounded border-t border-neutral-200 bg-neutral-100 p-4 dark:prose-invert md:prose-lg dark:border-neutral-600 dark:bg-neutral-600 md:p-10"
>
	<Extra {inhaler} />
	<Instruction InhalerType={inhaler.type} />
</div>
