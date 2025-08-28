<script setup lang="ts">
const { data } = await useFetch("/api/products");
</script>

<template>
  <section>
    <div class="container mx-auto py-12">
      <pre>
            {{ data }}
        </pre
      >
    </div>
  </section>
</template>
