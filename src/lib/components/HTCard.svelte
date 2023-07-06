<script>
	import {
		Button,
		HT,
		bicarb,
		fluid,
		airway,
		dextrose,
		mag,
		tpa,
		needle,
		pericard,
		ca
	} from '$lib/components/index';

	const HandT = [
		{
			cause: 'Hypoxia',
			treatment: 'Advanced Airway',
			add: () => {
				$airway = Date.now();
			}
		},
		{
			cause: 'Hypovolemia',
			treatment: 'Fluid',
			add: () => {
				$fluid = [...$fluid, Date.now()];
			}
		},
		{
			cause: 'Hydrogen Ion (acidosis)',
			treatment: 'Bicarb',
			add: () => {
				$bicarb = [...$bicarb, Date.now()];
			}
		},
		{
			cause: 'Hypoglycemia',
			treatment: 'Dextrose',
			add: () => {
				$dextrose = [...$dextrose, Date.now()];
			}
		},
		{
			cause: 'Hypokalemia',
			treatment: 'Magnesium',
			add: () => {
				$mag = [...$mag, Date.now()];
			}
		},
		{
			cause: 'Hyperkalemia',
			treatment: 'Calcium',
			add: () => {
				$ca = [...$ca, Date.now()];
			}
		},
		{
			cause: 'Hypothermia',
			treatment: ''
		},
		{
			cause: 'Thrombosis (PE)',
			treatment: 'TPA',
			add: () => {
				$tpa = [...$tpa, Date.now()];
			}
		},
		{
			cause: 'Thrombosis (MI)',
			treatment: ''
		},
		{
			cause: 'Tension Pneumothorax',
			treatment: 'Needle Decompress',
			add: () => {
				$needle = [...$needle, Date.now()];
			}
		},
		{
			cause: 'Tamponade',
			treatment: 'Pericardiocentesis',
			add: () => {
				$pericard = [...$pericard, Date.now()];
			}
		},
		{
			cause: 'Toxins',
			treatment: ''
		}
	];
</script>

<div class="px-4">
	<h2>H's and T's</h2>
	<div class="flex flex-col">
		{#each HandT as item}
			<HT title={item.cause}>
				{#if item.treatment}
					<Button on:click={item.add}>{item.treatment}</Button>
				{/if}
			</HT>
		{/each}
	</div>
</div>
