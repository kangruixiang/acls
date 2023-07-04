<script>
	import { Button, rhythms } from '$lib/components/index';
	let pulseIntervalID;
	export let pulseCheckTime = 2 * 60;

	function pulseCheckCountDown() {
		if (pulseIntervalID) {
			clearInterval(pulseIntervalID);
		}
		pulseCheckTime = 2 * 60;
		pulseIntervalID = setInterval(() => {
			pulseCheckTime--;
		}, 500);
	}
</script>

<div class="flex space-x-2">
	<Button
		title={'PEA'}
		on:click={() => {
			$rhythms = [
				...$rhythms,
				{
					name: 'PEA',
					time: Date.now()
				}
			];
			pulseCheckCountDown();
		}}
	/>
	<Button
		title={'VT/VF'}
		on:click={() => {
			$rhythms = [
				...$rhythms,
				{
					name: 'VT/VF',
					time: Date.now()
				}
			];
			pulseCheckCountDown();
		}}
	/>
	<Button
		title={'ROSC'}
		on:click={() => {
			$rhythms = [
				...$rhythms,
				{
					name: 'ROSC',
					time: Date.now()
				}
			];
			pulseCheckCountDown();
		}}
	/>
</div>
