<script>
	import { base } from '$app/paths';
	export let data;
	const { title, slugField, author, featuredImage, category } = data.fields;
	let imgUrl;
	$: if (featuredImage) {
		imgUrl = featuredImage.fields.file.url;
	} else {
		imgUrl = 'https://via.placeholder.com/600x400';
	}
	export let noImg = false;
	export let long = false;
	export let autoH = false;
	export let absoluteBadge = true;
</script>

<a href={`${base}/post/${slugField}`} class="card-wrapper" class:long class:autoH>
	{#if category}
		<div class="reactions" class:absoluteBadge>
			<span>{category}</span>
		</div>
	{/if}
	<div class="card">
		{#if !noImg}
			<img class="cover" src={imgUrl} alt={data.title} />
		{/if}
		<div class="content">
			<h5>{title || `Lorem ispum dolor emet`}</h5>
		</div>
	</div>
</a>

<style>
	.card-wrapper {
		position: relative;

		display: inline-block;
		background: #fff;
		border-radius: 0.5rem;
		box-shadow: 0 0.5rem 1rem hsla(187, 85%, 18%, 0.1);
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}
	.long {
		grid-row: auto/span 3;
	}
	.autoH {
		/* height will be determined by inner content, not grid */
		grid-row: auto;
	}
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		height: 100%;
	}
	.card-wrapper:hover {
		box-shadow: 0 0rem 12rem 2rem hsla(187, 85%, 18%, 0.185);
		transform: scale(1.1);
		z-index: 4;
	}
	.card-wrapper:hover .cover {
		transform: scale(1.05);
	}
	.card .cover {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.2s ease-in-out;
		z-index: 1;
	}
	.reactions {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0.2rem 0.6rem;
		z-index: 2;
	}
	.absoluteBadge {
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--clr-secondary);
	}
	.content {
		padding: 1rem;
		z-index: 10;
	}
	h5 {
		margin: 0;
	}

	@media screen and (prefers-reduced-motion: reduce) {
		.card-wrapper {
			transition: none;
		}
		.card-wrapper:hover {
			transform: scale(1);
		}
	}
</style>
