<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let data: Object;
	// const comment = data.inhaler.comment;
	const comment = `# this is a test`;
</script>

<div class="mx-4 mt-20 flex flex-col space-y-4">
	<div class="aspect-w-3 aspect-h-2 ">
		<img src={data.inhaler['image']} alt="" class="bg-white object-contain rounded-md border" />
	</div>

	<h1 class="text-lg font-semibold">
		{data.inhaler['brand name']}
	</h1>

	<table class="table-auto w-full">
		<tr>
			<th />
			<th />
		</tr>
		<tr>
			<td class="font-semibold">Generics</td>
			<td class="text-right">{data.inhaler['generic']}</td>
		</tr>
		<tr>
			<td class="font-semibold">Type</td>
			<td class="text-right">{data.inhaler['composition']}</td>
		</tr>
		<tr>
			<td class="font-semibold">Frequency</td>
			<td class="text-right"> {data.inhaler['frequency']}</td>
		</tr>
		<tr>
			<td class="font-semibold flex items-center space-x-1  whitespace-nowrap">
				<span>Inhaler Type</span>
				<a href="/type">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5 h-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
						/>
					</svg>
				</a>
			</td>
			<td class="text-right">{data.inhaler['type']}</td>
		</tr>
		<tr>
			<td class="font-semibold">Website</td>
			<td class="text-right"
				><a href={data.inhaler['url'] || ''}>{data.inhaler['url'] || 'N/A'}</a></td
			>
		</tr>
	</table>

	<hr />

	<div class="prose">
		{#if data.inhaler.comment}
			{@html data.inhaler.comment}
		{/if}
	</div>

	{#if data.inhaler['brand name'].toLowerCase().includes('respiclick')}
		<p>
			RespiClick inhalers are easier to use for patients with troubled hand-breath coordinations
			(e.g. patients with Parkinson's disease). The powder is delivered with opening the cap and
			without the need to press.
		</p>
		<img src="/respiclick.png" alt="" />
	{/if}

	{#if data.inhaler['brand name'].toLowerCase().includes('digihaler')}
		<p>
			DigiHaler inhalers have built in sensors that records inhaler delivery and syncs it to phone
			apps.
		</p>
		<img src="/digihaler.png" alt="" />
	{/if}

	{#if data.inhaler['brand name'].toLowerCase().includes('hfa')}
		<p>
			Hydrofluoroalkane (HFA) is an inert gas that acts as propellant to deliver the medication.
		</p>
	{/if}

	{#if data.inhaler['brand name'].toLowerCase().includes('diskus')}
		<p>Diskus inhalers are an example of dry powder inhalers.</p>

		<div class="aspect-w-4 aspect-h-3">
			<iframe
				src="https://www.youtube.com/embed/5yBCane4jeI"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
	{/if}

	{#if data.inhaler['brand name'].toLowerCase().includes('twistaler')}
		<p>
			Twisthaler is an example of dry powder inhaler that uses twisting motions to prime the
			inhaler.
		</p>

		<div class="aspect-w-4 aspect-h-3">
			<iframe
				src="https://www.youtube.com/embed/F3u_A0b_O6s"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
	{:else if data.inhaler['brand name'].toLowerCase().includes('flexhaler')}
		<p>
			Flexhaler is an example of dry powder inhaler that uses twisting motions to prime the inhaler.
		</p>
		<div class="aspect-w-4 aspect-h-3">
			<iframe
				src="https://www.youtube.com/embed/cUxqHPGEq60"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
	{/if}
</div>
