<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BlogPost from '@/components/BlogPost.vue';
import NotFound from './NotFound.vue';

// Map slugs to markdown files and metadata
const blogMap = {
  'unary-operator-java': {
    title: 'Unary Operators in Java',
    date: '2025-06-23',
    content: () => import('@/blog-content/unary-operators-java.md'),
  },
  'database-working': {
    title: 'Database Working',
    date: '2025-07-05',
    content: () => import('@/blog-content/database-working.md'),
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
  <div class="min-h-screen bg-[#181818] text-white px-4 py-6">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <RouterLink
          to="/"
          class="flex items-center gap-2 px-3 py-1 rounded bg-[#181818] text-blue-300 hover:bg-gray-700 hover:text-blue-200 transition-colors text-sm shadow"
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
       <NotFound />
      </template>
    </div>
  </div>
</template>
