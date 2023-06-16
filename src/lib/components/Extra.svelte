<script>
	export let inhaler;
</script>

{#if inhaler.comment}
	{@html inhaler.comment}
{/if}

{#if inhaler['brand name'].toLowerCase().includes('respiclick')}
	<p>
		RespiClick inhalers are easier to use for patients with troubled hand-breath coordinations (e.g.
		patients with Parkinson's disease). The powder is delivered with opening the cap and without the
		need to press.
	</p>
	<img src="/respiclick.png" alt="" />
{/if}

{#if inhaler['brand name'].toLowerCase().includes('digihaler')}
	<p>
		DigiHaler inhalers have built in sensors that records inhaler delivery and syncs it to phone
		apps.
	</p>
	<img src="/digihaler.png" alt="" />
{/if}

{#if inhaler['brand name'].toLowerCase().includes('hfa')}
	<p>Hydrofluoroalkane (HFA) is an inert gas that acts as propellant to deliver the medication.</p>
{/if}

{#if inhaler['brand name'].toLowerCase().includes('diskus')}
	<p>Diskus inhalers are an example of dry powder inhalers.</p>

	<div class="aspect-h-3 aspect-w-4">
		<iframe
			src="https://www.youtube.com/embed/5yBCane4jeI"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
{/if}

{#if inhaler['brand name'].toLowerCase().includes('twistaler')}
	<p>
		Twisthaler is an example of dry powder inhaler that uses twisting motions to prime the inhaler.
	</p>

	<div class="aspect-h-3 aspect-w-4">
		<iframe
			src="https://www.youtube.com/embed/F3u_A0b_O6s"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
{:else if inhaler['brand name'].toLowerCase().includes('flexhaler')}
	<p>
		Flexhaler is an example of dry powder inhaler that uses twisting motions to prime the inhaler.
	</p>
	<div class="aspect-h-3 aspect-w-4">
		<iframe
			src="https://www.youtube.com/embed/cUxqHPGEq60"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
{/if}
