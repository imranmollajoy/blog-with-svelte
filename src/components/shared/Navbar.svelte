<script>
	let toggle = false;

	function Toggle() {
		toggle = !toggle;
	}
	import Menu from './icons/Menu.svg';
</script>

<nav>
	<div class="nav-wrapper">
		<div>
			<a href="/"><h3>blog</h3></a>
		</div>
		<div class="nav-list">
			<ul>
				<li><a class="active" href="/">Home</a></li>
				<li><a href="#news">News</a></li>
				<li><a href="#contact">Contact</a></li>
				<li><a href="#about">About</a></li>
			</ul>
		</div>
		<div class="breadcumb">
			<button on:click={Toggle}>
				<img src={Menu} alt="" />
			</button>
		</div>
	</div>
	<div class:toggle class="mobile-nav-list">
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
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	img {
		width: 2rem;
		height: 2rem;
	}
	h3 {
		margin: 0;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	.nav-list li {
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
	.breadcumb {
		display: none;
	}
	.mobile-nav-list {
		display: none;
	}
	/* media for movile */
	@media screen and (max-width: 550px) {
		.nav-list {
			display: none;
		}
		.toggle {
			display: block;
			z-index: 2;
			background: var(--clr-white);
		}

		.breadcumb {
			display: block;
		}
		li a {
			text-align: center;
			padding: 0.4rem;
			text-decoration: none;
		}
	}

	@media screen and (max-width: 1024px) {
		.nav-wrapper {
			padding: 0 1rem;
		}
	}
</style>
