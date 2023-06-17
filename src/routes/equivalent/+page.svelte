<script>
	import { TopNav } from '$lib/components/index';
	const dosings = [
		{
			name: 'Low',
			inhalers: 'Arunuity, Advair, Wixela, Trelegy, Breo, Airduo'
		},
		{
			name: 'Medium',
			inhalers: 'Arunuity, Advair, Wixela, Trelegy, Breo, Airduo'
		},
		{
			name: 'High',
			inhalers: 'Arunuity, Advair, Wixela, Trelegy, Breo, Airduo'
		}
	];

	// {
	// 	name: 'Medium',
	// 	generic: '80/4.5',
	// 	brand: '160/4.5'
	// },
	// {
	// 	name: 'High',
	// 	generic: '80/4.5',
	// 	brand: '160/4.5'
	// }
</script>

<TopNav />

<div class="mx-auto max-w-4xl p-8 dark:prose-invert md:p-20">
	<table class="table-auto">
		<thead class=" dark:bg-neutral-900">
			<tr class="">
				<td class="">Dosing Level</td>
				<td>Inhaled Corticosteroid</td>
			</tr>
		</thead>
		<tbody>
			{#each dosings as dosing}
				<tr class="dark:even:bg-neutral-800">
					<td>{dosing.name}</td>
					<td>{dosing.inhalers}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
