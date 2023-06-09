import { ref, computed } from "vue"
import { defineStore } from "pinia"

export interface Recipe {
    name: string;
    previewImageUrl: string | null;
}

class RecipeService {
    loadAll(): Promise<Recipe[]> {
        return Promise.resolve([
            { name: "recipe1", previewImageUrl: null },
            { name: "recipe2", previewImageUrl: null },
            { name: "recipe with a very very very veryvery very very  very very very very very very very very very very very very very very very very very very very very very very very very long name", previewImageUrl: "test-dish-preview.jpg" },
        ]);
    }
}

export const useRecipeStore =
    defineStore("recipe", () => {
        const service = new RecipeService();
        const all = ref([] as Recipe[])

        async function loadRecipes() {
            all.value = await service.loadAll();
        }

        return { all, loadRecipes }
    })
