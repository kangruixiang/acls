<script lang="ts">
	import {
		Button,
		MedRow,
		Pulse,
		HTCard,
		Summary,
		Initial,
		epi,
		amio,
		lido,
		shock
	} from '$lib/components/index';
	let epiTime = 3 * 60;
	let pulseCheckTime = 120;
	let codeStartTime: number;
	let intervalTime = 0;
	let epiIntervalID = null;

	function epiCountDown() {
		if (epiIntervalID) {
			clearInterval(epiIntervalID);
		}
		epiTime = 3 * 60;
		epiIntervalID = setInterval(() => {
			epiTime--;
		}, 1000);
	}
</script>

<div class="mt-6 flex flex-col gap-4">
	{#if !codeStartTime}
		<Initial bind:codeStartTime bind:intervalTime />
	{/if}

	{#if codeStartTime}
		<Summary {intervalTime} {codeStartTime} />

		<div class="my-2 border-t border-black" />
		<MedRow medTime={pulseCheckTime}>
			<svelte:fragment slot="title">Next Pulse Check</svelte:fragment><Pulse bind:pulseCheckTime />
		</MedRow>
		<MedRow medTime={epiTime}
			><svelte:fragment slot="title">Next Epinephrine</svelte:fragment>

			<Button
				title={'Epinephrine'}
				on:click={() => {
					$epi = [...$epi, Date.now()];
					epiCountDown();
				}}
			/>
		</MedRow>

		<div>
			<div class="px-4 pb-2">Shockable Rhythm</div>
			<div class="flex w-full justify-end gap-2 px-4">
				<Button
					title={'Amiodarone'}
					on:click={() => {
						$amio = [...$amio, Date.now()];
						epiCountDown();
					}}
				/>
				<Button
					title={'Lidocaine'}
					on:click={() => {
						$lido = [...$lido, Date.now()];
						epiCountDown();
					}}
				/>
				<Button
					title={'Shock'}
					type="shock"
					on:click={() => {
						$shock = [...$shock, Date.now()];
					}}
				/>
			</div>
		</div>

		<div class="my-2 border-t border-black" />

		<HTCard />
	{/if}
</div>
