<template>
    <section class="min-w-screen min-h-screen bg-white dark:bg-gray-900 antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div class="max-w-2xl mx-auto text-center">
                <h2
                    class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    StrilonNET
                </h2>

                <slot></slot>

                <h2
                    class="text-md font-light dark:font-normal tracking-tight text-gray-800 dark:text-gray-400">
                    &copy; 2023 StrilonNET
                </h2>
            </div>
        </div>
    </section>
</template>