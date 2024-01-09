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
		label="expertise"
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
				<table aria-label="languages">
					<tbody>
						<tr>
							<th scope="row">English</th>
							<td>C1 (Advanced)</td>
						</tr>
						<tr>
							<th scope="row">Slovak</th>
							<td>basic</td>
						</tr>
						<tr>
							<th scope="row">Ukrainian</th>
							<td>native speaker</td>
						</tr>
						<tr>
							<th scope="row">Russian</th>
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
							<th scope="row">Game engine</th>
							<td>Unity</td>
						</tr>
						<tr>
							<th scope="row">Frontend</th>
							<td>Vue, React</td>
						</tr>
						<tr>
							<th scope="row">Backend</th>
							<td>Fastify (Node.js)</td>
						</tr>
						<tr>
							<th scope="row">Documentation</th>
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
							<th scope="row">Software Engineering</th>
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
							<th scope="row">
								.NET (C#, C++) developer<br />for
								<HyperLink
									text="RISA Tech, Inc."
									href="https://risa.com/"
								/>
							</th>
							<td>1 year</td>
						</tr>
					</tbody>
				</table>
			</HomePageFeaturesContent>
		</FeaturesGalleryCard>
	</FeaturesGallery>
</template>
