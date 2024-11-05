import { Platform } from '$lib/types';
import { getCoreSkills, getSkills } from './skills';

export const title = 'Home';

export const name = 'Ryman';

export const lastName = 'Barnett';

export const description =
	'2025 Computer science graduate skilled in C++, C#, and Python, with experience in collaborative projects involving up to 22 team members. While I have worked on custom game engines and gameplay programming, I also bring knowledge of cloud services and backend development. Open to a wide range of technical paths, I’m eager to contribute to innovative software projects.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/rymanb/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/ryman-barnett/'
	},
	{
		platform: Platform.Email,
		link: 'barnettrym@gmail.com'
	}
];

export const skills = getCoreSkills();
