<template>
    <NuxtLink :to="link" class="px-4 py-2 rounded-lg text-sm font-bold focus:ring-4 focus:outline-none text-center text-white dark:text-gray-900 bg-gray-900 dark:bg-white hover:bg-gray-600 dark:hover:bg-gray-300 focus:ring-gray-900 dark:focus:ring-white">
        {{ text }}
    </NuxtLink>
</template>

<script>
export default {
    props: ['link', 'text']
}
</script>