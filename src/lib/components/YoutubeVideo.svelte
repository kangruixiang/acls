<script lang="ts">
	export let url: string,
		time = 0,
		spanish = '',
		time2 = 0;
</script>

<div class="aspect-h-3 aspect-w-4">
	<iframe
		src="https://www.youtube.com/embed/{url}?start={time}"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
</div>

{#if spanish}
	<p>In Spanish:</p>
	<div class="aspect-h-3 aspect-w-4">
		<iframe
			src="https://www.youtube.com/embed/{spanish}?start={time2}"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
{/if}
