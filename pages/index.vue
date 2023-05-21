<template>
    <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Du findest uns auf den folgenden Social-Media-Plattformen:
    </p>

    <div class="mt-12 text-center">
        <Card>
            <template v-slot:logo>
                <IconsDiscord />
            </template>
            <template v-slot:name>
                Discord
            </template>
            <template v-slot:tag>
                StrilonNET
            </template>
            <template v-slot:button>
                <Button link="https://discord.com/invite/BVyDCdNRHj" text="Server beitreten"></Button>
            </template>
        </Card>
        <Card>
            <template v-slot:logo>
                <IconsInstagram />
            </template>
            <template v-slot:name>
                Instagram
            </template>
            <template v-slot:tag>
                anglergamesde
            </template>
            <template v-slot:button>
                <Button link="https://www.instagram.com/anglergamesde/" text="Beiträge ansehen"></Button>
            </template>
        </Card>
        <Card>
            <template v-slot:logo>
                <IconsYouTube />
            </template>
            <template v-slot:name>
                YouTube
            </template>
            <template v-slot:tag>
                Anglergamesde
            </template>
            <template v-slot:button>
                <Button link="https://www.youtube.com/channel/UCMl1WMoelB4w0_IxFOthSiA" text="Videos ansehen"></Button>
            </template>
        </Card>
        <Card>
            <template v-slot:logo>
                <IconsTwitter />
            </template>
            <template v-slot:name>
                Twitter
            </template>
            <template v-slot:tag>
                AnglergamesDE
            </template>
            <template v-slot:button>
                <Button link="https://twitter.com/anglergamesde" text="Tweets ansehen"></Button>
            </template>
        </Card>
        <Card>
            <template v-slot:logo>
                <IconsTikTok />
            </template>
            <template v-slot:name>
                TikTok
            </template>
            <template v-slot:tag>
                anglergamesde
            </template>
            <template v-slot:button>
                <Button link="https://www.tiktok.com/@anglergames.de" text="Beiträge ansehen"></Button>
            </template>
        </Card>
    </div>
</template>