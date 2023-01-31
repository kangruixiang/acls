<script>
	import Back from '$lib/Back.svelte';
</script>

<div class="flex flex-col md:flex-row">
	<Back />

	<div class="prose mx-auto mb-20 px-4 pt-20 md:prose-lg">
		<h2>Metered Dose Inhaler</h2>
		<p>
			MDIs are pressurized containers with medicine in aerosol form. The patient must press the
			canister to activate the propellant (usually HFA) and inhale slowly for several seconds at the
			same time.
		</p>

		<p>Using spacer can help the inhalation process and make it easier to inhale the full dose:</p>

		<div class="aspect-w-4 aspect-h-3">
			<iframe
				src="https://www.youtube.com/embed/JPm10-ExQsA"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>

		<h2>Dry Powder Inhaler</h2>
		<p>
			DPIs deliver medication without a propellant. The patient must take in deep, fast breath with
			DPI inhalers.
		</p>

		<p>
			DPIs are easier to use and has less irritant effects, but patients must be able to generate
			enough inspiratory flow to achieve therapeutic effect. DPIs cannot be used with spacers.
		</p>

		<p>An example of DPI is Diskus inhalers:</p>

		<div class="aspect-w-4 aspect-h-3">
			<iframe
				src="https://www.youtube.com/embed/5yBCane4jeI"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
	</div>
</div>
