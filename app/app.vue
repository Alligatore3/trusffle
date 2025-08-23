<script setup lang="ts">
const { data } = await useFetch('/api/products')
</script>

<template>
    <pre>{{ data }}</pre>
</template>
