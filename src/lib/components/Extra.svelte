<script>
	export let inhaler;
</script>

{#if inhaler.comment}
	{@html inhaler.comment}
{/if}

{#if inhaler['brand name'].toLowerCase().includes('hfa')}
	<p>Hydrofluoroalkane (HFA) is an inert gas that acts as propellant to deliver the medication.</p>
{/if}
