<script lang="ts">
	import { Button, MedRow, HTCard, Summary, Initial } from '$lib/components/index';
	let codeStartTime: number;
	let intervalTime = 0;
	let pause = true;
	let intervalTimeID = null;

	function startTimer() {
		intervalTimeID = setInterval(() => {
			intervalTime = Date.now() - codeStartTime;
		}, 1000);
	}

	function pauseCode() {
		if (intervalTimeID) {
			clearInterval(intervalTimeID);
		}
		intervalTime = Date.now() - codeStartTime;
		pause = !pause;
	}

	$: codeStartTime && !pause ? startTimer() : '';
</script>

<div class="mt-6 flex flex-col gap-4">
	{#if !codeStartTime}
		<Initial bind:codeStartTime bind:pause />
	{/if}

	{#if codeStartTime}
		<Summary {intervalTime} {codeStartTime} />

		<div class="w-full px-4">
			<Button grow={true} on:click={pauseCode}>
				{#if pause}
					Restart
				{:else}
					End
				{/if}
				Code</Button
			>
		</div>

		<div class="my-2 border-t border-black" />
		<MedRow time={120} bind:pause rowType="pulse" let:pulseCheckCountDown>
			<svelte:fragment slot="title">Next Pulse Check</svelte:fragment>
			<div class="flex justify-between gap-2">
				<Button grow={true} on:click={() => pulseCheckCountDown('PEA')}>PEA</Button>
				<Button grow={true} on:click={() => pulseCheckCountDown('Asystole')}>Asystole</Button>
				<Button grow={true} on:click={() => pulseCheckCountDown('VT/VF')}>VT/VF</Button>
				<Button grow={true} on:click={() => pulseCheckCountDown('ROSC')}>ROSC</Button>
			</div>
		</MedRow>
		<MedRow time={180} bind:pause let:epiCountDown 
			><svelte:fragment slot="title">Next Epinephrine</svelte:fragment>
			<Button on:click={() => epiCountDown('epi')}>Epinephrine</Button>
		</MedRow>

		<MedRow time={180} displayTime={false} bind:pause let:epiCountDown>
			<svelte:fragment slot="title">Shockable Rhythm</svelte:fragment>
			<div class="flex w-full justify-end gap-2">
				<Button grow={true} on:click={() => epiCountDown('amio')}>Amiodarone</Button>
				<Button grow={true} on:click={() => epiCountDown('lido')}>Lidocaine</Button>
				<Button grow={true} type="shock" on:click={() => epiCountDown('shock')}>Shock</Button>
			</div>
		</MedRow>

		<div class="my-2 border-t border-black" />

		<HTCard />
	{/if}
</div>
