<template>
    <aside class="menu"></aside>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style>
    .menu {
        grid-area: menu;
        background: #333333;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>
