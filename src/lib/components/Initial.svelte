<script lang="ts">
	import { Button } from '$lib/components/index';

	export let codeStartTime = 0;
	export let pause;

	function getCodeStartTime(interval: number) {
		codeStartTime = Date.now() - interval * 60 * 1000;
		pause = false;
	}
	// export let pause = false;

	// $: pause == true ? clearInterval(intervalTimeID) : '';
	// $: console.log(intervalTime);
	const codeTimes = [
		{
			name: 'Now',
			time: 0
		},
		{
			name: '1 min ago',
			time: 1
		},
		{
			name: '2 min ago',
			time: 2
		},
		{
			name: '3 min ago',
			time: 3
		},
		{
			name: '5 min ago',
			time: 5
		},
		{
			name: '10 min ago',
			time: 10
		},
		{
			name: '15 min ago',
			time: 15
		},
		{
			name: '20 min ago',
			time: 20
		},
		{
			name: '30 min ago',
			time: 30
		}
	];
</script>

<div>
	<div class="mx-4 mb-2 mt-20">Code Started</div>

	<div class="mx-4 grid grid-cols-3 justify-evenly gap-2">
		{#each codeTimes as codeTime}
			<Button on:click={() => getCodeStartTime(codeTime.time)}>{codeTime.name}</Button>
		{/each}
	</div>
</div>
