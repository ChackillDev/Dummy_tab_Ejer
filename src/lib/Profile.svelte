<script>

import {
	// Utilities
	createDataTableStore,
	dataTableHandler,
	// Svelte Actions
	tableInteraction,
	tableA11y,
	Paginator,

} from '@skeletonlabs/skeleton';




const sourceData = [
	{ position: 1, name: 'Hydrogen'},
	{ position: 2, name: 'Helium'},
	{ position: 3, name: 'Lithium'},
	{ position: 4, name: 'Beryllium'},
	{ position: 5, name: 'Boron'},
	{ position: 6, name: 'Carbon'},
	{ position: 7, name: 'Nitrogen'},
	{ position: 8, name: 'Oxygen'},
	{ position: 9, name: 'Fluorine'},
	{ position: 10, name: 'Neon' }
];


const dataTableStore = createDataTableStore(
	// Pass your source data here:
	sourceData,
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


<div class="table-container">
	<table class="table table-hover" use:tableInteraction role="grid" use:tableA11y>

<thead on:click={(e) => { dataTableStore.sort(e) }} on:keypress>
	<div >
		<input bind:value={$dataTableStore.search} type="search" placeholder="Buscador.." />
	</div>

	<tr class="rounded-bl-container-token">
		<th><input type="checkbox" on:click={(e) => { dataTableStore.selectAll(e.currentTarget.checked) }} /></th>
		<th data-sort="position">Position</th>
		<th data-sort="name">Name</th>

	</tr>
</thead>
<tbody>
	{#each $dataTableStore.filtered as row, rowIndex}
		<tr class:table-row-checked={row.dataTableChecked}
			aria-rowindex={rowIndex + 1}>

			<td><input type="checkbox" bind:checked={row.dataTableChecked} /></td>
			<td role="gridcell" aria-colindex={1} tabindex="0">{row.position}</td>
			<td role="gridcell" aria-colindex={2} tabindex="0">{row.name}</td>


			<!-- ... --->
		</tr>

	{/each}
	{#if $dataTableStore.pagination}<Paginator bind:settings={$dataTableStore.pagination} />{/if}
</tbody>

	</table>
</div>
