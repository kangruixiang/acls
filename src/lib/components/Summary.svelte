<script>
	import {
		epi,
		amio,
		lido,
		fluid,
		airway,
		mag,
		ca,
		tpa,
		needle,
		shock,
		bicarb,
		dextrose,
		pericard,
		rhythms,
		getIntervalTime,
		Button
	} from '$lib/components/index';
	export let intervalTime = 0;
	export let codeStartTime = Date.now();
	let summary;

	$: minutes = Math.floor(intervalTime / 1000 / 60);
	$: seconds = Math.floor((intervalTime / 1000 / 60 - minutes) * 60);

	$: items = [
		{
			name: 'epinephrine',
			value: $epi.length
		},
		{
			name: 'shock',
			value: $shock.length
		},
		{
			name: 'amiodarone',
			value: $amio.length
		},
		{
			name: 'lidocaine',
			value: $lido.length
		},
		{
			name: 'intravenous fluid',
			value: $fluid.length
		},
		{
			name: 'magnesium',
			value: $mag.length
		},
		{
			name: 'calcium',
			value: $ca.length
		},
		{
			name: 'TPA',
			value: $tpa.length
		},
		{
			name: 'needle decompression',
			value: $needle.length
		},
		{
			name: 'dextrose',
			value: $dextrose.length
		},
		{
			name: 'pericardiocentesis',
			value: $pericard.length
		},
		{
			name: 'bicarb',
			value: $bicarb.length
		}
	];

	async function copy() {
		await navigator.clipboard.writeText(
			summary.innerText.replace(/\n\n\n/g, '\n\n').replace(/\n/g, '\r\n')
		);
	}
</script>

<div bind:this={summary} class="px-2 py-2">
	<ul>
		<li><strong>Total code time: {minutes} min {seconds} sec</strong></li>
		<li>
			Airway obtained: {$airway ? `at ${getIntervalTime(codeStartTime)} min` : 'no'}
		</li>
		{#each items as item}
			{#if item.value != 0}
				<li>{item.value}x {item.name}</li>
			{/if}
		{/each}

		<li>
			<strong>Rhythms:</strong>
			<ul>
				{#each $rhythms as rhythm}
					<li>{rhythm.name}: at {getIntervalTime(codeStartTime)} min</li>
				{/each}
			</ul>
		</li>
	</ul>
</div>
<Button title={'copy'} on:click={copy} />
