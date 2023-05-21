<template>
    <h2 class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Du findest uns auf den folgenden Social-Media-Plattformen:
    </h2>

    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 mt-8 text-center">
        <Card link="https://discord.com/invite/BVyDCdNRHj">
            <template v-slot:logo>
                <IconsDiscord />
            </template>

            <template v-slot:name>
                Discord
            </template>

            <template v-slot:tag>
                StrilonNET
            </template>
        </Card>

        <Card  link="https://www.instagram.com/anglergamesde/">
            <template v-slot:logo>
                <IconsInstagram />
            </template>

            <template v-slot:name>
                Instagram
            </template>

            <template v-slot:tag>
                anglergamesde
            </template>
        </Card>

        <Card link="https://www.youtube.com/channel/UCMl1WMoelB4w0_IxFOthSiA">
            <template v-slot:logo>
                <IconsYouTube />
            </template>

            <template v-slot:name>
                YouTube
            </template>

            <template v-slot:tag>
                Anglergamesde
            </template>
        </Card>

        <Card link="https://twitter.com/anglergamesde">
            <template v-slot:logo>
                <IconsTwitter />
            </template>

            <template v-slot:name>
                Twitter
            </template>

            <template v-slot:tag>
                AnglergamesDE
            </template>
        </Card>

        <Card link="https://www.tiktok.com/@anglergames.de">
            <template v-slot:logo>
                <IconsTikTok />
            </template>

            <template v-slot:name>
                TikTok
            </template>

            <template v-slot:tag>
                anglergamesde
            </template>
        </Card>
    </div>
</template>