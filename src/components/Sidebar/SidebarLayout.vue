<template>
    <div class="min-h-screen bg-zinc-100 dark:bg-zinc-900 relative">
        <slot name="top" />
        <div class="flex w-full h-full max-h-screen z-10 relative">
            <slot name="sidebar" />

            <section class="flex-grow overflow-y-auto pb-12">
                <slot />
            </section>
        </div>
    </div>
</template>
