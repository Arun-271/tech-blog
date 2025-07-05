<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BlogPost from '@/components/BlogPost.vue';


// Map slugs to markdown files and metadata
const blogMap = {
  'test': {
    title: 'Test Blog',
    date: '2025-06-23',
    content: () => import('@/blog-content/Test.md'),
  },
};

const route = useRoute();
const slug = computed(() => route.params.slug as string);

const blog = computed(() => {
  return blogMap[slug.value as keyof typeof blogMap];
});

const ContentComponent = computed(() => {
  if (blog.value) {
    return defineAsyncComponent(blog.value.content);
  }
  return null;
});

import { defineAsyncComponent } from 'vue';
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white px-4 py-6">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <RouterLink
          to="/"
          class="flex items-center gap-2 px-3 py-1 rounded bg-gray-800 text-blue-300 hover:bg-gray-700 hover:text-blue-200 transition-colors text-sm shadow"
        >
          <span class="text-lg">←</span> Back to Home
        </RouterLink>
      </div>
      <template v-if="blog">
        <BlogPost
          :title="blog.title"
          :date="blog.date"
          :content-component="ContentComponent"
        />
      </template>
    <template v-else>
      <section class="dark:bg-[#181818]">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p class="mb-4 text-xl tracking-tight font-semibold text-gray-900 md:text-1xl dark:text-white">Sorry I dont have blog on the requested Topic 😂.</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Contact me on @arunjeyamari57@protonmail.com We can have chat about it </p>
            <a href="/" class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
          </div>
        </div>
      </section>
    </template>
    </div>
  </div>
</template>
