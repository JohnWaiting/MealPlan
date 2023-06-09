<script setup lang="ts">
import type {Recipe} from "@/stores/recipe";
import * as url from "url";

const props = defineProps<{
        recipe: Recipe
    }>()

</script>

<template>
    <div class="root" style="background: grey; position: relative; cursor: pointer; overflow: hidden" :title="recipe.name">
        <div class="card-background" style="width: 100%; height: 100%; position: absolute;">
            <div
                v-if="props.recipe.previewImageUrl"
                style="width: 100%; height: 100%; background-position: center"
                :style="{ 'background-image': `url(${props.recipe.previewImageUrl})` }"
            />
            <div v-else style="width: 100%; height: 100%; display: flex; padding: 16px; opacity: .2; ">
                <font-awesome-icon :icon="['fas', 'bowl-rice']" class="placeholder-icon" />
                <font-awesome-icon :icon="['fas', 'burger']" class="placeholder-icon" />
                <font-awesome-icon :icon="['fas', 'bowl-food']" class="placeholder-icon" />
            </div>
        </div>

        <div style="width: 100%; height: 100%; position: absolute; padding: 16px; display: flex; place-items: center">
            <span style="background: green; text-wrap: nowrap; text-overflow: ellipsis; overflow: hidden">{{ props.recipe.name }}</span>
        </div>
    </div>
</template>

<style scoped>

.placeholder-icon {
    width: 100%;
    height: 100%;
}

.root:hover .card-background {
    opacity: .6;
}

.root:hover {
    border: 2px solid lightgray;
    border-radius: 4px;
}
</style>
