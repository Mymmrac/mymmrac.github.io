<template>
    <!-- TODO: WIP -->
    <div class="mx-auto w-fit rounded shadow bg-gradient-to-bl from-red-400 to-purple-400 p-4 mt-6">
        <div class="bg-white rounded p-2 shadow prose max-w-none">
            WIP: Will be done at some point :)
        </div>
    </div>
    <div class="container mx-auto p-4 my-8 rounded shadow bg-gradient-to-bl from-cyan-400 to-blue-400">
        <div class="bg-white rounded p-2 shadow prose max-w-none">
            <section>
                <h1>Artem Yadelskyi</h1>
                <h2>Golang Developer / Software Engineer</h2>
            </section>
            <div class="m-divider from-amber-200 to-yellow-400"></div>
            <section>
                <h2>Contact info</h2>
                <ul class="flex flex-wrap gap-2 list-inside">
                    <li>
                        <icon n="nf-mdi-email"/>
                        Email: <a href="mailto:mymmrac@gmail.com">mymmrac@gmail.com</a>
                    </li>
                    <li>
                        <icon n="nf-fa-github"/>
                        GitHub: <a href="https://github.com/mymmrac">@mymmrac</a>
                    </li>
                    <li>
                        <icon n="nf-fae-telegram"/>
                        Telegram: <a href="https://t.me/mymmrac">@mymmrac</a>
                    </li>
                    <li>
                        <icon n="nf-fa-twitter"/>
                        Twitter: <a href="https://twitter.com/mymmrac">@mymmrac</a>
                    </li>
                    <li>
                        <icon n="nf-fa-linkedin"/>
                        LinkedIn: <a href="https://www.linkedin.com/in/mymmrac">@mymmrac</a>
                    </li>
                </ul>
            </section>
            <div class="m-divider from-amber-200 to-yellow-400"></div>
            <section>
                <h2>Summery</h2>
                <p class="px-4 text-justify">
                    I am mainly a Go developer that really likes open-source and Linux. Creating new and exploring
                    existing software was always a great opportunity for me to learn something new. Tinkering, hacking,
                    and configuring are things that I enjoy doing with great passion. Also, for the pet projects, I
                    often needed some sort of UI, and in some cases, CLI or TUI wasn't enough, so I have some experience
                    working with web frameworks, too.
                </p>
            </section>
            <div class="m-divider from-amber-200 to-yellow-400"></div>
            <section>
                <h2>Skills</h2>
                <p>
                    ...
                </p>
            </section>
            <div class="m-divider from-amber-200 to-yellow-400"></div>
            <section>
                <h2>Experience</h2>
                <p>
                    ...
                </p>
            </section>
            <div class="m-divider from-amber-200 to-yellow-400"></div>
            <section>
                <h2>Education</h2>
                <p>
                    ...
                </p>
            </section>
            <div class="m-divider from-amber-200 to-yellow-400"></div>
            <section>
                <h2>Courses & Certification</h2>
                <p>
                    ...
                </p>
            </section>
            <div class="m-divider from-amber-200 to-yellow-400"></div>
            <section>
                <h2>Languages</h2>
                <p>
                    ...
                </p>
            </section>
            <div class="m-divider from-amber-200 to-yellow-400"></div>
            <section>
                <h2>Hobbies & Interests</h2>
                <p>
                    ...
                </p>
            </section>
        </div>
    </div>
    <div class="mx-auto w-fit rounded shadow bg-gradient-to-bl from-cyan-400 to-blue-400 p-4 mb-6">
        <div class="bg-white rounded p-2 shadow prose max-w-none">
            Last modified: {{ buildDate }}
        </div>
    </div>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon.vue"

const buildDate = BUILD_TIMESTAMP
</script>

<style scoped lang="scss">
.m-divider {
    @apply rounded shadow p-2 bg-gradient-to-bl;
}
</style>
