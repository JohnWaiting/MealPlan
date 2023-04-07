import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/meal-plan",
            name: "Meal plan",
            component: () => import("../views/MealPlanView.vue")
        },
        {
            path: "/recipes",
            name: "Recipes",
            component: () => import("../views/RecipesView.vue")
        }
    ]
})

export default router
