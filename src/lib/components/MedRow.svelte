<script>
	import { epi, amio, lido, rhythms, shock } from '$lib/components/index';
	export let time;
	export let pause = false;
	let localTime = time;

	let pulseIntervalID = null;
	let epiIntervalID = null;

	// pulseIntervalID = setInterval(() => {
	// 	localTime--;
	// }, 1000);

	function epiCountDown(med) {
		if (med === 'epi') {
			$epi = [...$epi, Date.now()];
		}
		if (med === 'amio') {
			$amio = [...$amio, Date.now()];
		}
		if (med === 'lido') {
			$lido = [...$lido, Date.now()];
		}
		if (med === 'shock') {
			$shock = [...$shock, Date.now()];
			return;
		}

		if (epiIntervalID) {
			clearInterval(epiIntervalID);
		}
		localTime = time;
		epiIntervalID = setInterval(() => {
			localTime--;
		}, 1000);

		pause = false;
	}

	function pulseCheckCountDown(pulse) {
		$rhythms = [
			...$rhythms,
			{
				name: pulse,
				time: Date.now()
			}
		];
		if (pulseIntervalID) {
			clearInterval(pulseIntervalID);
		}
		localTime = time;

		pulseIntervalID = setInterval(() => {
			localTime--;
		}, 1000);

		pause = false;
	}

	function pauseIntervals() {
		if (epiIntervalID) {
			clearInterval(epiIntervalID);
		}
		if (pulseIntervalID) {
			clearInterval(pulseIntervalID);
		}
	}

	function restartIntervals() {
		pulseIntervalID = setInterval(() => {
			localTime--;
		}, 1000);
		epiIntervalID = setInterval(() => {
			localTime--;
		}, 1000);
	}

	$: minutes = Math.floor(localTime / 60);
	$: seconds = Math.round((localTime / 60 - minutes) * 60);
	$: minutes > 0 ? (minutes = minutes) : (minutes = 0);
	$: pause ? pauseIntervals() : '';
	$: console.log(localTime);
</script>

<div>
	<div class="pb-2">
		<slot name="title" />
	</div>
	<div class="flex w-full justify-between space-x-4 px-4">
		{#if localTime || localTime === 0}
			<div
				class="{localTime > 0
					? 'bg-green-200'
					: 'bg-red-200'} whitespace-nowrap px-4 py-4 text-xl text-neutral-800"
			>
				{#if minutes}{minutes} m{/if}

				{seconds} s
			</div>
		{/if}

		<slot {epiCountDown} {pulseCheckCountDown} />
	</div>
</div>
