import { ref, computed } from "vue"
import { defineStore } from "pinia"

export interface Recipe {
    name: string;
    previewImageUrl: string;
}

class RecipeService {
    loadAll(): Promise<Recipe[]> {
        return Promise.resolve([
            { name: "recipe1", previewImageUrl: "recipe1.jpg" },
            { name: "recipe2", previewImageUrl: "recipe2.jpg" },
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
