<script>
	import { inhalers } from '$lib/inhalers';
	import { Thumbnail, ThumbnailItem, Search } from '$lib/components/index';
</script>

<div class="sticky top-12 z-10 border-b border-neutral-200 bg-neutral-100 py-2 md:top-0">
	<div class="mx-auto px-4 md:max-w-5xl">
		<Search />
	</div>
</div>

<div class="mx-auto mt-5 max-w-5xl">
	<Thumbnail inhalers={$inhalers} let:inhaler>
		<ThumbnailItem url={inhaler['brand name']} image={inhaler.image}>
			<svelte:fragment>{inhaler['brand name']}</svelte:fragment>
		</ThumbnailItem>
	</Thumbnail>
</div>
