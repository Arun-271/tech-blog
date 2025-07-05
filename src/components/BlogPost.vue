<template>
  <div class="min-h-screen bg-gray-900 text-white px-4 py-6">
    <div class="max-w-3xl mx-auto">
      <!-- ▸ Header ------------------------------------------------------- -->
      <header class="flex items-center justify-between mb-10">
        <h1 class="text-xl font-semibold">Arun Jeyamari</h1>
        <a :href="githubUrl" class="text-blue-400 underline text-sm">
          Follow me on : GitHub
        </a>
      </header>

      <!-- ▸ Article ------------------------------------------------------ -->
      <article
        class="prose prose-invert max-w-none"
      >
        <!-- title + date are optional props -->
        <h2 class="!mb-2">{{ title }}</h2>
        <p v-if="date" class="text-sm text-gray-400 !mt-0">
          {{ formattedDate }}
        </p>

        <!--
          Render the actual post body.  
          ▸ If you pass compiled Vue components (from MD, MDX, etc.), use <component>.  
          ▸ Otherwise render a raw HTML string with v-html.
        -->
        <div class="blog-container" v-if="contentComponent">
            <component :is="contentComponent" />
        </div>
        <div class="prose prose-invert max-w-none" v-else v-html="html"></div>
      </article>

      <!-- ▸ Footer ------------------------------------------------------- -->
      <footer class="text-center mt-20">
        <p>© Arun Jeyamari {{ new Date().getFullYear() }}</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/* ---------- props ----------------------------------------------------- */
const props = defineProps<{
  title?: string
  date?: string | number | Date
  html?: string          // raw HTML string if you pre‑render markdown
  contentComponent?: any // compiled component if you use vite‑plugin‑md, MDX, etc.
}>()

/* ---------- data ------------------------------------------------------ */
const githubUrl = 'https://github.com/Arun-271'

/* ---------- helpers --------------------------------------------------- */
const formattedDate = computed(() =>
  props.date
    ? new Intl.DateTimeFormat(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(props.date))
    : ''
)
</script>
