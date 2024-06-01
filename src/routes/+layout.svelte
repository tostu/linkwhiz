<script>
	import '../app.css';
	import { Layout } from 'tostulib-svelte';
	import Navbar from '$lib/component/Navbar.svelte';
</script>

<Layout>
	<header slot="header" class="px-4">
		<nav>
			<Navbar />
		</nav>
	</header>

	<main
		slot="main"
		class="mx-auto mb-20 flex min-h-full w-full max-w-xl flex-grow flex-col px-4 md:mb-24"
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
	/*:global(html) {*/
	/*	background-color: oklch(var(--b2)) !important;*/
	/*}*/
</style>
