<script lang="tsx">
import style from './devicons.module.less';

import HyperLink from '@vitepress/theme/components/HyperLink.vue';

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
	aspect: number;
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
				style={{ aspectRatio: data.aspect }}
			>
				{img}
			</HyperLink>
		);
	}

	return (
		<div
			class={style.DevIcon}
			style={{ aspectRatio: data.aspect }}
		>
			{img}
		</div>
	);
}

const devIconDataCollection = {
	cpp: {
		imgUrl: iconCpp,
		title: 'C++',
		url: 'https://en.cppreference.com/w/cpp/language',
		aspect: 1.56060300064527,
	},
	csharp: {
		imgUrl: iconCsharp,
		title: 'C#',
		url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
		aspect: 1.5672441922679645,
	},
	css3: {
		imgUrl: iconCss3,
		title: 'CSS3',
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		aspect: 0.7084648909556598,
	},
	cypress: {
		imgUrl: iconCypress,
		title: 'Cypress',
		url: 'https://www.cypress.io/',
		aspect: 1.0016642396505098,
	},
	cython: {
		imgUrl: iconCython,
		title: 'Cython',
		url: 'https://cython.org/',
		aspect: 1,
	},
	deno: {
		imgUrl: iconDeno,
		title: 'Deno',
		url: 'https://deno.com/',
		aspect: 0.999955397390708,
	},
	doxygen: {
		imgUrl: iconDoxygen,
		title: 'Doxygen',
		url: 'https://www.doxygen.nl/',
	},
	fastify: {
		imgUrl: iconFastify,
		title: 'Fastify',
		url: 'https://fastify.dev/',
		aspect: 2.465562849298349,
	},
	git: {
		imgUrl: iconGit,
		title: 'Git',
		url: 'https://git-scm.com/',
		aspect: 1,
	},
	hlsl: {
		imgUrl: iconHlsl,
		title: 'HLSL',
		url: 'https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl',
		aspect: 2.2748587871305945,
	},
	html5: {
		imgUrl: iconHtml5,
		title: 'HTML5',
		url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		aspect: 1,
	},
	immutableJs: {
		imgUrl: iconImmutableJs,
		title: 'Immutable.js',
		url: 'https://immutable-js.com/',
		aspect: 1.489625606044343,
	},
	javascript: {
		imgUrl: iconJavascript,
		title: 'JavaScript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		aspect: 1,
	},
	less: {
		imgUrl: iconLess,
		title: 'LESS',
		url: 'https://lesscss.org/',
		aspect: 1,
	},
	lua: {
		imgUrl: iconLua,
		title: 'Lua',
		url: 'https://www.lua.org/',
		aspect: 1,
	},
	mongodb: {
		imgUrl: iconMongodb,
		title: 'MongoDB',
		url: 'https://www.mongodb.com/',
		aspect: 0.46511627906976744,
	},
	neutralino: {
		imgUrl: iconNeutralino,
		title: 'Neutralino',
		url: 'https://neutralino.js.org/',
		aspect: 1.1127659574468085,
	},
	nodeJs: {
		imgUrl: iconNodeJs,
		title: 'Node.js',
		url: 'https://nodejs.org/en/about',
		aspect: 1.6327894023895562,
	},
	pinia: {
		imgUrl: iconPinia,
		title: 'Pinia',
		url: 'https://pinia.vuejs.org/',
		aspect: 0.6687631027253669,
	},
	postgresql: {
		imgUrl: iconPostgresql,
		title: 'PostgreSQL',
		url: 'https://www.postgresql.org/',
		aspect: 0.970111117846887,
	},
	python: {
		imgUrl: iconPython,
		title: 'Python',
		url: 'https://www.python.org/',
		aspect: null,
	},
	react: {
		imgUrl: iconReact,
		title: 'React',
		url: 'https://react.dev/',
		aspect: 1.0855263157894737,
	},
	redis: {
		imgUrl: iconRedis,
		title: 'Redis',
		url: 'https://redis.io/',
		aspect: 1.1657775300581257,
	},
	rust: {
		imgUrl: iconRust,
		title: 'Rust',
		url: 'https://www.rust-lang.org/',
		aspect: 1,
	},
	typedoc: {
		imgUrl: iconTypedoc,
		title: 'TypeDoc',
		url: 'https://typedoc.org/',
	},
	typescript: {
		imgUrl: iconTypescript,
		title: 'TypeSript',
		url: 'https://www.typescriptlang.org/',
		aspect: 1,
	},
	unity: {
		imgUrl: iconUnity,
		title: 'Unity',
		url: 'https://unity.com/',
		aspect: 0.8853712032073885,
	},
	vite: {
		imgUrl: iconVite,
		title: 'Vite',
		url: 'https://vitejs.dev/',
		aspect: 1.0148514851485149,
	},
	vitepress: {
		imgUrl: iconVitepress,
		title: 'VitePress',
		url: 'https://vitepress.dev/',
		aspect: 0.8333333333333334,
	},
	vue: {
		imgUrl: iconVue,
		title: 'Vue.js',
		url: 'https://vuejs.org/',
		aspect: 1.1546876838019056,
	},
	wxWidgets: {
		imgUrl: iconWxWidgets,
		title: 'wxWidgets',
		url: 'https://www.wxwidgets.org/',
		aspect: 1,
	},
};

export const devIcons = Object.fromEntries(
	Object.entries(devIconDataCollection).map(([name, data]) => [
		name,
		devIcon(data),
	])
) as { [key in keyof typeof devIconDataCollection]: JSX.Element };

export default devIcons;
</script>
