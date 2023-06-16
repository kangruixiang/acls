<script lang="ts">
	export let data;
</script>

<h1 class="text-lg font-semibold">
	{data.inhaler['brand name']}
</h1>

<table class="w-full table-auto">
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
		<td class="flex items-center space-x-1 whitespace-nowrap font-semibold">
			<span>Inhaler Type</span>
			<a href="/type">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-5 w-5"
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
