<script setup lang="ts">
import handshake from './assets/icons/handshake/icon.svg';
</script>

<template>
	<div :class="$style.Contact">
		<div :class="$style.StatusBox">
			<strong
				v-if="false"
				:class="$style.StatusBox_title"
			>
				Status:
			</strong>
			<img
				:class="$style.StatusBox_icon"
				:src="handshake"
				alt="icon: handshake"
			/>
			<span :class="$style.StatusBox_text">
				I'm available for contract work
			</span>
		</div>

		<form
			action="https://formspree.io/f/xwkdgjao"
			method="POST"
			:class="$style.ContactForm"
		>
			<label>
				<span>Your name:</span>
				<input
					required
					type="text"
					name="name"
					autocomplete="name"
				/>
			</label>
			<label>
				<span>Your email:</span>
				<input
					required
					type="email"
					name="email"
					autocomplete="email"
				/>
			</label>
			<label>
				<span>Your message:</span>
				<textarea
					required
					name="message"
				></textarea>
			</label>

			<button
				colspan="2"
				type="submit"
			>
				Send message
			</button>
		</form>
	</div>
</template>

<style module lang="less">
@import '@vitepress/theme/style/variables.less';
@import '@vitepress/theme/style/mixins.less';

.Contact {
	width: min(100%, 800rem);
	margin-left: auto;
	margin-right: auto;
}

.StatusBox {
	margin-bottom: @gap*4;
	width: fit-content;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: row;
	align-items: start;
}

.StatusBox_text {
	font-size: @size-l;
}

.StatusBox_icon {
	height: 2.5em;
	display: inline-block;
	vertical-align: middle;
	margin-right: @gap;
	flex: 0 0 auto;
}

.ContactForm {
	margin-left: auto;
	margin-right: auto;
	align-items: stretch;
	width: min(100%, 600rem);
	gap: @gap;

	label {
		width: 100%;

		display: flex;
		flex-direction: column;
		gap: @gap*0.25;
	}

	display: flex;
	flex-direction: column;

	input {
		max-width: 200rem;
	}

	textarea {
		height: 200rem;
	}

	button {
		.button();

		font-size: @size-l;

		margin-top: @gap*1.5;
		margin-left: auto;
		margin-right: auto;
		min-width: min(200rem, 100%);

		cursor: pointer;
	}
}
</style>
