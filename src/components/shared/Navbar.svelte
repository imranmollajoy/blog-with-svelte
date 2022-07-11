<script>
</script>

<nav>
	<div class="nav-wrapper">
		<ul>
			<li><a class="active" href="/">Home</a></li>
			<li><a href="#news">News</a></li>
			<li><a href="#contact">Contact</a></li>
			<li><a href="#about">About</a></li>
		</ul>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		width: 100%;
		background-color: hsla(0, 0%, 100%, 0.8);
		box-shadow: 0 0.1rem 0.11rem hsla(187, 85%, 18%, 0.1);
		z-index: 991;
		/* bg blur */
		backdrop-filter: blur(10px);
	}
	.nav-wrapper {
		max-width: 1024px;
		margin: 0 auto;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	li {
		float: left;
	}

	li a {
		display: block;
		color: var(--clr-black);
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	li a:hover:not(.active) {
		background-color: var(--clr-secondary);
	}

	.active {
		background-color: var(--clr-accent);
		color: var(--clr-white);
	}
</style>
