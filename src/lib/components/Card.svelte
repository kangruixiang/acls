<script lang="ts">
	export let imageURL = '';
</script>

<div class="mx-8 my-4 flex space-x-8">
	<div class="flex h-64 items-center">
		<img
			src={imageURL}
			alt=""
			class="aspect-square dark:bg-dark-main rounded-md border-2 bg-day-darker object-contain"
		/>
	</div>
	<div class="w-1/2 bg-day-darker">
		<slot />
	</div>
</div>
