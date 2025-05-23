import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import chlorofell from '../md/projects/chlorofell.md?raw';
import Remanance from '../md/projects/remanance.md?raw';
import flintlock from '../md/projects/flintlock.md?raw';



export const items: Array<Project> = [
	{
		slug: 'remanance',
		color: '#5e95e3',
		description: Remanance,
		shortDescription:
			'Utilize tight maneuvers, specialized ammo, and an arm cannon built from scraps of the mechanical scourge threatening your home, to tear through their compound, and eliminate anything that moves.',
		links: [{ to: 'https://store.steampowered.com/app/3564370/Remanence/', label: 'Steam', icon: 'Steam' }, { to: 'https://games.digipen.edu/games/chlorofell', label: 'Alternative Download Page' }],
		logo: Assets.Remanance,
		name: 'Remanance',
		teamSize: 23,
		period: {
			from: new Date(2023, 8),
			to: new Date(2025, 0)
		},
		skills: getSkills('C++', 'C#', 'Docker', 'ue', 'svn'),
		type: 'Video Game',
		screenshots: [
			{
				label: '',
				src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3564370/83539b28a9e47943f009b0c4cd3cdd833dcad811/header.jpg?t=1742620120'
			},
			{
				label: '',
				src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3564370/68713c3ca05c98258891c40a0a20a97576810285/ss_68713c3ca05c98258891c40a0a20a97576810285.1920x1080.jpg?t=1742620120'
			},
			{
				label: '',
				src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3564370/13451dd7c59d93ac3582fbe344f9bcf15083dee5/ss_13451dd7c59d93ac3582fbe344f9bcf15083dee5.1920x1080.jpg?t=1742620120'
			},
			{
				label: '',
				src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3564370/eb4de32a1075c9c0686cdf1d733f1e4b94e1f7c2/ss_eb4de32a1075c9c0686cdf1d733f1e4b94e1f7c2.1920x1080.jpg?t=1742620120'
			},
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/823b0854-747b-440c-9c5c-4286bb116a5d/Chlorofell_3.png?format=1500w'
			},
			{
				label: '',
				src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3564370/c9443be0f71157dfc5da8120200a779fb979c473/ss_c9443be0f71157dfc5da8120200a779fb979c473.1920x1080.jpg?t=1742620120'
			},
			{
				label: '',
				src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3564370/562a80cbe3c275271c593d7c4b2e9679663a51d1/ss_562a80cbe3c275271c593d7c4b2e9679663a51d1.1920x1080.jpg?t=1742620120'
			},
			{
				label: '',
				src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3564370/7b3264a2520e95967683ae2d7ce34bd62faef5fb/ss_7b3264a2520e95967683ae2d7ce34bd62faef5fb.1920x1080.jpg?t=1742620120'
			},
			{
				label: '',
				src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3564370/a71a2a6bbb6ed837d2f273e664e162171f9c3bf7/ss_a71a2a6bbb6ed837d2f273e664e162171f9c3bf7.1920x1080.jpg?t=1742620120'
			},
			{
				label: '',
				src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3564370/6eee91ffc3dbfd09b10ece6aeb6449a51c1344eb/ss_6eee91ffc3dbfd09b10ece6aeb6449a51c1344eb.1920x1080.jpg?t=1742620120'
			},
			{
				label: '',
				src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3564370/2c605b088d47a2b63e8c5c69a54608326390b811/ss_2c605b088d47a2b63e8c5c69a54608326390b811.1920x1080.jpg?t=1742620120'
			}
		]
	},
	{
		slug: 'chlorofell',
		color: '#5e95e3',
		description: chlorofell,
		shortDescription:
			'Utilize tight maneuvers, specialized ammo, and an arm cannon built from scraps of the mechanical scourge threatening your home, to tear through their compound, and eliminate anything that moves.',
		links: [{ to: 'https://store.steampowered.com/app/3476180/Chlorofell/', label: 'Steam', icon: 'Steam' },{ to: 'https://games.digipen.edu/games/chlorofell', label: 'Alternative Download Page' }],
		logo: Assets.Chlorofell,
		name: 'Chlorofell',
		teamSize: 12,
		period: {
			from: new Date(2022, 8, 1),
			to: new Date(2023, 8, 1)
		},
		skills: getSkills('C++', 'OpenGL', 'opengl', 'git', 'Python'),
		type: 'Video Game',
		vidId: 'BAi2GyxYI-s',
		screenshots: [
			{
				label: 'Logo',
				src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3476180/header.jpg?t=1739565034'
			},
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
		slug: 'elementalsurge',
		color: '#5e95e3',
		description: 'Built using the [FlintLock Engine](http://rymanb.com/projects/flintlock), Elemental Surge is a captivating action platformer that embarks players on an epic journey to ascend a towering castle and confront a once-mighty but fallen king. With a blend of platforming challenges, combat, and an intriguing storyline, the game offers an immersive experience filled with adventure, danger, and magic.',
		shortDescription:
			'Elemental Surge is a captivating action platformer that embarks players on an epic journey to ascend a towering castle and confront a once-mighty but fallen king.',
		links: [{ to: 'https://store.steampowered.com/app/3407150/Elemental_Surge/', label: 'Steam', icon: 'Steam' },{ to: 'https://games.digipen.edu/games/elemental-surge', label: 'Alternative Download Page' }], 
		logo: Assets.ElementalSurge,
		name: 'Elemental Surge',
		teamSize: 8,
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
				src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3407150/header.jpg?t=1736541185'
			},
			{
				label: '',
				src: 'https://games.digipen.edu/system/photos/13821/original/chlorofell_action_shot_2.png'
			},
			{
				label: '',
				src: 'https://games.digipen.edu/system/photos/13824/original/chlorofell_boss_warning_2.png'
			}
		]
	},
	{
		slug: 'flintlock',
		color: '#5e95e3',
		description: flintlock,
		shortDescription:
			'The Flintlock game engine is a custom C++ game engine built at DigiPen Institute of Technology.',
		links: [],
		logo: Assets.Flintlock,
		name: 'Flintlock Engine',
		teamSize: 12,
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
		slug: 'rockit',
		color: '#5e95e3',
		description: 'A dwarvern city builder, you start with just a boulder hut and must expand your dwarvern city progressing though various ages of technology optimizing production and consumtions each step of the way, But the dwarves worst enemies, the elves, keep attacking, so the theres only one option left...to build a rocket and escape to the moon. Built using custom C engine',
		shortDescription:
			'A dwarvern city builder, you start with just a boulder hut and must expand your dwarvern city progressing though ages of technology, optimizing production and consumtions. Built using custom C engine',
		links: [],
		logo: Assets.RockIt,
		name: 'Rock-It',
		teamSize: 4,
		period: {
			from: new Date(2022,0),
			to: new Date(2022, 3)
		},
		skills: getSkills('C++', 'C', 'opengl', 'git', 'svn'),
		type: 'Video Game',
		vidId: 'gxh4Wo4HT9Q',
		screenshots: [
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/a330e23c-f094-48d7-b5ba-0c6c38e43774/Screenshot_01.jpg?format=1500w'
			},
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/70ecc01d-ad15-42f4-ae08-cbe872c568ea/Screenshot_02.jpg?format=1500w'
			},
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/6efa5587-671f-4929-ad56-ef06f20abefc/Screenshot_03.jpg?format=1500w'
			},
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/6beda897-5889-47cf-9838-9f5ea8c19510/Screenshot_04.jpg?format=1500w'
			},
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/ead7a759-ee89-481c-9b19-27c3b5eb66be/Screenshot_05.jpg?format=1500w'
			},
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/7c780c57-230b-4d3d-961a-0d1421bb91d8/Screenshot_06.jpg?format=1500ww'
			}
		]
	},
	{
		slug: 'ratformer',
		color: '#5e95e3',
		description: '2D Plaformer featuring a rat that makes its way through a sewer and past obstacles. Built using custom C engine',
		shortDescription:
			'2D Plaformer featuring a rat that makes its way through a sewer and past obstacles. Built using custom C engine',
		links: [],
		logo: Assets.Ratformer,
		name: 'Ratformer',
		teamSize: 3,
		period: {
			from: new Date(2021,8),
			to: new Date(2021, 11)
		},
		skills: getSkills('C++', 'C', 'opengl', 'git', 'svn'),
		type: 'Video Game',
		screenshots: [
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/71cf4c9d-d732-43c4-b487-97ba867f6bc9/Screenshot+2023-08-27+044649.png?format=1500w'
			},
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/0481817f-9af4-4712-91f1-af9790929027/Screenshot+2023-08-27+044700.png?format=1500w'
			},
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/831afafe-10c5-4878-84fe-d26ba04cd780/Screenshot+2023-08-27+044751.png?format=1500w'
			},
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/9175b1d5-db60-4e74-b495-e080522c82cd/Screenshot+2023-08-27+044800.png?format=1500w'
			},
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/79376a5c-fe48-4f7b-9348-b776b4307219/Screenshot+2023-08-27+044813.png?format=1500w'
			},
			{
				label: '',
				src: 'https://images.squarespace-cdn.com/content/v1/64e9f0fe1d4aad2600e12c01/0756af89-f3fc-45a2-84aa-5da81d85ca9e/Screenshot+2023-08-27+044825.png?format=1500w'
			}
		]
	},
	{
		slug: 'fileserver',
		color: '#5e95e3',
		description: 'Cloud file server that allows users to upload, download, and manage files in the cloud with per user storage using OAuth2.0 for authentication. Hosted on Azure.',
		shortDescription:
			'Cloud file server that allows users to upload, download, and manage files in the cloud with per user storage using OAuth2.0 for authentication.',
		links: [{ to: 'https://fileserverfrontend.wonderfulsky-750ba161.westus2.azurecontainerapps.io/', label: 'Website' },
				{ to: 'https://github.com/rymanb/FileSystemFrontend', label: 'Frontend', icon: 'GitHub' },
				{ to: 'https://github.com/rymanb/UserDatabaseInterface', label: 'Database Interface', icon: 'GitHub' },
				{ to: 'https://github.com/rymanb/FileServerService', label: 'Backend API', icon: 'GitHub' }
			],
		logo: Assets.Unknown,
		name: 'Cloud File Server',
		teamSize: 1,
		period: {
			from: new Date(2024, 10),
			to: new Date(2024, 11)
		},
		skills: getSkills('C#', 'node', 'js', 'git', 'html', 'css', 'Docker', 'azure'),
		type: 'Cloud Service'
	},
	{
		slug: 'neuralnetwork',
		color: '#5e95e3',
		description: '',
		shortDescription:
			'C++ Neural Network implementation that compiles into a python module for easy use.',
		links: [{ to: 'https://games.digipen.edu/games/elemental-surge', label: 'Download Page', icon: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Neural Network',
		teamSize: 1,
		period: {
			from: new Date(2024, 10),
			to: new Date(2024, 10)
		},
		skills: getSkills('C++', 'Python'),
		type: 'Machine Learning',
	},
	{
		slug: 'decisiontree',
		color: '#5e95e3',
		description: '',
		shortDescription:
			'Decision Tree supervised learning algorithm implemented in python.',
		links: [{ to: 'https://games.digipen.edu/games/elemental-surge', label: 'Download Page', icon: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Decision Tree',
		teamSize: 1,
		period: {
			from: new Date(2024, 11),
			to: new Date(2024, 11)
		},
		skills: getSkills('Python'),
		type: 'Machine Learning',
	},
	{
		slug: 'spamfilter',
		color: '#5e95e3',
		description: '',
		shortDescription:
			'Naive Bayes spam filter implemented in python.',
		links: [{ to: 'https://games.digipen.edu/games/elemental-surge', label: 'Download Page', icon: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Naive Bayes Spam Filter',
		teamSize: 1,
		period: {
			from: new Date(2024, 9),
			to: new Date(2024, 9)
		},
		skills: getSkills('Python'),
		type: 'Machine Learning',
	},
	{
		slug: 'memorymanager',
		color: '#5e95e3',
		description: '',
		descriptionLink: 'https://raw.githubusercontent.com/rymanb/MemoryProfiler/main/README.md',
		shortDescription:
			'Linux and Windows Memory manager and debugger that tracks allocations, deletions, and errors in runtime.',
		links: [{ to: 'https://github.com/rymanb/MemoryProfiler', label: 'Download Page', icon: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Custom Memory Manager',
		teamSize: 1,
		period: {
			from: new Date(2023,3),
			to: new Date(2023, 3)
		},
		skills: getSkills('C++'),
		type: 'Tools Development',
	},
	{
		slug: 'crashdump',
		color: '#5e95e3',
		description: '',
		descriptionLink: 'https://raw.githubusercontent.com/rymanb/Crash-Handler/main/README.md',
		shortDescription:
			'Windows crash dump api developed for easy integration into any project with minimal setup.',
		links: [{ to: 'https://github.com/rymanb/Crash-Handler', label: 'Download Page', icon: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Crash Dump Tool',
		teamSize: 1,
		period: {
			from: new Date(2023,1),
			to: new Date(2023, 1)
		},
		skills: getSkills('C++', 'windows', 'linux'),
		type: 'Tools Development',
	},
	{
		slug: 'profiler',
		color: '#5e95e3',
		description: '',
		descriptionLink: 'https://raw.githubusercontent.com/rymanb/Sampling-Profiler/main/README.md',
		shortDescription:
			'A simple API that can easily be integrated into any C++ Windows project to easily profile the performance of an application. ',
		links: [{ to: 'https://github.com/rymanb/Sampling-Profiler', label: 'Download Page', icon: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Sampling Profiler',
		teamSize: 1,
		period: {
			from: new Date(2023,2),
			to: new Date(2023, 2)
		},
		skills: getSkills('C++', 'windows', 'linux'),
		type: 'Tools Development',
	}
];

export const title = 'Projects';
