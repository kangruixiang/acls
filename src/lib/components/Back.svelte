<script>
	import { goto } from '$app/navigation';
</script>

<div
	class="fixed left-0 top-0 z-10 flex w-full items-end whitespace-nowrap bg-[#008A94] px-4 py-4 font-semibold text-white md:relative md:min-h-screen md:w-64 md:flex-col"
>
	<div on:click={() => goto('/')} on:keydown class="flex cursor-pointer items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-5 w-5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
			/>
		</svg>

		<span class="mx-4">Back</span>
	</div>
</div>
