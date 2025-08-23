<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { data } = await useFetch('/api/menu')

const menuItems = computed<NavigationMenuItem[]>(() => data.value?.data?.menu?.items.map(item => ({
    url: item.title.toLocaleLowerCase().replaceAll(' ', '-'),
    label: item.title,
})) || [])
</script>

<template>
    <UNavigationMenu :items="menuItems" class="w-full justify-center" />
</template>
