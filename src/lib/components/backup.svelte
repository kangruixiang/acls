
	function selectByComposition(inhalerComposition: string) {
		inhalers.set(defaultInhalers);
		current = inhalerComposition;

		if (inhalerComposition === 'All') {
			return;
		}

		$inhalers = $inhalers.filter((inhaler) => {
			return inhaler.composition == inhalerComposition;
		});
	}



		{#each inhalerTypes as inhalerType}
			<div
				class="w-full cursor-pointer bg-[#008A94] px-2 py-4 text-white hover:bg-[#0896a0] active:bg-[#0d9ba5] md:px-6 md:text-right"
				class:selected={current === inhalerType}
				on:click={() => selectByComposition(inhalerType)}
			>
				{inhalerType}
			</div>
		{/each}