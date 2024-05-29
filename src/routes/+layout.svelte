<script>
	import '../app.css';
	import Navbar from '$lib/component/Navbar.svelte';

	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false)
		// 👆 false parameter is required for svelte
	})
</script>

<div class="app min-h-screen">
	<div class=" w-full p-2 lg:p-6 mb-20 md:mb-24 max-w-4xl mx-auto">
		<header>
			<nav>
				<Navbar/>
			</nav>
		</header>

		<main>
			<slot />
		</main>

	</div>


	<footer class="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0">
		<div>
			<p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
		</div>
	</footer>
</div>

<style lang="postcss">
    :global(html) {
        background-color: oklch(var(--b2)) !important;
    }
</style>
