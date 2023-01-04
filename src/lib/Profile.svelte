<script>

import {
	// Utilities
	createDataTableStore,
	dataTableHandler,
	// Svelte Actions
	tableInteraction,
	tableA11y,
	Paginator
} from '@skeletonlabs/skeleton';




const sourceData = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
	{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
	{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
	{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
	{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
	{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
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
	<input bind:value={$dataTableStore.search} type="search" placeholder="Buscador.." />
	<tr>
		<th><input type="checkbox" on:click={(e) => { dataTableStore.selectAll(e.currentTarget.checked) }} /></th>
		<th data-sort="position">Position</th>
		<th data-sort="name">Name</th>
		<th data-sort="symbol">Symbol</th><!-- ... --->
	</tr>
</thead>
<tbody>
	{#each $dataTableStore.filtered as row, rowIndex}
		<tr class:table-row-checked={row.dataTableChecked}
			aria-rowindex={rowIndex + 1}>

			<td><input type="checkbox" bind:checked={row.dataTableChecked} /></td>
			<td role="gridcell" aria-colindex={1} tabindex="0">{row.position}</td>
			<td role="gridcell" aria-colindex={2} tabindex="0">{row.name}</td>
			<td role="gridcell" aria-colindex={3} tabindex="0">{row.symbol}</td>

			<!-- ... --->
		</tr>

	{/each}
	{#if $dataTableStore.pagination}<Paginator bind:settings={$dataTableStore.pagination} />{/if}
</tbody>

	</table>
</div>
