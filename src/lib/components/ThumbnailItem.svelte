<script lang="ts">
	export let url: string, image: string;
</script>

<a href={'/i/' + url}>
	<div
		class="rounded border-2 border-transparent bg-day-main px-2 hover:shadow-[5px_5px_0px_0px_#090907,0px_0px_0px_2px_#090907] dark:bg-night-main"
	>
		<img src={image} alt="" class="h-52 w-64 object-contain" />
		<div class=" py-2 text-center"><slot>Default</slot></div>
	</div>
</a>
