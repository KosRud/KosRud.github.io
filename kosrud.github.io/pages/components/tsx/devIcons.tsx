import style from './devicons.module.less';

interface devIconData {
	title: string;
	url: string;
	imgUrl: string;
}

function devIcon(data: devIconData) {
	return (
		<a
			href={data.url}
			class={style.DevIcon}
		>
			<img
				class={style.DevIcon_img}
				src={data.imgUrl}
				alt={data.title}
				title={data.title}
			/>
		</a>
	);
}

export const git = () =>
	devIcon({
		imgUrl: '/assets/icons/dev/git/icon.svg',
		title: 'git',
		url: 'https://git-scm.com/',
	});
