<template>
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
                <p>
                    ...
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
