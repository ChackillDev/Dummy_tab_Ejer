<script>
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<h1>Mantenedor de usuarios</h1>
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
