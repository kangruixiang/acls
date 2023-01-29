<script lang="ts">
	export let data: Object;
	console.log(data.inhaler.generic);
</script>

<div class="mx-4 mt-20 flex flex-col space-y-4">
	<h1 class="text-lg font-semibold">{data.inhaler['brand name']}</h1>

	<div class="aspect-w-3 aspect-h-2">
		<img src={data.inhaler['image']} alt="" class="bg-white object-contain rounded-md" />
	</div>

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
			<td class="font-semibold">Inhaler Type</td>
			<td class="text-right">{data.inhaler['type']}</td>
		</tr>
	</table>

	<div class="">
		{#if data.inhaler.comment}
			{data.inhaler.comment}
		{/if}
	</div>
</div>
