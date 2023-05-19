<template>
    <NuxtLayout>
        <div>
            <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                Es ist ein Fehler aufgetreten:
            </p>

            <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
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