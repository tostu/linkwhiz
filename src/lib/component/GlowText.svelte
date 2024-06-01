<div class="inline-flex items-center justify-center">
	<span
		class="text-gradient absolute mx-auto box-content flex w-fit select-none border py-4 text-center font-extrabold blur-xl"
	>
		<slot></slot>
	</span>
	<span
		class="text-gradient relative top-0 flex h-auto w-fit select-auto items-center justify-center py-4 text-center font-extrabold text-transparent"
	>
		<slot></slot>
	</span>
</div>

<style lang="postcss">
	.text-gradient {
		@apply bg-gradient-to-r from-[#0087d9] to-[#6fbbfd] bg-clip-text text-transparent;
	}
</style>
