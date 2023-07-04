<script lang="ts">
	import { Button } from '$lib/components/index';

	export let codeStartTime = 0;
	export let intervalTime = 0;

	function getCodeStartTime(interval: number) {
		codeStartTime = Date.now() - interval * 60 * 1000;
		startTimer();
		return codeStartTime;
	}

	function startTimer() {
		setInterval(() => {
			intervalTime = Date.now() - codeStartTime;
		}, 100);
	}
</script>

<div>
	<div class="mx-4 my-2">Code Started</div>

	<div class="mx-4 grid grid-cols-3 justify-evenly gap-2">
		<Button title={'Now'} on:click={() => getCodeStartTime(0)} />
		<Button title={'1 min ago'} on:click={() => getCodeStartTime(1)} />
		<Button title={'2 min ago'} on:click={() => getCodeStartTime(2)} />
		<Button title={'3 min ago'} on:click={() => getCodeStartTime(3)} />
		<Button title={'5 min ago'} on:click={() => getCodeStartTime(5)} />
		<Button title={'10 min ago'} on:click={() => getCodeStartTime(10)} />
		<Button title={'15 min ago'} on:click={() => getCodeStartTime(15)} />
	</div>
</div>
