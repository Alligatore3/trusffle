<script setup lang="ts">
const { data } = await useFetch('/api/menu')
</script>

<template>
    <pre>{{ data }}</pre>
</template>
