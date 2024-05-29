<script>
	import '@fontsource/berkshire-swash';
	import hatWizardSolid from '$lib/image/hat-wizard-solid.svg';
	import { goto } from '$app/navigation';
</script>

<div class="navbar bg-base-100 rounded-box shadow-lg mb-4 md:mb-6 max-w-[40rem] mx-auto select-none">
	<div class="navbar-start ">
		<a href="/">
			<button class="btn btn-square btn-ghost" aria-label="Go to homepage">
				<div class="relative w-full aspect-square m-1 flex justify-center">
					<img src={hatWizardSolid} alt="hat-wizard-solid" class="w-3/4 object-contain pointer-events-none" />
				</div>
			</button>
		</a>
	</div>
	<div class="navbar-center ">
		<div id="title" class=" text-center text-neutral-700 dark:text-neutral-200 text-3xl \">LinkWhiz</div>
	</div>
	<div class="navbar-end ">
<!--		<ThemeController/>-->
	</div>
</div>

<style>
	#title {
		font-family: 'Berkshire Swash', cursive;
	}
</style>
