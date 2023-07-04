<script>
	import {
		epi,
		amio,
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
		getIntervalTime
	} from '$lib/components/index';
	export let intervalTime = 0;
	export let codeStartTime = Date.now();

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
</script>

<div class="px-2 py-2">
	<ul>
		<li>Total code time: {minutes} min {seconds} sec</li>
		<li>
			Airway obtained: {$airway ? 'yes' : 'no'}
		</li>
		{#each items as item}
			{#if item.value != 0}
				<li>{item.value}x {item.name}</li>
			{/if}
		{/each}

		<li>
			<strong>Rhythms so far:</strong>
			<ul>
				{#each $rhythms as rhythm}
					<li>{rhythm.name}: {getIntervalTime(codeStartTime)} min in.</li>
				{/each}
			</ul>
		</li>
	</ul>
</div>
