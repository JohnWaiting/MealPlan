<script setup lang="ts">
import type {Recipe} from "@/stores/recipe";

const props = defineProps<{
        recipe: Recipe
    }>()
</script>

<template>
    <div>
        {{ props.recipe.name }}
    </div>
</template>
