<script lang="ts">

	export let data;
	const { products } = data;
	import {
		// Utilities
		createDataTableStore,
		dataTableHandler,
		// Svelte Actions
		tableInteraction,
		tableA11y,
		Paginator,

	} from '@skeletonlabs/skeleton';


	const dataTableStore = createDataTableStore(
		// Pass your source data here:
		products,
		// Provide optional settings:
		{
			// The current search term.
			search: '',
			// The current sort key.
			sort: '',
			// Paginator component settings.
			pagination: { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] }
		}
	);

	// This automatically handles search, sort, etc when the model updates.
	dataTableStore.subscribe((model) => dataTableHandler(model));
	// Selects all objects with a position value of 1 or 2:
</script>

<main>
	<div class="table-container">
		<table class="table table-hover" use:tableInteraction role="grid" use:tableA11y>

	<thead on:click={(e) => { dataTableStore.sort(e) }} on:keypress>
		<div >
			<input bind:value={$dataTableStore.search} type="search" placeholder="Buscador.." />
		</div>

		<tr class="rounded-bl-container-token">
			<th><input type="checkbox" on:click={(e) => { dataTableStore.selectAll(e.currentTarget.checked) }} /></th>
			<th data-sort="title">Titulo</th>
			<th data-sort="description">Descripcion</th>

		</tr>
	</thead>
	<tbody>
		{#each $dataTableStore.filtered as row, rowIndex}
			<tr class:table-row-checked={row.dataTableChecked}
				aria-rowindex={rowIndex + 1}>

				<td><input type="checkbox" bind:checked={row.dataTableChecked} /></td>
				<td role="gridcell" aria-colindex={1} tabindex="0">{row.title}</td>
				<td role="gridcell" aria-colindex={2} tabindex="0">{row.description}</td>


				<!-- ... --->
			</tr>

		{/each}
		{#if $dataTableStore.pagination}<Paginator bind:settings={$dataTableStore.pagination} />{/if}
	</tbody>

		</table>
	</div>
</main>
