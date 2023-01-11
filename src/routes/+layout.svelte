<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';

const storeTab: Writable<string> = writable('a');

</script>

<AppShell>
	<svelte:fragment slot="header" >
		<AppBar >
			<svelte:fragment slot="lead" >
			<div>
				<TabGroup selected={storeTab}>
					<Tab value="a"><a href="/">Pagina Inicio</a></Tab>
					<Tab value="b"><a href="/shop">Shop</a></Tab>
					<Tab value="c"><a href="/movies">Peliculas</a></Tab>
				</TabGroup>
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
