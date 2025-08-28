<script setup lang="ts">
const { data } = await useFetch("/api/products");

const products = computed(
  () =>
    data.value?.data?.products?.nodes.map((node) => {
      const images = node.images?.edges.map(({ node }) => node) || [];

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
      <div class="flex flex-wrap justify-center gap-6">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>
