<template>
  <div class="min-h-screen bg-[#181818] text-white px-4 py-6">
    <div class="max-w-3xl mx-auto">
      <div class="flex items-center justify-between mb-10">
        <h1 class="text-xl font-semibold">Arun Jeyamari</h1>
        <a href="https://github.com/Arun-271" target="_blank" class="text-blue-400 underline text-sm">Follow me on : Github</a>
      </div>
      <h2 class="text-lg">Full Stack Software Developer and Human Being.</h2>
      <div class="mt-8">
        <h3 class="text-lg font-medium mb-2">Recent Blogs:</h3>
        <ul class="list-disc ml-6 space-y-1">
          <li>
            <RouterLink :to="{ name: 'blog', params: { slug: 'unary-operator-java' } }" class="text-blue-300 hover:underline">
              Unary Operators in Java.
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'blog', params: { slug: 'database-working' } }" class="text-blue-300 hover:underline">
              Database Working.
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
