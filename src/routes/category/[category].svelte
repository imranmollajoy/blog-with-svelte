<script context="module">
	import Container from '../../components/shared/Container.svelte';
	import PageNav from '../../components/shared/PageNav.svelte';
	import Card from '../../components/shared/Card.svelte';

	import { paginate } from 'svelte-paginate';

	export async function load({ fetch, params }) {
		const [{ blogs }] = await Promise.all([fetch('/data.json').then((r) => r.json())]);
		return {
			props: {
				blogs,
				params
			}
		};
	}
</script>

<script>
	export let blogs;
	export let params;
	let items = [];
	$: items = blogs.items.filter((blog) => blog.fields?.category === params.category);

	let currentPage = 1;
	let pageSize = 12;
	let paginatedItems;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<Container>
	<section>
		<div class="top">
			<h3>{params.category}</h3>
			<PageNav
				totalItems={items.length}
				{pageSize}
				{currentPage}
				limit={1}
				showStepOptions={true}
				on:setPage={(e) => (currentPage = e.detail.page)}
			/>
		</div>
		<div class="blogs">
			{#each paginatedItems as post (post.fields.slugField)}
				<Card data={post} />
			{/each}
		</div>
	</section>
</Container>

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

	.top h3 {
		margin: 0;
	}
</style>
