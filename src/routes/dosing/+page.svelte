<script>
	import { TopNav, Footer } from '$lib/components/index';
	const dosings = [
		{
			name: 'Low',
			inhalers: [
				{
					name: '',
					type: '',
					generic: '',
					frequency: ''
				},
				{
					name: 'Arnuity Ellipta 100',
					generic: 'fluticasone-furoate',
					type: 'DPI',
					frequency: '1 puff daily'
				},
				{
					name: 'Advair HFA 45/21',
					generic: 'fluticasone-salmeterol',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'AirDuo Respiclick 55/14',
					generic: 'fluticasone-salmeterol',
					type: 'DPI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Advair Diskus 100/50',
					generic: 'fluticasone-salmeterol',
					type: 'DPI',
					frequency: '1 puff 2x daily'
				},
				{
					name: 'Wixela Inhub 100/50',
					generic: 'fluticasone-propionate',
					type: 'DPI',
					frequency: '1 puff 2x daily'
				},

				{
					name: 'Flovent HFA 44',
					generic: 'fluticasone-proprionate',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Flovent Diskus 50',
					generic: 'fluticasone-proprionate',
					type: 'DPI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Symbicort HFA 80/4.5',
					generic: 'budesonide-formoterol',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Pulmicort Flexhaler 60 or 120',
					generic: 'budesonide',
					type: 'DPI',
					frequency: '1 puff 2x daily'
				},
				{
					name: 'Asmanex HFA 50',
					generic: 'mometasone',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Asmanex Twisthaler 110',
					generic: 'mometasone',
					type: 'DPI',
					frequency: '1 puff daily'
				},
				{
					name: 'QVAR RediHaler 40, 80, or 160',
					generic: 'beclomethasone',
					type: 'MDI',
					frequency: '1 inhalation 2x daily'
				}
			]
		},
		{
			name: 'Medium',
			inhalers: [
				{
					name: '',
					generic: '',
					type: '',
					frequency: ''
				},
				{
					name: 'Arnuity Ellipta 100',
					generic: 'fluticasone-furoate',
					type: 'DPI',
					frequency: '1 puff daily'
				},
				{
					name: 'Advair HFA 115/21',
					generic: 'fluticasone-salmeterol',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'AirDuo Respiclick 113/14',
					generic: 'fluticasone-salmeterol',
					type: 'DPI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Advair Diskus 250/50',
					generic: 'fluticasone-salmeterol',
					type: 'DPI',
					frequency: '1 puff 2x daily'
				},
				{
					name: 'Wixela Inhub 250/50',
					generic: 'fluticasone-propionate',
					type: 'DPI',
					frequency: '1 puff 2x daily'
				},
				{
					name: 'Flovent HFA 110',
					generic: 'fluticasone-proprionate',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Flovent Diskus 100',
					generic: 'fluticasone-proprionate',
					type: 'DPI',
					frequency: '2 puffs 2x daily'
				},

				{
					name: 'Breo Ellipta 100/25',
					generic: 'fluticasone-vilanterol',
					type: 'DPI',
					frequency: '1 puff every evening'
				},
				{
					name: 'Trelegy 100/62.5/25',
					generic: 'fluticasone-umeclidinium-vilanterol',
					type: 'DPI',
					frequency: '1 puff daily'
				},

				{
					name: 'Symbicort HFA 160/4.5',
					generic: 'budesonide-formoterol',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Breztri 160/9/4.8',
					generic: 'budesonide-glycopyrrolate-formoterol ',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Dulera HFA 100/5',
					generic: 'mometasone-formoterol',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Asmanex HFA 100 or 200',
					generic: 'mometasone',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Asmanex Twisthaler 220',
					generic: 'mometasone',
					type: 'DPI',
					frequency: '1 puff daily'
				},
				{
					name: 'QVAR RediHaler 320',
					generic: 'beclomethasone',
					type: 'MDI',
					frequency: '1 inhalation 2x daily'
				}
			]
		},
		{
			name: 'High',
			inhalers: [
				{
					name: '',
					generic: '',
					type: '',
					frequency: ''
				},
				{
					name: 'Arnuity Ellipta 200',
					generic: 'fluticasone-furoate',
					type: 'DPI',
					frequency: '1 puff daily'
				},
				{
					name: 'Advair HFA 230/21',
					generic: 'fluticasone-salmeterol',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'AirDuo Respiclick 232/14',
					generic: 'fluticasone-salmeterol',
					type: 'DPI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Advair Diskus 500/50',
					generic: 'fluticasone-salmeterol',
					type: 'DPI',
					frequency: '1 puff 2x daily'
				},
				{
					name: 'Wixela Inhub 500/50',
					generic: 'fluticasone-propionate',
					type: 'DPI',
					frequency: '1 puff 2x daily'
				},

				{
					name: 'Flovent HFA 220',
					generic: 'fluticasone-proprionate',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Flovent Diskus 250',
					generic: 'fluticasone-proprionate',
					type: 'DPI',
					frequency: '2 puffs 2x daily'
				},
				{
					name: 'Breo Ellipta 200/25',
					generic: 'fluticasone-vilanterol',
					type: 'DPI',
					frequency: '1 puff every evening'
				},
				{
					name: 'Trelegy 200/62.5/25',
					generic: 'fluticasone-umeclidinium-vilanterol',
					type: 'DPI',
					frequency: '1 puff daily'
				},
				{
					name: 'Dulera HFA 200/5',
					generic: 'mometasone-formoterol',
					type: 'MDI',
					frequency: '2 puffs 2x daily'
				}
			]
		}
	];
</script>

<TopNav />

<div class=" mx-auto max-w-5xl overflow-x-auto p-8 md:p-20">
	<div class="prose-lg mb-4 max-w-none dark:prose-invert">
		This page shows dosing of inhaled corticosteroids (ICS). This table does not imply potency
		equivalence but only suggested total daily dosing level for low, medium, and high ICS.
	</div>

	<table class="table-auto">
		<thead class=" dark:bg-neutral-900">
			<tr class="">
				<td
					class="border-y-2 border-black bg-main-400 p-2 px-4 dark:bg-main-800 md:whitespace-nowrap md:px-8"
					>Dosing Level</td
				>
				<td class="border-y-2 border-black bg-main-400 p-2 px-3 dark:bg-main-800">Generic</td>
				<td
					class="border-y-2 border-black bg-main-400 p-2 px-3 dark:bg-main-800 md:whitespace-nowrap"
					>Type of Delivery</td
				>
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
						<td class="px-3 py-2 empty:hidden">{inhaler.type}</td>
						<td class="px-3 py-2 empty:hidden">{inhaler.name}</td>
						<td class="px-3 py-2 empty:hidden">{inhaler.frequency}</td>
					</tr>
				{/each}
			{/each}
			<tr>
				<td colspan="5" class="border-y-2 border-black px-2 py-2"
					>DPI, dry powder inhaler; MDI, metered dosing inhaler; HFA, hydrofluoroalkane.</td
				>
			</tr>
		</tbody>
	</table>
</div>

<Footer>
	<p>
		Smith JD, Arteta M, Baptist AP, et al. Asthma [Internet]. Ann Arbor (MI): Michigan Medicine
		University of Michigan; 2021 Jul. Available from: https://www.ncbi.nlm.nih.gov/books/NBK579412/
	</p>
	<p>
		Pocket Guide for Asthma Management and Prevention. Global Initiative for Asthma - GINA. Accessed
		June 17, 2023. https://ginasthma.org/pocket-guide-for-asthma-management-and-prevention/
	</p>
</Footer>
