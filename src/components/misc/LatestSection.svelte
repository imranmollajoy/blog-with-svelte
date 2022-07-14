<script>
	import Card from '../shared/Card.svelte';
	export let title = 'Section';
	export let blogs = [];
	export let moreLink = '/latest';

	let firstPost = blogs.slice(0, 1);
	let rest = blogs.slice(1);
</script>

<section>
	<div class="top">
		<h3>{title}</h3>
		<a href={moreLink}>More</a>
	</div>
	<div class="blogs">
		{#each firstPost as post (post.fields.slugField)}
			<Card data={post} long />
		{/each}
		{#each rest as post (post.fields.slugField)}
			<Card data={post} noImg absoluteBadge={false} />
		{/each}
	</div>
</section>

<style>
	section {
		margin-top: 2rem;
		padding: 1rem 0;
	}
	.blogs {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
		grid-gap: 1rem;
	}
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}
	.top a {
		background-color: var(--clr-accent);
		color: var(--clr-white);
		padding: 0.2rem 1rem;
		border-radius: 0.4rem;
	}
	.top h3 {
		margin: 0;
	}
</style>
