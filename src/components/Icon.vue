<template>
    <span v-html="`&#x${icons.get(n)};`"></span>
</template>

<script setup lang="ts">
import icons from "@/icons-map"

defineProps<{
    n: string
}>()
</script>
