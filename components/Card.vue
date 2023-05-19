<template>
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-6 p-2">
        <div class="flex flex-row items-center gap-4">
            <div class="w-8 h-8 fill-gray-900 dark:fill-white rounded-lg m-2">
                <slot name="logo"></slot>
            </div>
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                <slot name="name"></slot>
            </h5>
            <span class="grow text-sm text-gray-500 dark:text-gray-400">
                <slot name="tag"></slot>
            </span>
            <slot name="button"></slot>
        </div>
    </div>
</template>