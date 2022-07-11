<script context="module">
	export async function load({ fetch, params }) {
		const url = `/post/${params.slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			const { blog } = await res.json();

			return {
				props: {
					blog: blog.items[0]
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import RichContent from '../../components/shared/RichContent.svelte';
	import Container from '../../components/shared/Container.svelte';
	import Layout from '../../components/shared/Layout.svelte';

	let tags = ['Featured', 'Nice', 'Technology'];
	export let blog;

	let { title, blogBody, featuredImage } = blog.fields;
	let imgUrl;

	$: if (featuredImage) {
		imgUrl = featuredImage.fields.file.url;
	} else {
		imgUrl = 'https://via.placeholder.com/800x400';
	}
</script>

<Layout title={'Lorem ipsum dolor sit...'}>
	<Container>
		<h2>{title}</h2>
		<img src={imgUrl} alt="" />
		<div class="body">
			<RichContent document={blogBody} />
		</div>
	</Container>
</Layout>

<style>
	.body {
		text-align: justify;
	}
	h2 {
		margin-top: 0;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-bottom: 0.6rem;
		gap: 1rem;
	}
	.tags a {
		background-color: var(--clr-accent);
		padding: 0.2rem 0.6rem;
		border-radius: 0.6rem;
		color: var(--clr-black);
	}
</style>
