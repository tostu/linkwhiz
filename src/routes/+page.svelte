<script>
	import Magic from 'virtual:icons/jam/magic';
</script>

<svelte:head>
	<title>LinkWhiz</title>
	<meta name="description" content="WebSqueeze link shortener" />
</svelte:head>

<div class="flex min-h-full flex-grow items-center justify-center gap-3">
	<input class="input" placeholder="Shorten..." />
	<button class="btn btn-primary">
		<Magic style="font-size: 1.5em; color: white"></Magic>
	</button>
</div>
