import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Redmond, Wa, USA',
		logo: Assets.DigiPen,
		name: '',
		organization: 'DigiPen Institute of Technology',
		period: { from: new Date(2021, 8, 1), to: new Date(2025, 3, 20) },
		shortDescription: '',
		slug: 'digipen',
		subjects: ['C', 'C++', 'C#', 'MySQL', 'Python', 'Cloud System Design', 'Game Development', 'Algorithms', 'Data Structures', 'Graphics', 'Data Analysis']
	}
];

export const title = 'Education';
