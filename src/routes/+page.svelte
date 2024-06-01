<script lang="ts">
	import type { ActionData } from './$types';

	import Magic from 'virtual:icons/jam/magic';
	import GlowText from '$lib/component/GlowText.svelte';
	export let form: ActionData;

	let copied = false;

	async function copyLink() {
		try {
			if (form?.destination) {
				await navigator.clipboard.writeText(form?.destination);
				copied = true;
				hideTimer();
			}
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	}

	function hideTimer() {
		setTimeout(function () {
			copied = false;
		}, 2000);
	}
</script>

<svelte:head>
	<title>LinkWhiz</title>
	<meta name="description" content="WebSqueeze link shortener" />
</svelte:head>

<div class="flex min-h-full flex-grow flex-col items-center justify-center pb-16">
	<div class="relative flex w-full flex-col gap-y-14">
		<div>
			<h1 class="text-center text-4xl font-extrabold">
				<GlowText>Transform</GlowText>
				Your Links with a Touch of
				<GlowText>Magic</GlowText>
			</h1>
		</div>
		<form method="POST" action="/" class="flex gap-3">
			<input
				name="link"
				title="valid url"
				pattern="\b(?:https?://)?(?:www\.)?\S+\.\S+\b"
				class="input input-secondary w-full"
				placeholder="Shorten..."
			/>
			<button type="submit" class="btn btn-primary btn-secondary">
				<Magic style="font-size: 1.5em; color: white"></Magic>
			</button>
		</form>

		{#if form?.success}
			<div role="alert" class="alert bg-base-300 py-6 shadow-lg">
				<div class="hidden sm:block">
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
				</div>

				<a class="link-accent" href={form?.destination}>{form?.destination}</a>
				<button
					class="btn btn-neutral btn-sm w-full sm:w-14"
					class:btn-success={copied}
					on:click={() => copyLink()}
				>
					{#if copied}
						OK
					{:else}
						Copy
					{/if}
				</button>
			</div>
		{/if}
	</div>
</div>
