<script>
	import GlobalStyle from '../misc/GlobalStyle.svelte';
	import Navbar from './Navbar.svelte';

	export let title = 'Blog';
</script>

<svelte:head>
	<title>{title} - Blog by Imran Molla</title>
</svelte:head>

<div class="layout">
	<GlobalStyle>
		<Navbar />
		<div class="nav-margin-fix" />
		<slot />
	</GlobalStyle>
</div>

<style>
	.nav-margin-fix {
		margin-top: 4rem;
	}
</style>
