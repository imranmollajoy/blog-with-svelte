<script>
	import Container from '../shared/Container.svelte';
</script>

<footer>
	<Container>
		<p>
			Made with <span class="heart">&hearts;</span> by
			<a href="https://imranmollajoy.github.io">Imran Molla Joy</a>
		</p>
		<p>Made with SvelteKit & Contentful</p>
	</Container>
</footer>

<style>
	* {
		margin: 0;
		text-align: center;
	}
	a {
		color: var(--clr-accent);
	}
</style>
