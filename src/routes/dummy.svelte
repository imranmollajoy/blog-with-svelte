<script context="module">
	import Section from '../components/misc/Section.svelte';
	import Container from '../components/shared/Container.svelte';

	export async function load({ fetch }) {
		const [{ blogs }] = await Promise.all([fetch('./data.json').then((r) => r.json())]);
		return {
			props: {
				blogs
			}
		};
	}
</script>

<script>
	import { paginate } from 'svelte-paginate';
	import PageNav from '../components/shared/PageNav.svelte';
	export let blogs;
	const items = blogs.items;
	let currentPage = 1;
	let pageSize = 2;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<ul class="items">
	{#each paginatedItems as item}
		<li class="item">
			{item}
		</li>
	{/each}
</ul>

<PageNav
	totalItems={items.length}
	{pageSize}
	{currentPage}
	limit={1}
	showStepOptions={true}
	on:setPage={(e) => (currentPage = e.detail.page)}
/>
