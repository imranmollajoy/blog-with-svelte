<script>
	import Card from '../shared/Card.svelte';
	export let title = 'Section';

	export let blogs = [];
</script>

<section>
	<h2>{title}</h2>
	<div class="blogs">
		{#each blogs as post (post.fields.slugField)}
			<Card data={post} />
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
</style>
