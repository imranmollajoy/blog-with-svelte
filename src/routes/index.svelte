<script context="module">
	import Section from '../components/misc/Section.svelte';
	import Container from '../components/shared/Container.svelte';
	import Layout from '../components/shared/Layout.svelte';

	export async function load({ fetch }) {
		const [{ blogs }] = await Promise.all([fetch('/data.json').then((r) => r.json())]);
		return {
			props: {
				blogs
			}
		};
	}
</script>

<script>
	export let blogs;
</script>

<Layout title="Home">
	<Container fluid bgColor="var(--clr-secondary)">
		<Section title="Latest" blogs={blogs.items} />
	</Container>
</Layout>
