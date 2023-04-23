<script setup lang="ts">
import {computed, onMounted} from "vue";
import {useRecipeStore} from "@/stores/recipe";
import RecipeCard from "@/views/components/RecipeCard.vue";

const recipeStore = useRecipeStore();

const all = computed(() => recipeStore.all);

onMounted(() => {
    recipeStore.loadRecipes();
})
</script>

<template>
    <div style="width: 80%; height: 80%; display: grid; grid-template-columns: auto 1fr">
        <div>
            <div v-for="recipe in all" :key="recipe.name">
                <RecipeCard
                    :recipe="recipe"
                    style="width: 350px; height: 100px"
                />
            </div>
        </div>

        <div>
           Recipe Preview
        </div>
    </div>
</template>
