<script>
	import { TopNav } from '$lib/components/index';
	const dosings = [
		{
			name: 'Low',
			inhalers: [
				{
					name: '',
					generic: '',
					frequency: ''
				},
				{
					name: 'Advair HFA 45/21',
					generic: 'fluticasone-salmeterol',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'AirDuo Respiclick 55/14',
					generic: 'fluticasone-salmeterol',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Advair Diskus 100/50',
					generic: 'fluticasone-salmeterol',
					frequency: '1 puff 2x daily'
				},
				{
					name: 'Wixela Inhub 100/50',
					generic: 'fluticasone-propionate',
					frequency: '1 puff 2x daily'
				},
				{
					name: 'Symbicort HFA 80/4.5',
					generic: 'budesonide-formoterol',
					frequency: '2 puffs 2x daily'
				}
			]
		},
		{
			name: 'Medium',
			inhalers: [
				{
					name: '',
					generic: '',
					frequency: ''
				},
				{
					name: 'Advair HFA 115/21',
					generic: 'fluticasone-salmeterol',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'AirDuo Respiclick 113/14',
					generic: 'fluticasone-salmeterol',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Advair Diskus 250/50',
					generic: 'fluticasone-salmeterol',
					frequency: '1 puff 2x daily'
				},
				{
					name: 'Wixela Inhub 250/50',
					generic: 'fluticasone-propionate',
					frequency: '1 puff 2x daily'
				},
				{
					name: 'Symbicort HFA 160/4.5',
					generic: 'budesonide-formoterol',
					frequency: '2 puffs 2x daily'
				},

				{
					name: 'Breo Ellipta 100/25',
					generic: 'fluticasone-vilanterol',
					frequency: '1 puff every evening'
				},
				{
					name: 'Trelegy 100/62.5/25',
					generic: 'fluticasone-umeclidinium-vilanterol',
					frequency: '1 puff daily'
				},
				{
					name: 'Breztri 160/9/4.8',
					generic: 'budesonide-glycopyrrolate-formoterol ',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Dulera HFA 100/5',
					generic: 'mometasone-formoterol',
					frequency: '2 puffs 2x daily'
				}
			]
		},
		{
			name: 'High',
			inhalers: [
				{
					name: '',
					generic: '',
					frequency: ''
				},
				{
					name: 'Advair HFA 230/21',
					generic: 'fluticasone-salmeterol',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'AirDuo Respiclick 232/14',
					generic: 'fluticasone-salmeterol',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Advair Diskus 500/50',
					generic: 'fluticasone-salmeterol',
					frequency: '1 puff 2x daily'
				},
				{
					name: 'Wixela Inhub 500/50',
					generic: 'fluticasone-propionate',
					frequency: '1 puff 2x daily'
				},
				{
					name: 'Breo Ellipta 200/25',
					generic: 'fluticasone-vilanterol',
					frequency: '1 puff every evening'
				},
				{
					name: 'Trelegy 200/62.5/25',
					generic: 'fluticasone-umeclidinium-vilanterol',
					frequency: '1 puff daily'
				},
				{
					name: 'Dulera HFA 200/5',
					generic: 'mometasone-formoterol',
					frequency: '2 puffs 2x daily'
				}
			]
		}
	];
</script>

<TopNav />

<div class="mx-auto max-w-4xl p-8 dark:prose-invert md:p-20">
	<table class="table-auto">
		<thead class=" dark:bg-neutral-900">
			<tr class="">
				<td class="border-y-2 border-black bg-main-400 p-2 px-3 dark:bg-main-800">Dosing Level</td>
				<td class="border-y-2 border-black bg-main-400 p-2 px-3 dark:bg-main-800">Generic</td>
				<td class="border-y-2 border-black bg-main-400 p-2 px-3 dark:bg-main-800">Brand Name</td>
				<td class="border-y-2 border-black bg-main-400 p-2 px-3 dark:bg-main-800">Frequency</td>
			</tr>
		</thead>
		<tbody>
			{#each dosings as dosing}
				<tr class="border-b-2 border-black">
					<td class="border-b-2 border-black px-3" rowspan={dosing.inhalers.length + 1}
						>{dosing.name}</td
					>
					<td class="empty:hidden" /></tr
				>
				{#each dosing.inhalers as inhaler}
					<tr
						class="last:border-b-2 last:border-black even:bg-neutral-200 dark:even:bg-neutral-500"
					>
						<td class="px-3 py-2 empty:hidden">{inhaler.generic}</td>
						<td class="px-3 py-2 empty:hidden">{inhaler.name}</td>
						<td class="px-3 py-2 empty:hidden">{inhaler.frequency}</td>
					</tr>
				{/each}
			{/each}
		</tbody>
	</table>
</div>

<div id="footer" class="mx-auto max-w-4xl">
	<hr />
	<div class="prose mx-auto max-w-none p-6">
		<p>
			Smith JD, Arteta M, Baptist AP, et al. Asthma [Internet]. Ann Arbor (MI): Michigan Medicine
			University of Michigan; 2021 Jul. Available from:
			https://www.ncbi.nlm.nih.gov/books/NBK579412/
		</p>
		<p>
			Pocket Guide for Asthma Management and Prevention. Global Initiative for Asthma - GINA.
			Accessed June 17, 2023.
			https://ginasthma.org/pocket-guide-for-asthma-management-and-prevention/
		</p>
	</div>
</div>
