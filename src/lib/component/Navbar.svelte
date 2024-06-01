<script>
	import '@fontsource/berkshire-swash';
	import hatWizardSolid from '$lib/image/hat-wizard-solid.svg';
</script>

<div
	class="navbar mx-auto mb-4 mt-4 max-w-xl select-none rounded-box bg-base-300 shadow-lg md:mb-6"
>
	<div class="navbar-start">
		<a href="/">
			<button class="btn btn-square btn-ghost" aria-label="Go to homepage">
				<div class="relative m-1 flex aspect-square w-full justify-center">
					<img
						src={hatWizardSolid}
						alt="hat-wizard-solid"
						class="pointer-events-none w-3/4 object-contain"
					/>
				</div>
			</button>
		</a>
	</div>
	<div class="navbar-center">
		<div id="title" class=" \ text-center text-3xl text-neutral-200">LinkWhiz</div>
	</div>
	<div class="navbar-end">
		<!--		<ThemeController/>-->
	</div>
</div>

<style>
	#title {
		font-family: 'Berkshire Swash', cursive;
	}
</style>
