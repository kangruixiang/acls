<script>
	export let inhaler;
</script>

{#if inhaler.comment}
	{@html inhaler.comment}
{/if}
