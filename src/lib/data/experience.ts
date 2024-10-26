import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'tosoftware',
		company: 'Student Team Project',
		description: 'Student project of 22 Programmers, Designers, Audio Designers, and Artists creating the game [Remanance](http://ryman.b/projects/flintlock).',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'DigiPen Institute of Technology',
		period: { from: new Date(2023, 8) },
		skills: getSkills('C++', 'ue', 'Docker', 'C#'),
		name: 'ToSoftware',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Student project of 22 Programmers, Designers, Audio Designers, and Artists creating the game Remanance.'
	}
];

export const title = 'Experience';
