<script>
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

</script>

<AppShell>
	<svelte:fragment slot="header" >
		<AppBar >
			<svelte:fragment slot="lead" >
			<div>
				<a href="/">Pagina Inicio</a>
				<a href="/shop">Shop</a>
				<a href="/movies">Peliculas</a>
				<h2>Ejercicio Via API DummyJson</h2>
			</div>
			</svelte:fragment>
			<svelte:fragment slot="trail" >



				<LightSwitch />
			</svelte:fragment>
		</AppBar>

	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<svelte:fragment slot="sidebarRight"></svelte:fragment>
	<svelte:fragment slot="pageHeader"></svelte:fragment>
	<!-- Router Slot -->

	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"></svelte:fragment>
	<svelte:fragment slot="footer"></svelte:fragment>
</AppShell>
