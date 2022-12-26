<script>
	/** @type {string} */
	let id;
	/** @type {string} */
	let name;
	/** @type {string} */
	let lastname;
	/** @type {string} */
	let direction;
	/** @type {string} */
	let country;

	/** @type {any[]}
	 */
	let sentData = []; // Debería usar localStorage en vez de este array

	const enviar = () => {
		if (!id) {
			console.log('enviar datos...', name, lastname);
			const lastId = sentData.length > 0 ? sentData[sentData.length - 1].id : 0;
			const user = {
				id: lastId + 1,
				name: name,
				lastname: lastname,
				direction: direction,
        country: country

			};
			sentData = [...sentData, user];
			console.log('user added', sentData);
		}
	};
	$: users = sentData;
</script>

<div class="hidden sm:block" aria-hidden="true">
	<div class="py-5">
		<div class="border-t border-gray-200" />
	</div>
</div>

<div class="mt-10 sm:mt-0">
	<div class="md:grid md:grid-cols-3 md:gap-6">
		<div class="md:col-span-1">
			<div class="px-4 sm:px-0">
				<h3 class="text-lg font-medium leading-6 text-gray-900">Informaciòn Personal</h3>
			</div>
		</div>
		<div class="mt-5 md:col-span-2 md:mt-0">
			<div class="overflow-hidden shadow sm:rounded-md">
				<div class="bg-white px-4 py-5 sm:p-6">
					<div class="grid grid-cols-6 gap-6">
						<div class="col-span-6 sm:col-span-3">
							<label for="first-name" class="block text-sm font-medium text-gray-700">Nombre</label>
							<input
								type="text"
								name="first-name"
								id="first-name"
								bind:value={name}
								autocomplete="given-name"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-3">
							<label for="last-name" class="block text-sm font-medium text-gray-700">Apellido</label
							>
							<input
								type="text"
								name="last-name"
								bind:value={lastname}
								id="last-name"
								autocomplete="family-name"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-3">
							<label for="country" class="block text-sm font-medium text-gray-700">Pais</label>
							<select
								id="country"
								name="country"
                bind:value={country}
								autocomplete="country-name"
								class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							>
								<option>Chile</option>

							</select>
						</div>

						<div class="col-span-6">
							<label for="street-address" class="block text-sm font-medium text-gray-700"
								>Dirección</label
							>
							<input
								type="text"
								name="street-address"
								bind:value={direction}
								id="street-address"
								autocomplete="street-address"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					</div>
				</div>
				<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
					<button
						type="submit"
						on:click={enviar}
						class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>Guardar</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="table-container">
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Id</th>
				<th>Nombre</th>
				<th>Apellido</th>
        <th>Dirección</th>
        <th>Pais </th>

			</tr>
		</thead>
		<tbody>
			{#each users as user, i}
				<tr>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.lastname}</td>
          <td>{user.direction}</td>
          <td>{user.country}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
