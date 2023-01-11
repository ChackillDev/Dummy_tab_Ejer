<script lang="ts">

export let data;

const {producto} = data;

</script>

<main>

    <h2>{producto.title}</h2>
    <p>{producto.description}</p>
    <p>$ {producto.price.toFixed(2)}</p>

</main>
