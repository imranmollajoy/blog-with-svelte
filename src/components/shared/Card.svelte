<script>
	import heart from './icons/heart.svg';
	export let data;
	const { title, slugField, author, featuredImage, category } = data.fields;
	let imgUrl;
	$: if (featuredImage) {
		imgUrl = featuredImage.fields.file.url;
	} else {
		imgUrl = 'https://via.placeholder.com/800x400';
	}
</script>

<a href={'post/' + slugField || '/'} class="card-wrapper">
	<div class="card">
		{#if category}
			<div class="reactions">
				<span>{category}</span>
			</div>
		{/if}
		<img class="cover" src={imgUrl} alt={data.title} />
		<div class="content">
			<h4>{title || `Lorem ispum dolor emet`}</h4>
		</div>
	</div>
</a>

<style>
	.card-wrapper {
		display: inline-block;
		background: #fff;
		border-radius: 0.5rem;
		box-shadow: 0 0.5rem 1rem hsla(187, 85%, 18%, 0.1);
		cursor: pointer;
		transition: box-shadow 0.2s ease-in-out;
	}
	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		height: 100%;
	}
	.card-wrapper:hover {
		box-shadow: 0 0.5rem 1rem hsla(187, 85%, 18%, 0.4);
	}
	.card-wrapper:hover .cover {
		transform: scale(1.1);
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
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		background-color: var(--clr-secondary);
		border-radius: 0 0.6rem 0.6rem 0;
	}
	.content {
		padding: 1rem;
		z-index: 3;
	}
	.reactions img {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
	}
	.card h4 {
		margin: 0;
	}
	.card p {
		margin: 0;
		margin-top: 0.4rem;
	}
	.card a {
		display: inline-block;
		background-color: var(--clr-accent);
		padding: 0.2rem 1rem;
		margin-top: 1rem;
		color: var(--clr-white);
		border-radius: 0.4rem;
	}
</style>
