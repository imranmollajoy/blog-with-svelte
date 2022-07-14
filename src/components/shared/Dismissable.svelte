<script>
	let dismiss;
	function Dismiss() {
		dismiss = true;
	}
</script>

{#if !dismiss}
	<div class="dismissable" on:click={Dismiss}>
		<slot />
		<div class="dismissable-icon">X</div>
	</div>
{/if}

<style>
	.dismissable {
		position: relative;
		cursor: pointer;
		text-transform: uppercase;
	}
	.dismissable:hover {
		opacity: 0.5;
	}
	.dismissable:hover .dismissable-icon {
		opacity: 1;
	}
	.dismissable-icon {
		position: absolute;
		top: 0;
		right: 0;
		width: 20px;
		height: 20px;
	}
</style>
