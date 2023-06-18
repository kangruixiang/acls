<script lang="ts">
	export let inhaler;
</script>

<div class="w-full md:w-1/2">
	<img src={inhaler.image} alt="" class="  aspect-square mx-auto h-96 rounded object-contain" />
</div>
<div class="mx-auto w-full rounded bg-neutral-200 p-10 text-lg dark:bg-neutral-800 md:w-1/2">
	<h1>{inhaler['brand name']}</h1>
	<span class="">Generic: {inhaler.generic}</span> <br />
	<span class="">Type of Inhaler: {inhaler.composition}</span> <br />
	<span class="">Instruction: {inhaler.frequency}</span> <br />
	See <a href="/dosing" class="hover:underline">dosing chart</a> for dosing level.<br />
	<a class="break-words hover:underline" href={inhaler.url}>{inhaler.url}</a>
</div>
