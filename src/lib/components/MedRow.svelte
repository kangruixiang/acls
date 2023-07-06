<script>
	import { epi, amio, lido, rhythms, shock } from '$lib/components/index';
	export let time = 120;
	export let pause = false;
	export let rowType = 'med';
	export let displayTime = true;

	let localTime = time;
	let pulseIntervalID = null;
	let epiIntervalID = null;

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
		pause = false;
		localTime = time;
		if (rowType == 'pulse') {
			if (pulseIntervalID) {
				clearInterval(pulseIntervalID);
			}
			pulseIntervalID = setInterval(() => {
				localTime--;
			}, 1000);
			return;
		}
		if (epiIntervalID) {
			clearInterval(epiIntervalID);
		}
		epiIntervalID = setInterval(() => {
			localTime--;
		}, 1000);
	}

	$: minutes = Math.floor(localTime / 60);
	$: seconds = Math.round((localTime / 60 - minutes) * 60);
	$: minutes > 0 ? (minutes = minutes) : (minutes = 0);
	$: pause ? pauseIntervals() : '';
</script>

<div class="flex w-full flex-col justify-center gap-2 px-4 py-1">
	<div id="countdown_and_timer" class="flex gap-2">
		<div class="grow">
			<slot name="title" />
		</div>
		{#if displayTime}
			<div id="countdown_and_refresh" class="mb-2 flex items-center">
				<div
					class="{localTime > 0
						? 'bg-green-200'
						: 'bg-red-200'} flex items-center whitespace-nowrap px-8 py-4 text-xl text-neutral-800"
				>
					{#if minutes}{minutes} m{/if}

					{seconds} s
				</div>
				<div
					class="flex h-full cursor-pointer items-center bg-neutral-50 px-4 dark:bg-neutral-800"
					on:keydown
					on:click={restartIntervals}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
						/>
					</svg>
				</div>
			</div>
		{/if}
	</div>
	<slot {epiCountDown} {pulseCheckCountDown} />
</div>
