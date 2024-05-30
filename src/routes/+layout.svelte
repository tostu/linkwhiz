<script>
	import '../app.css';
	import { Layout } from 'tostulib-svelte';
	import Navbar from '$lib/component/Navbar.svelte';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<Layout>
	<header slot="header">
		<nav>
			<Navbar />
		</nav>
	</header>

	<main
		slot="main"
		class="mx-auto mb-20 flex min-h-full w-full max-w-xl flex-grow flex-col md:mb-24"
	>
		<slot />
	</main>
	<footer
		slot="footer"
		class="footer footer-center fixed bottom-0 bg-base-300 p-4 text-base-content"
	>
		<div>
			<p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
		</div>
	</footer>
</Layout>

<style lang="postcss">
	:global(html) {
		background-color: oklch(var(--b2)) !important;
	}
</style>
