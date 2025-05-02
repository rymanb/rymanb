import { Platform } from '$lib/types';
import { getCoreSkills, getSkills } from './skills';

export const title = 'Home';

export const name = 'Ryman';

export const lastName = 'Barnett';

export const location = 'Seattle, WA';

export const description =
	'2025 Computer Science graduate with a focus on C++, C#, and Python. I’ve contributed to collaborative projects of up to 23 members, building custom game engines, gameplay systems, and development tools. Alongside engine and systems programming, I have experience in cloud platforms like AWS and Azure and am comfortable with backend development. I’m open to diverse technical paths and driven to build high-performance, innovative software';

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
