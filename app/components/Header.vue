<script setup lang="ts">
const { data } = await useFetch("/api/menu");

const menuItems = computed(
  () =>
    data.value?.data?.menu?.items.map((item) => ({
      url: item.title.toLocaleLowerCase().replaceAll(" ", "-"),
      label: item.title,
    })) || []
);
</script>

<template>
  <ul class="w-full justify-center">
    <li v-for="{ url, label } in menuItems">
      {{ label }}
    </li>
  </ul>
</template>
