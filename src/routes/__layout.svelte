<script lang="ts">
	import Navbar from '../components/shared/Navbar.svelte';
	import '../styles/globals.css';
	import { fade } from 'svelte/transition';
	import navigationState from '../stores/navigationState';
	import PageLoader from '../components/PageLoader.svelte';
	export let title = 'Blog';
</script>

<svelte:window
	on:sveltekit:navigation-start={() => {
		$navigationState = 'loading';
		console.log('hi');
	}}
	on:sveltekit:navigation-end={() => {
		$navigationState = 'loaded';
	}}
/>
{#if $navigationState === 'loading'}
	<div out:fade={{ delay: 500 }}>
		<PageLoader />
	</div>
{/if}
<svelte:head>
	<title>{title} - Portfolio Project</title>
</svelte:head>

<div class="global-style">
	<div class="layout">
		<Navbar />
		<div class="nav-margin-fix" />
		<slot />
	</div>
</div>

<style>
	.nav-margin-fix {
		margin-top: 4rem;
	}
</style>
