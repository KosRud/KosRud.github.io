import { makeNav } from './nav';

export const getNav = () =>
	makeNav(
		[
			{ title: 'About me', url: '/about' },
			{
				title: 'For students',
				url: '/students',
				children: [
					{
						title: 'HTML & CSS',
						url: 'html+css',
						children: [
							{
								title: 'CSS selectors',
								url: 'selectors',
							},
							{
								title: 'Design guidelines',
								url: 'guidelines',
							},
							// {
							// 	title: 'Semantic elements',
							// 	url: 'semantic',
							// },
							{
								title: 'Tools',
								url: 'tools',
							},
							{
								title: 'Additional resources',
								url: 'resources',
							},
						],
					},
					{
						title: 'JavaScript',
						url: 'js',
						children: [
							{ title: 'Naming things', url: 'naming' },
							{ title: 'Clean code', url: 'clean' },
							{ title: 'JS cheat sheet', url: 'cheat' },
						],
					},
				],
			},
		],
		'./pages'
	);
