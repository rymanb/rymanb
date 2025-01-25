<script>
	import { data, title } from '@data/resume';

	
	import { onMount } from 'svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';

	let PdfViewer;
	onMount(async () => {
		const module = await import("svelte-pdf");
		PdfViewer = module.default;
  	});
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<!-- <a href={data} download>
				<Chip size={'1.25em'}>Download</Chip>
			</a> -->
			<svelte:component this={PdfViewer} url={data} />
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
