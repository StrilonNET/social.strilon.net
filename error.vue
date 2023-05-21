<template>
    <NuxtLayout>
        <div>
            <h2 class="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
                Es ist folgender Fehler aufgetreten:
            </h2>

            <p class="mt-4 font-light tracking-tight text-gray-500 sm:text-xl dark:text-gray-400">
                {{ error.message }}
            </p>
        </div>
    </NuxtLayout>
</template>

<script setup>
const props = defineProps({
    error: Object
})
</script>