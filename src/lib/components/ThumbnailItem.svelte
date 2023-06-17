<script lang="ts">
	export let url: string, image: string;
</script>

<a href={'/i/' + url}>
	<div
		class="bg-day-main dark:bg-night-main rounded border-2 border-transparent px-2 py-2 hover:shadow-[5px_5px_0px_0px_#090907,0px_0px_0px_2px_#090907]"
	>
		<img src={image} alt="" class="h-52 w-64 object-contain" />
		<div class="pt-1 text-center"><slot>Default</slot></div>
		<div class="text-center"><slot name="generic">Default</slot></div>
	</div>
</a>
