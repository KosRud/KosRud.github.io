<script setup lang="ts">
import FeaturesGallery from './FeaturesGallery.vue';
import FeaturesGalleryCard from './FeaturesGalleryCard.vue';
import HomePageFeaturesContent from './PageHomeFeaturesContent.vue';
import HyperLink from '@theme/components/HyperLink.vue';
</script>

<template>
	<FeaturesGallery
		:dummies="8"
		:card-min-width="'300rem'"
	>
		<FeaturesGalleryCard
			name="Programming languages"
			:icon-url="'/_assets/icons/programming/icon.svg'"
		>
			<HomePageFeaturesContent>
				C#, HLSL, TypeScript, Javascript, Python, C++
			</HomePageFeaturesContent>
		</FeaturesGalleryCard>
		<FeaturesGalleryCard
			name="Communication"
			:icon-url="'/_assets/icons/communication/icon.svg'"
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
			:icon-url="'/_assets/icons/gears/icon.svg'"
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
			:icon-url="'/_assets/icons/education/icon.svg'"
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
			:icon-url="'/_assets/icons/job/icon.svg'"
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
