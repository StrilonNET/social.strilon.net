<template>
    <NuxtLink :to="link" class="py-4 px-8 border shadow-lg rounded-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div class="flex flex-wrap gap-4 text-left">
            <div class="self-center p-2 min-w-[4rem] w-16 h-16 rounded-xl fill-gray-900 dark:fill-white bg-white dark:bg-gray-800">
                <slot name="logo"></slot>
            </div>

            <div class="flex-grow self-center">
                <h2 class="text-4xl font-semibold text-gray-900 dark:text-white">
                    <slot name="name"></slot>
                </h2>

                <p class="text-xl text-gray-500 dark:text-gray-400">
                    <slot name="tag"></slot>
                </p>
            </div>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: ['link']
}
</script>