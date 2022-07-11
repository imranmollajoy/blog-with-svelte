<script>
	export let fluid = false;
	export let bgColor = 'var(--clr-white)';
</script>

<div
	class="container"
	class:fluid
	style={`
	background-color: ${bgColor};
`}
>
	<div class="children">
		<slot />
	</div>
</div>

<style>
	.container {
		max-width: 1024px;
		margin: 0 auto;
		padding: 1rem;
	}
	.children {
		max-width: 1024px;
		margin: 0 auto;
	}
	.fluid {
		max-width: 100%;
	}
</style>
