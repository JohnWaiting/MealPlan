<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/meal-plan">Meal plan</RouterLink>
                <RouterLink to="/recipes">Recipes</RouterLink>
            </nav>
        </div>
    </header>

    <div style="display: flex; align-items: center; place-content: center">
        <RouterView />
    </div>
</template>

<style scoped>
header {
    line-height: 1.5;
}

nav {
    width: 100%;
    text-align: center;
    font-size: 1rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-left: 1px solid var(--color-border);

}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-content: center;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
