import style from './devicons.module.less';

import HyperLink from '../../../.vitepress/theme/components/HyperLink.vue';

import iconCpp from '../assets/icons/dev/cpp/icon.svg';
import iconCsharp from '../assets/icons/dev/csharp/icon.svg';
import iconCss3 from '../assets/icons/dev/css3/icon.svg';
import iconCypress from '../assets/icons/dev/cypress/icon.svg';
import iconCython from '../assets/icons/dev/cython/icon.svg';
import iconDeno from '../assets/icons/dev/deno/icon.svg';
import iconDoxygen from '../assets/icons/dev/doxygen/icon.png';
import iconFastify from '../assets/icons/dev/fastify/icon.svg';
import iconGit from '../assets/icons/dev/git/icon.svg';
import iconHlsl from '../assets/icons/dev/hlsl/icon.svg';
import iconHtml5 from '../assets/icons/dev/html5/icon.svg';
import iconImmutableJs from '../assets/icons/dev/immutableJs/icon.svg';
import iconJavascript from '../assets/icons/dev/javascript/icon.svg';
import iconLess from '../assets/icons/dev/less/icon.svg';
import iconLua from '../assets/icons/dev/lua/icon.svg';
import iconMongodb from '../assets/icons/dev/mongodb/icon.svg';
import iconNeutralino from '../assets/icons/dev/neutralino/icon.svg';
import iconNodeJs from '../assets/icons/dev/nodeJs/icon.svg';
import iconPinia from '../assets/icons/dev/pinia/icon.svg';
import iconPostgresql from '../assets/icons/dev/postgresql/icon.svg';
import iconPython from '../assets/icons/dev/python/icon.svg';
import iconReact from '../assets/icons/dev/react/icon.svg';
import iconRedis from '../assets/icons/dev/redis/icon.svg';
import iconRust from '../assets/icons/dev/rust/icon.svg';
import iconTypedoc from '../assets/icons/dev/typedoc/icon.png';
import iconTypescript from '../assets/icons/dev/typescript/icon.svg';
import iconUnity from '../assets/icons/dev/unity/icon.svg';
import iconVite from '../assets/icons/dev/vite/icon.svg';
import iconVitepress from '../assets/icons/dev/vitepress/icon.svg';
import iconVue from '../assets/icons/dev/vue/icon.svg';
import iconWxWidgets from '../assets/icons/dev/wxWidgets/icon.svg';

interface devIconData {
	title: string;
	url: string;
	imgUrl: string;
}

function devIcon(data: devIconData) {
	const img = (
		<img
			class={style.DevIcon_img}
			src={data.imgUrl}
			alt={data.title}
			title={data.title}
		/>
	);

	if (data.url) {
		return (
			<HyperLink
				href={data.url}
				class={style.DevIcon}
			>
				{img}
			</HyperLink>
		);
	}

	return <div class={style.DevIcon}>{img}</div>;
}

const devIconDataCollection = {
	cpp: {
		imgUrl: iconCpp,
		title: 'C++',
		url: '',
	},
	csharp: {
		imgUrl: iconCsharp,
		title: 'C#',
		url: '',
	},
	css3: {
		imgUrl: iconCss3,
		title: 'CSS3',
		url: '',
	},
	cypress: {
		imgUrl: iconCypress,
		title: 'Cypress',
		url: '',
	},
	cython: {
		imgUrl: iconCython,
		title: 'Cython',
		url: '',
	},
	deno: {
		imgUrl: iconDeno,
		title: 'Deno',
		url: '',
	},
	doxygen: {
		imgUrl: iconDoxygen,
		title: 'Doxygen',
		url: '',
	},
	fastify: {
		imgUrl: iconFastify,
		title: 'Fastify',
		url: '',
	},
	git: {
		imgUrl: iconGit,
		title: 'Git',
		url: '',
		// url: 'https://git-scm.com/',
	},
	hlsl: {
		imgUrl: iconHlsl,
		title: 'HLSL',
		url: '',
	},
	html5: {
		imgUrl: iconHtml5,
		title: 'HTML5',
		url: '',
	},
	immutableJs: {
		imgUrl: iconImmutableJs,
		title: 'Immutable.js',
		url: '',
	},
	javascript: {
		imgUrl: iconJavascript,
		title: 'JavaScript',
		url: '',
	},
	less: {
		imgUrl: iconLess,
		title: 'LESS',
		url: '',
	},
	lua: {
		imgUrl: iconLua,
		title: 'Lua',
		url: '',
	},
	mongodb: {
		imgUrl: iconMongodb,
		title: 'MongoDB',
		url: '',
	},
	neutralino: {
		imgUrl: iconNeutralino,
		title: 'Neutralino',
		url: '',
	},
	nodeJs: {
		imgUrl: iconNodeJs,
		title: 'Node.js',
		url: '',
	},
	pinia: {
		imgUrl: iconPinia,
		title: 'Pinia',
		url: '',
	},
	postgresql: {
		imgUrl: iconPostgresql,
		title: 'PostgreSQL',
		url: '',
	},
	python: {
		imgUrl: iconPython,
		title: 'Python',
		url: '',
	},
	react: {
		imgUrl: iconReact,
		title: 'React',
		url: '',
	},
	redis: {
		imgUrl: iconRedis,
		title: 'Redis',
		url: '',
	},
	rust: {
		imgUrl: iconRust,
		title: 'Rust',
		url: '',
	},
	typedoc: {
		imgUrl: iconTypedoc,
		title: 'TypeDoc',
		url: '',
	},
	typescript: {
		imgUrl: iconTypescript,
		title: 'TypeSript',
		url: '',
	},
	unity: {
		imgUrl: iconUnity,
		title: 'Unity',
		url: '',
	},
	vite: {
		imgUrl: iconVite,
		title: 'Vite',
		url: '',
	},
	vitepress: {
		imgUrl: iconVitepress,
		title: 'VitePress',
		url: '',
	},
	vue: {
		imgUrl: iconVue,
		title: 'Vue.js',
		url: '',
	},
	wxWidgets: {
		imgUrl: iconWxWidgets,
		title: 'wxWidgets',
		url: '',
	},
};

export const devIcons = Object.fromEntries(
	Object.entries(devIconDataCollection).map(([name, data]) => [
		name,
		devIcon(data),
	])
) as { [key in keyof typeof devIconDataCollection]: JSX.Element };
