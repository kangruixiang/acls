<script>
	import { YoutubeVideo } from '$lib/components/index';

	export let InhalerType = 'mdi';
</script>

{#if InhalerType === 'Metered dose inhaler'}
	<p>
		MDIs are pressurized containers with medicine in aerosol form. The patient must press the
		canister to activate the propellant (usually Hydrofluoroalkane, or HFA) and inhale slowly for
		several seconds at the same time.
	</p>

	<h2>Instructions for Metered Dose Inhaler</h2>

	<h3>Without a Spacer</h3>

	<p>
		One page instruction can be found from
		<a
			href="https://www.lung.org/getmedia/1aa45911-f79f-44ef-a348-08e089e1a57c/MDI-one-pager.pdf?ext=.pdf"
			>American Lung Association</a
		>.
	</p>

	<YoutubeVideo url={'2i9_DelNqs4'} spanish={'da_tXIHVw28'} />

	<h3>Using a Spacer</h3>

	<p>Using spacer can help the inhalation process and make it easier to inhale the full dose.</p>

	<YoutubeVideo url={'sQUUJHzO-XQ'} spanish={'M2e1KrJzKFo'} />
{/if}

{#if InhalerType === 'Dry powder inhaler'}
	<p>
		DPIs deliver medication without a propellant. The patient must take in deep, fast breath with
		DPI inhalers.
	</p>

	<p>
		DPIs are easier to use and has less irritant effects, but patients must be able to generate
		enough inspiratory flow to achieve therapeutic effect. DPIs cannot be used with spacers.
	</p>
	<h2>Instructions for Dry Powder Inhaler</h2>

	<p>
		One page instruction can be found from
		<a href="https://www.lung.org/getmedia/bf1a80ce-544d-47d8-b919-753b01efb6d2/Diskus.pdf?ext=.pdf"
			>American Lung Association</a
		>.
	</p>

	<YoutubeVideo url={'FnUgQTfP7P4'} spanish={'hYNg3oaVing'} />
{/if}

{#if InhalerType === 'Twisthaler'}
	<h2>Instructions for Twisthaler</h2>
	<p>
		Twisthaler is an example of dry powder inhaler that uses twisting motions to prime the inhaler.
	</p>

	<YoutubeVideo url={'Vsiz8GnSmiM'} spanish={'GWeXd_NNAxA'} />
{/if}

{#if InhalerType === 'Flexhaler'}
	<h2>Instructions for Flexhaler</h2>
	<p>
		Flexhaler is an example of dry powder inhaler that uses twisting motions to prime the inhaler.
	</p>
	<YoutubeVideo url={'Uz069SXWKzE'} spanish={'8KQ1EmSrIL8'} />
{/if}

{#if InhalerType === 'Nebulizer'}
	<h2>Instructions for Nebulizers</h2>

	<p>
		Nebulizer is a small machine that turns liquid into mist to be inhaled. These are great for
		patients who have trouble with taking a deep breath.
	</p>

	<YoutubeVideo url={'pEKFKZiLNaA'} spanish={'UJ6tWM1Exbk'} />
{/if}

{#if InhalerType === 'Respimat'}
	<h2>Instructions for Respimat</h2>
	<YoutubeVideo url={'tuVSp52KFfU'} spanish={'UEf-yIt9LtY'} />
{/if}

{#if InhalerType === 'Respiclick'}
	<p>
		RespiClick inhalers are easier to use for patients with troubled hand-breath coordinations (e.g.
		patients with Parkinson's disease). The powder is delivered with opening the cap and without the
		need to press.
	</p>
	<img src="/respiclick.png" alt="" />
	<h2>Instructions for Respiclick</h2>
	<YoutubeVideo url={'eM9FxTW1wzk'} spanish={'Cu4oN57cCpE'} />
{/if}

{#if InhalerType === 'Pressair'}
	<h2>Instructions for Pressair</h2>
	<YoutubeVideo url={'e11nFHRs60w'} spanish={'sSBCQw1WvWU'} />
{/if}

{#if InhalerType === 'Ellipta'}
	<h2>Instructions for Ellipta</h2>
	<YoutubeVideo url={'nk3zIQRBGMY'} spanish={'vN4-xYeo_KQ'} />
{/if}

{#if InhalerType === 'Digihaler'}
	<p>
		DigiHaler inhalers have built in sensors that records inhaler delivery and syncs it to phone
		apps.
	</p>
	<h2>Instructions for Digihaler</h2>

	<p>
		Diginhaler is an example of dry powder inhaler. The instructions are available at <a
			href="https://www.digihaler.com/support/using-my-inhaler">manufacture website</a
		>.
	</p>
{/if}

{#if InhalerType === 'Redihaler'}
	<h2>Instructions for Redihaler</h2>
	<YoutubeVideo url={'LnyY3hu4lxg'} spanish={'hN90zSFtUGQ'} />
{/if}

{#if InhalerType === 'Inhub'}
	<h2>Instructions for Inhub</h2>
	<YoutubeVideo url={'hGT8zGRNTpo'} spanish={'fLsx59jd_H4'} />
{/if}
