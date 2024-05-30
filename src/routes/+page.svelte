<script lang="ts">
	import type { PageData, ActionData } from './$types';

	import Magic from 'virtual:icons/jam/magic';
	export let form: ActionData;
</script>

<svelte:head>
	<title>LinkWhiz</title>
	<meta name="description" content="WebSqueeze link shortener" />
</svelte:head>

<div class="flex min-h-full flex-grow flex-col items-center justify-center">
	<div class="relative w-full">
		<form action="POST" class="flex gap-3">
			<input name="link" class="input input-primary w-full" placeholder="Shorten..." />
			<button type="submit" class="btn btn-primary">
				<Magic style="font-size: 1.5em; color: white"></Magic>
			</button>
		</form>

		{#if true}
			<div role="alert" class="alert alert-info absolute top-16 shadow-lg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="h-6 w-6 shrink-0 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path></svg
				>
				<span>New software update available.</span>
				<button class="btn btn-sm">Copy</button>
			</div>
		{/if}
	</div>
</div>
