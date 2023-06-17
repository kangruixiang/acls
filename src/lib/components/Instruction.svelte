<script>
	import { YoutubeVideo } from '$lib/components/index';

	export let InhalerType = 'mdi';
</script>

{#if InhalerType === 'Metered dose inhaler'}
	<h2>Instructions for Metered Dose Inhaler</h2>
	<p>
		MDIs are pressurized containers with medicine in aerosol form. The patient must press the
		canister to activate the propellant (usually HFA) and inhale slowly for several seconds at the
		same time.
	</p>

	<h3>Without a Spacer</h3>

	<YoutubeVideo url={'2i9_DelNqs4'} />

	<h3>Using a Spacer</h3>

	<p>Using spacer can help the inhalation process and make it easier to inhale the full dose:</p>

	<YoutubeVideo url={'A8WT5moNJ0I'} />

	<p>In Spanish:</p>

	<YoutubeVideo url={'HjsOjvRNsx8'} />
{/if}

{#if InhalerType === 'Dry powder inhaler'}
	<h2>Instructions for Dry Powder Inhaler</h2>
	<p>
		DPIs deliver medication without a propellant. The patient must take in deep, fast breath with
		DPI inhalers.
	</p>

	<p>
		DPIs are easier to use and has less irritant effects, but patients must be able to generate
		enough inspiratory flow to achieve therapeutic effect. DPIs cannot be used with spacers.
	</p>

	<p>An example of DPI is Diskus inhalers:</p>

	<YoutubeVideo url={'FnUgQTfP7P4'} />

	<p>In Spanish:</p>

	<YoutubeVideo url={'QRanQLeqdCI'} />
{/if}

{#if InhalerType === 'Twisthaler'}
	<h2>Instructions for Twisthaler</h2>
	<p>
		Twisthaler is an example of dry powder inhaler that uses twisting motions to prime the inhaler.
	</p>

	<YoutubeVideo url={'Vsiz8GnSmiM'} />
{/if}

{#if InhalerType === 'Flexhaler'}
	<h2>Instructions for Flexhaler</h2>
	<p>
		Flexhaler is an example of dry powder inhaler that uses twisting motions to prime the inhaler.
	</p>
	<YoutubeVideo url={'Uz069SXWKzE'} />
{/if}

{#if InhalerType === 'Nebulizer'}
	<h2>Instructions for Nebulizers</h2>

	<p>
		Nebulizer is a small machine that turns liquid into mist to be inhaled. These are great for
		patients who have trouble with taking a deep breath.
	</p>

	<YoutubeVideo url={'pEKFKZiLNaA'} />

	<p>In Spanish:</p>

	<YoutubeVideo url={'UJ6tWM1Exbk'} />
{/if}

{#if InhalerType === 'Respimat'}
	<h2>Instructions for Respimat</h2>
	<YoutubeVideo url={'tuVSp52KFfU'} />
{/if}

{#if InhalerType === 'Respiclick'}
	<p>
		RespiClick inhalers are easier to use for patients with troubled hand-breath coordinations (e.g.
		patients with Parkinson's disease). The powder is delivered with opening the cap and without the
		need to press.
	</p>
	<img src="/respiclick.png" alt="" />
	<h2>Instructions for Respiclick</h2>
	<YoutubeVideo url={'eM9FxTW1wzk'} />
{/if}

{#if InhalerType === 'Pressair'}
	<h2>Instructions for Pressair</h2>
	<YoutubeVideo url={'e11nFHRs60w'} />
{/if}

{#if InhalerType === 'Ellipta'}
	<h2>Instructions for Ellipta</h2>
	<YoutubeVideo url={'nk3zIQRBGMY'} />
{/if}

{#if InhalerType === 'Digihaler'}
<p>
		DigiHaler inhalers have built in sensors that records inhaler delivery and syncs it to phone
		apps.
	</p>
	<h2>Instructions for Digihaler</h2>
	<YoutubeVideo url={'nk3zIQRBGMY'} />
{/if}
