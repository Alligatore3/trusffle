<script setup lang="ts">
const { data } = await useFetch("/api/products");

const products = computed(
  () =>
    data.value?.data?.products?.nodes.map((node) => {
      const images = node.images?.edges.map(({ node }) => ({
        id: node?.id,
        url: node?.url,
      }));

      return {
        ...node,
        images,
      };
    }) || []
);
</script>

<template>
  <section>
    <div class="container mx-auto py-12">
      <pre>
            {{ products }}
        </pre
      >
    </div>
  </section>
</template>
