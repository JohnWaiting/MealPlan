<script setup lang="ts">
import type {Recipe} from "@/stores/recipe";

const props = defineProps<{
        recipe: Recipe
    }>()

</script>

<template>
    <div style="background: grey; border: 1px solid green; position: relative">
        <div style="width: 100%; height: 100%; position: absolute; padding: 16px; display: flex; place-items: center">
            {{ props.recipe.name }}
        </div>

        <div v-if="!props.recipe.previewImageUrl" style="display: flex; width: 100%; height: 100%; position: absolute; padding: 16px; opacity: .2">
            <font-awesome-icon :icon="['fas', 'bowl-rice']" class="placeholder-icon" />
            <font-awesome-icon :icon="['fas', 'burger']" class="placeholder-icon" />
            <font-awesome-icon :icon="['fas', 'bowl-food']" class="placeholder-icon" />
        </div>
    </div>
</template>

<style scoped>

.placeholder-icon {
    width: 100%;
    height: 100%;
}
</style>
