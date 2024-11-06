<script lang="ts">
	import { onMount } from 'svelte';

	let el: HTMLElement;

	export let active = false;
	export let size = 'auto';
	export let classes = '';
	export let href = '';
	export let border = '[var(--border)]';
	
	const getTwBorderColor = (color: string): string => {
		switch (color) {
			case 'red':
				return 'border-red';
			case 'blue':
				return 'border-blue';
			case 'green':
				return 'border-green';
			case 'yellow':
				return 'border-yellow';
			case 'purple':
				return 'border-purple';
			case 'pink':
				return 'border-pink';
			case 'cyan':
				return 'border-cyan';
			case 'orange':
				return 'border-orange';
			case 'gray':
				return 'border-gray';
			default:
				return 'border-gray';
		}
	};

	$: className = `row-center cursor-pointer py-[5px] px-[15px] m-[2.5px] decoration-none inline-block border-[1px] border-solid border-${border} rounded-[20px] tracking-wider text-[0.9em] text-[var(--tertiary-text)] duration-[150ms] font-light  ${
		active
			? 'bg-[var(--accent)] text-[var(--accent-text)]'
			: 'bg-[transparent] hover:bg-[var(--main-hover)]'

	} ${classes}`;



	onMount(() => {
		el.style.setProperty('--size', size);
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	bind:this={el}
	{href}
	class={className}
	on:click
	on:keydown
	on:keypress
	on:keyup
>
	<slot />
</svelte:element>
