import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import chlorofell from '../md/projects/chlorofell.md?raw';
import flintlock from '../md/projects/flintlock.md?raw';

export const items: Array<Project> = [
	{
		slug: 'remanance',
		color: '#5e95e3',
		description: chlorofell,
		shortDescription:
			'Utilize tight maneuvers, specialized ammo, and an arm cannon built from scraps of the mechanical scourge threatening your home, to tear through their compound, and eliminate anything that moves.',
		links: [{ to: 'https://games.digipen.edu/games/chlorofell', label: 'Download Page' }],
		logo: Assets.Unknown,
		name: 'Remanance',
		period: {
			from: new Date(2023, 8)
		},
		skills: getSkills('C++', 'C#', 'Docker', 'ue', 'svn'),
		type: 'Video Game',
		vidId: 'BAi2GyxYI-s',
		screenshots: [
			{
				label: 'Game Menu',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/9bba4cc2-0409-4a2d-87f8-a1006e115e2e/Screenshot+2023-08-27+030705.png?format=2500w'
			},
			{
				label: 'Gameplay',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/8693b4f9-c487-4fad-a314-d43e25d52f2d/Chlorofell_2.png?format=1500w'
			},
			{
				label: 'Gameplay',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/eb73970a-c56a-441b-8ddc-1fce65a36375/Chlorofell_1.png?format=1500w'
			},
			{
				label: 'Boss Fight',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/823b0854-747b-440c-9c5c-4286bb116a5d/Chlorofell_3.png?format=1500w'
			},
			{
				label: 'Gameplay',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/30ea8726-e941-49ed-8650-42eb3bdf0a3f/Screenshot+2023-08-27+020046.png?format=1500w'
			}
		]
	},
	{
		slug: 'chlorofell',
		color: '#5e95e3',
		description: chlorofell,
		shortDescription:
			'Utilize tight maneuvers, specialized ammo, and an arm cannon built from scraps of the mechanical scourge threatening your home, to tear through their compound, and eliminate anything that moves.',
		links: [{ to: 'https://games.digipen.edu/games/chlorofell', label: 'Download Page' }],
		logo: Assets.Unknown,
		name: 'Chlorofell',
		period: {
			from: new Date(2022, 8, 1),
			to: new Date(2023, 8, 1)
		},
		skills: getSkills('C++', 'OpenGL', 'opengl', 'git', 'Python'),
		type: 'Video Game',
		vidId: 'BAi2GyxYI-s',
		screenshots: [
			{
				label: 'Game Menu',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/9bba4cc2-0409-4a2d-87f8-a1006e115e2e/Screenshot+2023-08-27+030705.png?format=2500w'
			},
			{
				label: 'Gameplay',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/8693b4f9-c487-4fad-a314-d43e25d52f2d/Chlorofell_2.png?format=1500w'
			},
			{
				label: 'Gameplay',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/eb73970a-c56a-441b-8ddc-1fce65a36375/Chlorofell_1.png?format=1500w'
			},
			{
				label: 'Boss Fight',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/823b0854-747b-440c-9c5c-4286bb116a5d/Chlorofell_3.png?format=1500w'
			},
			{
				label: 'Gameplay',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/30ea8726-e941-49ed-8650-42eb3bdf0a3f/Screenshot+2023-08-27+020046.png?format=1500w'
			}
		]
	},
	{
		slug: 'flintlock',
		color: '#5e95e3',
		description: flintlock,
		shortDescription:
			'The Flintlock game engine is a custom C++ game engine built at DigiPen Institute of Technology. The Initial Purpose for developing the engine was for the game Chlorofell, however, the engine is flexible enough to support the development of other games such as Elemental Surge.',
		links: [],
		logo: Assets.Unknown,
		name: 'Flintlock Engine',
		period: {
			from: new Date(2022, 8, 1),
			to: new Date(2023, 8, 1)
		},
		skills: getSkills('C++', 'OpenGL', 'opengl', 'git', 'Python'),
		type: 'Custom Game Engine and Editor',
		screenshots: [
			{
				label: 'Engine Layout',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/d05866bd-c573-410b-a492-5037c9ab1466/Screenshot+2023-08-27+021407.png?format=2500w'
			},
			{
				label: 'All object components and behaviours',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/fee08867-2b12-4ed2-9664-ecb996d1b630/Screenshot+2023-08-27+034849.png?format=750w'
			},
			{
				label: 'C++ Realtime Scripting Interface',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/7c3645cd-518e-4d14-9ea0-a9e6a7a43887/Screenshot+2023-08-27+035039.png?format=1000w'
			},
			{
				label: 'Behaviour Tree Editor',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/4e8d756e-9401-40ae-b5df-01d67b8578af/Screenshot+2023-08-27+035156.png?format=1500w'
			},
			{
				label: 'Light Mode',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/03861af2-6e7c-4555-827a-61fda3151c1f/Screenshot+2023-08-27+035237.png?format=2500w'
			}
		]
	},
	{
		slug: 'elementalsurge',
		color: '#5e95e3',
		description: 'Built using the [FlintLock Engine](http://ryman.b/projects/flintlock), Elemental Surge is a captivating action platformer that embarks players on an epic journey to ascend a towering castle and confront a once-mighty but fallen king. With a blend of platforming challenges, combat, and an intriguing storyline, the game offers an immersive experience filled with adventure, danger, and magic.',
		shortDescription:
			'Elemental Surge is a captivating action platformer that embarks players on an epic journey to ascend a towering castle and confront a once-mighty but fallen king. With a blend of platforming challenges, combat, and an intriguing storyline, the game offers an immersive experience filled with adventure, danger, and magic.',
		links: [{ to: 'https://games.digipen.edu/games/elemental-surge', label: 'Download Page' }],
		logo: Assets.Unknown,
		name: 'Elemental Surge',
		period: {
			from: new Date(2023,3, 1),
			to: new Date(2023, 8, 1)
		},
		skills: getSkills('C++', 'C', 'opengl', 'git', 'svn'),
		type: 'Video Game',
		vidId: 'CuJEu4A56Tw',
		screenshots: [
			{
				label: '',
				src: 'https://games.digipen.edu/system/photos/13821/original/chlorofell_action_shot_2.png'
			},
			{
				label: '',
				src: 'https://games.digipen.edu/system/photos/13824/original/chlorofell_boss_warning_2.png'
			}
		]
	}
];

export const title = 'Projects';
