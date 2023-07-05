<script>
	import { Button, rhythms } from '$lib/components/index';

	// export let pulseCheckTime;
	// let pulseIntervalID = null;

	pulseIntervalID = setInterval(() => {
		pulseCheckTime--;
	}, 1000);

	// function pulseCheckCountDown() {
	// 	if (pulseIntervalID) {
	// 		clearInterval(pulseIntervalID);
	// 	}
	// 	pulseCheckTime = 120;

	// 	pulseIntervalID = setInterval(() => {
	// 		pulseCheckTime--;
	// 	}, 1000);
	// }
</script>

<div class="flex space-x-2">
	<Button
		on:click={() => {
			$rhythms = [
				...$rhythms,
				{
					name: 'PEA',
					time: Date.now()
				}
			];
			pulseCheckCountDown();
		}}>PEA</Button
	>
	<Button
		on:click={() => {
			$rhythms = [
				...$rhythms,
				{
					name: 'Asystole',
					time: Date.now()
				}
			];
			pulseCheckCountDown();
		}}>Asystole</Button
	>
	<Button
		on:click={() => {
			$rhythms = [
				...$rhythms,
				{
					name: 'VT/VF',
					time: Date.now()
				}
			];
			pulseCheckCountDown();
		}}>VT/VF</Button
	>
	<Button
		on:click={() => {
			$rhythms = [
				...$rhythms,
				{
					name: 'ROSC',
					time: Date.now()
				}
			];
			pulseCheckCountDown();
		}}>ROSC</Button
	>
</div>
