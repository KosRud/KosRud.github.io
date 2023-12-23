<script setup lang="ts">
import FeaturesGallery from './FeaturesGallery.vue';
import FeaturesGalleryCard from './FeaturesGalleryCard.vue';
import HomePageFeaturesContent from './PageHomeFeaturesContent.vue';
import HyperLink from '@theme/components/HyperLink.vue';

import iconProgramming from '@pages/components/assets/icons/highlights/programming/icon.svg';
import iconCommunication from '@pages/components/assets/icons/highlights/communication/icon.svg';
import iconEducation from '@pages/components/assets/icons/highlights/education/icon.svg';
import iconGears from '@pages/components/assets/icons/highlights/gears/icon.svg';
import iconJob from '@pages/components/assets/icons/highlights/job/icon.svg';
// import iconPaper from '@pages/components/assets/icons/highlights/paper/icon.svg';
// import iconProject from '@pages/components/assets/icons/highlights/project/icon.svg';
</script>

<template>
	<FeaturesGallery
		:dummies="8"
		:card-min-width="'300rem'"
	>
		<FeaturesGalleryCard
			name="Programming languages"
			:icon-url="iconProgramming"
		>
			<HomePageFeaturesContent>
				C#, HLSL, TypeScript, Javascript, Python, C++
			</HomePageFeaturesContent>
		</FeaturesGalleryCard>
		<FeaturesGalleryCard
			name="Communication"
			:icon-url="iconCommunication"
		>
			<HomePageFeaturesContent>
				<table>
					<tbody>
						<tr>
							<td>English</td>
							<td>C1 (Advanced)</td>
						</tr>
						<tr>
							<td>Slovak</td>
							<td>basic</td>
						</tr>
						<tr>
							<td>Ukrainian</td>
							<td>native speaker</td>
						</tr>
						<tr>
							<td>Russian</td>
							<td>native speaker</td>
						</tr>
					</tbody>
				</table>
			</HomePageFeaturesContent>
		</FeaturesGalleryCard>
		<FeaturesGalleryCard
			name="Technologies"
			:icon-url="iconGears"
		>
			<HomePageFeaturesContent>
				<table>
					<tbody>
						<tr>
							<td>Game engine</td>
							<td>Unity</td>
						</tr>
						<tr>
							<td>3D modeling</td>
							<td>Blender</td>
						</tr>
						<tr>
							<td>Frontend</td>
							<td>Vue, React</td>
						</tr>
						<tr>
							<td>Backend</td>
							<td>Fastify (Node.js)</td>
						</tr>
						<tr>
							<td>Documentation</td>
							<td>Doxygen, TypeDoc</td>
						</tr>
					</tbody>
				</table>
			</HomePageFeaturesContent>
		</FeaturesGalleryCard>
		<FeaturesGalleryCard
			name="Education"
			:icon-url="iconEducation"
		>
			<HomePageFeaturesContent>
				<table>
					<tbody>
						<tr>
							<td>Software Engineering</td>
							<td>master's degree</td>
						</tr>
					</tbody>
				</table>
			</HomePageFeaturesContent>
		</FeaturesGalleryCard>
		<FeaturesGalleryCard
			name="Experience"
			:icon-url="iconJob"
		>
			<HomePageFeaturesContent>
				<table>
					<tbody>
						<tr>
							<td>
								.NET (C#, C++) developer<br />for
								<HyperLink
									text="RISA Tech, Inc."
									href="https://risa.com/"
								/>
							</td>
							<td>1 year</td>
						</tr>
					</tbody>
				</table>
			</HomePageFeaturesContent>
		</FeaturesGalleryCard>
	</FeaturesGallery>
</template>
