<template>
    <div class="w-full py-4 px-8 my-20 border shadow-lg rounded-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div class="flex justify-end -mt-16">
            <div class="w-20 h-20 p-3 rounded-xl fill-gray-900 dark:fill-white bg-white dark:bg-gray-800">
                <slot name="logo"></slot>
            </div>
        </div>
        <div>
            <h2 class="text-4xl font-semibold text-gray-900 dark:text-white">
                <slot name="name"></slot>
            </h2>
            <p class="mt-2 text-xl text-gray-500 dark:text-gray-400">
                <slot name="tag"></slot>
            </p>
        </div>
        <div class="mt-4 md:mt-1 flex justify-end">
            <slot name="button"></slot>
        </div>
    </div>
</template>