<script context="module">
	import Container from '../../components/shared/Container.svelte';
	import Section from '../..//components/misc/Section.svelte';
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
	function getBlogs() {
		return blogs.items.filter((blog) => blog.fields?.tags?.includes(params.tag));
	}
	$: console.log(getBlogs());
</script>

<Container>
	<Section title={`Tag: ${params.tag}`} blogs={getBlogs()} />
</Container>
