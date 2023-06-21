<script>
	import { TopNav, Footer } from '$lib/components/index';
	const inhalers = [
		{
			name: 'HFA inhalers',
			char: 'Most common type of MDIs',
			pro: 'Most common, easier to learn',
			img: '/Alvesco HFA.png',
			con: 'Requires good hand-breath coordination. Spacer can help with delivery'
		},
		{
			name: 'Redihaler',
			char: 'Delivery is activated with inhalation instead of actuation',
			img: '/QVAR Redihaler.jpg',
			pro: 'Does not require click or press',
			con: 'Patient still needs to take slow, deep breath'
		},
		{
			name: 'Respimat',
			char: 'Uses soft mist instead of propellant',
			img: '/Stiolto Respimat.jpg',
			pro: 'Delivers slower soft mist. Better delivery. Does not need spacer',
			con: 'More steps. Patient has to turn the base and then press a dose release buttton'
		},
		{
			name: 'Diskus',
			char: 'Most common type of DPI. Patient opens cover until it clicks. Then medicine is delivered with inhalation',
			img: '/Serevent Diskus.jpg',
			pro: '-',
			con: '-'
		},
		{
			name: 'Ellipta',
			char: 'Another very common type of DPI. Works like a Diskus',
			img: '/Anoro Ellipta.png',
			pro: '-',
			con: '-'
		},
		{
			name: 'Handihaler',
			char: 'Single use DPI that requires capsule for each use',
			img: 'Spiriva Handihaler.jpg',
			pro: '-',
			con: 'Requires capsules to be placed each time prior to use'
		},
		{
			name: 'Twisthaler',
			char: 'An example of DPI that uses twisting motion to deliver',
			img: '/Asmanex Twisthaler.png',
			pro: '-',
			con: '-'
		},
		{
			name: 'Flexhaler',
			char: 'An example of DPI that uses twisting motion to deliver',
			img: '/Pulmicort Flexhaler.jpg',
			pro: '-',
			con: '-'
		},
		{
			name: 'Pressair',
			char: 'DPI device that uses pushing down of a button to deliver',
			img: '/Duaklir Pressair.jpg',
			pro: '-',
			con: '-'
		},
		{
			name: 'Inhub',
			char: 'DPI device that works similar to a Diskus',
			img: '/Wixela.png',
			pro: '-',
			con: '-'
		},
		{
			name: 'Respiclick',
			char: 'Delivers when cap is clicked back',
			img: '/ProAir RespiClick.png',
			pro: 'No washing, priming, shaking. No hand-breath coordination',
			con: 'Hard to be approved by insurance'
		}
	];
</script>

<TopNav />

<div class="prose-lg mx-auto max-w-5xl p-8 dark:prose-invert md:p-20">
	<h2>Types of Inhalers</h2>
	<p>
		In general, the two big categories of inhalers are metered dose inhalers (MDI) and dry powder
		inhalers (DPI).
	</p>
	<img src="/inhalersLight.png" class="w-full" alt="" />
	<p>
		Metered dose inhalers (MDIs) are pressurized containers with medicine in aerosol form. The most
		common propellant used is usually Hydrofluoroalkane, or HFA. MDI requires patients to
		click/actuate and then immediately take a slow, deep breath. This can be problematic for
		patients with difficulty coordinating breathing and actuation. The use of a spacer can help with
		delivery of the medication. Spacer holds the medicine in the chamber, and patients can then take
		breath in without having to worry about the exact timing. Another type of MDI called Respimat
		uses soft mist without propellant. This mitigates the need to use a spacer. Downside is that
		there is an extra step with twisting the inhaler prior to use and may require more education.
	</p>

	<p>
		Dry powder inhalers (DPI) deliver medication without a propellant. This requires the patient to
		take in a fast, forceful breath. There are many types of DPIs. Some require patients to insert a
		capsule, others will require only push a button or pull back a lever. Patients will need to be
		able to have sufficient inhalation force. This can be prolematic for patients with poor lung
		functions to start with.
	</p>

	<p>A more detailed table of different examples of inhalers is as below:</p>

	<table class="table-auto">
		<thead class=" dark:bg-neutral-900">
			<tr>
				<td
					class="border-y-2 border-black bg-main-400 p-2 px-3 dark:bg-main-800 md:whitespace-nowrap"
					>Inhaler Type</td
				>
				<td
					class="border-y-2 border-black bg-main-400 p-2 px-3 dark:bg-main-800 md:whitespace-nowrap"
				>
					Image
				</td>
				<td class="border-y-2 border-black bg-main-400 p-2 px-3 dark:bg-main-800"
					>Characteristics</td
				>
				<td class="border-y-2 border-black bg-main-400 p-2 px-3 dark:bg-main-800">Upsides</td>
				<td class="border-y-2 border-black bg-main-400 p-2 px-3 dark:bg-main-800">Downsides</td>
			</tr>
		</thead>
		<tbody>
			{#each inhalers as inhaler}
				<tr class="last:border-b-2 last:border-black even:bg-neutral-200 dark:even:bg-neutral-500">
					<td class="px-3 py-2">{inhaler.name}</td>
					<td class="h-24 w-24"><img src={inhaler.img} class="object-contain" /></td>
					<td class="px-3 py-2">{inhaler.char}</td>
					<td class="px-3 py-2">{inhaler.pro}</td>
					<td class="px-3 py-2">{inhaler.con}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<Footer />
