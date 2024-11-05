<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills } from '@data/home';
	import { items as skillsItems, groupByCategory, getCategoryBySlug } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';

	import Card from '$lib/components/Card/Card.svelte';

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>
<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-5%"
>	
	<!--name desc and link, size of h screen and be centered-->
	<div class="h-screen col justify-center gap-5">
		<MainTitle classes="md:text-center ">{name} {lastName},</MainTitle>
		<p class="text-[var(--tertiary-text)]  text-center md:text-center text-[1.2em] font-extralight">
			{description}
		</p>
		<div class="row justify-center md:justify-center p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>
	<!-- <Carrousel items={skills ?? skillsItems} /> -->
	
</div>


<div class="flex-1 md:flex-col md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-5%">
	<div class="md:flex-1 gap-10px">
		<!-- core Technologies header-->
		<h1 class="md:text-left">Core Technologies</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5 p-5">
			{#each skills as skill}
				<Card
				classes={['cursor-pointer decoration-none']}
				tiltDegree={1}
				href={`${base}/skills/${skill.slug}`}
				bgImg={getAssetURL(skill.logo)}
				color={skill.color}
				>
					<p class="text-[var(--tertiary-text)]">{skill.name}</p>
					<!--skill category, make text smaller-->
					<p class="text-[var(--tertiary-text)] text-xs">{skill.category.name}</p>
				</Card>
			{/each}

		</div>
		<div>

			<!-- card to more skills on right side-->
			 
			<div class="col gap-5 mb-7 md:col-span-2 lg:col-span-3 p-5">
				<Card
				classes={['cursor-pointer decoration-none']}
				tiltDegree={1}
				href={`${base}/skills`}
				bgImg={getAssetURL('more-skills.jpg')}
				color={'#000'}
				>
					<!--more skills text center-->
					<p class="text-[var(--tertiary-text)] text-center">More Skills</p>
				</Card>
			</div>
		</div>


	</div>
</div>

