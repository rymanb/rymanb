<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills, location } from '@data/home';
	import { items as skillsItems, groupByCategory, getCategoryBySlug } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import { items as Projects} from '@data/projects';
	import type { Project } from '$lib/types';
	import Chip from '$lib/components/Chip/Chip.svelte';

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};

	onMount(async () => {
	// Create the observer
	const observer = new IntersectionObserver(entries => {
		// Loop over the entries
		entries.forEach(entry => {
			// If the element is visible
			if (entry.isIntersecting) {
			// Add the animation class
			entry.target.classList.add('fade-in-animation');
			}
		});
		});
		

	// Tell the observer which elements to track
	document.querySelectorAll('.fade-in').forEach(square => {
		observer.observe(square);
	});

});
</script>
<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>
<div class="bg-grid"></div>
<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-5%"
>	
	<!--name desc and link, size of h screen and be centered-->
	<div class="fade-in h-screen col justify-center gap-0">
		<MainTitle classes="md:text-center p-0">{name} {lastName}</MainTitle>
		<div class="flex flex-row justify-center items-center pb-2">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill justify-center" viewBox="0 0 16 16">
				<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
			</svg>
			<h3 class="md:text-center px-2"> {location}</h3>
		</div>
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
		<h1 class="fade-in text-5xl  text-center">Current Technologies</h1>
		<p class="fade-in text-[var(--tertiary-text)]  text-center md:text-center text-sm font-extralight p-5px">These are the technologies I am most proficient in and actively use.</p>
		<div class="flex flex-cols flex-wrap gap-2 md:gap-3 lg:gap-5 py-5 justify-center" >
			{#each skills as skill}
				<Card
				classes={['fade-in cursor-pointer decoration-none min-w-250px']}
				tiltDegree={1}
				href={`${base}/skills/${skill.slug}`}
				bgImg={getAssetURL(skill.logo)}
				color={skill.color}
				>
					<p class="text-[var(--tertiary-text)]">{skill.name}</p>
					<!--skill category, make text smaller-->
					<p class="text-[var(--tertiary-text)] text-xs">{skill.category?.name}</p>
				</Card>
			{/each}

		</div>
		<!-- div with item at center-->
		<div class="fade-in p-5 flex justify-center">
			<a href="{base}/skills" class="no-underline text-[var(--tertiary-text)]">
			<!-- button to view all skills-->
			<button class="cursor-pointer inline-flex gap-2.5 h-12 animate-shimmer items-center justify-center rounded-md border-solid border-slate px-6 font-medium text-sm sm:text-base text-slate-200 flex">
				<p>View More Skills</p>

				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right">
					<path d="m9 18 6-6-6-6"></path>
				</svg>
			</button>
			
		</a>
		</div>


	</div>

	<div class="flex-1 gap-10px py-150px">
		<h1 class="fade-in text-5xl text-center">Projects</h1>
		<div class="grid lg:grid-cols-2 gap-2 md:gap-3 lg:gap-5 py-5">

			{#each Projects.slice(0, 4) as project}
				<Card
				classes={['fade-in cursor-pointer decoration-none']}
				tiltDegree={1}
				href={`${base}/projects/${project.slug}`}
				color={project.color}
				>
					<div class="flex flex-col gap-2 p-5px">
						<!-- image make it as large as it can be and fit within card-->
						<img src="https://andrijaweb.vercel.app/_next/image?url=%2Fimgs%2Fprojects%2Fportfolio-mockup2.png&w=1080&q=75" alt="project" class="w-full h-full object-cover rounded-md" />
						<p class="text-[var(--tertiary-text)] font-bold text-28px py-10px">{project.name}</p>
						<!-- <p class="text-[var(--tertiary-text)] text-xs">{project.skills.map((skill) => skill.name).join(', ')}</p> -->
						 <div class="flex flex-row gap-2">
							{#each project.skills as item}
								<Chip
									border={item.color}
									classes="inline-flex flex-row items-center justify-center"
									href={`${base}/skills/${item.slug}`}
								>
									<span class="text-[0.9em]">{item.name}</span>
								</Chip>
							{/each}
						 </div>
					</div>
				</Card>
			{/each}
		</div>

		<div class="fade-in p-5 flex justify-center">
			<a href="{base}/projects" class="no-underline text-[var(--tertiary-text)]">
			<!-- button to view all skills-->
			<button class="cursor-pointer inline-flex gap-2.5 h-12 animate-shimmer items-center justify-center rounded-md border-solid border-slate px-6 font-medium text-sm sm:text-base text-slate-200 flex">
				<p>View More Projects</p>

				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right">
					<path d="m9 18 6-6-6-6"></path>
				</svg>
			</button>
			
		</a>
		</div>
	</div>

	<div class="p-5">
	<div class="fade-in row justify-center md:justify-center p-x-0px gap-2">
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
	<!--copyright-->
	<div class="fade-in p-2 flex justify-center">
		<p class="text-[var(--tertiary-text)] text-sm">© {new Date().getFullYear()} {name} {lastName}</p>
	</div>
		</div>


</div>

