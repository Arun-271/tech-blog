<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

  <template>
  <div>
    <RouterView v-slot="{ Component, route }">
      <template v-if="route.name === 'blog'">
        <component :is="Component" />
      </template>
      <template v-else>
        <div class="min-h-screen bg-gray-900 text-white px-4 py-6">
          <div class="max-w-3xl mx-auto">
            <div class="flex items-center justify-between mb-10">
              <h1 class="text-xl font-semibold">Arun Jeyamari</h1>
              <a href="https://github.com/Arun-271" class="text-blue-400 underline text-sm">Follow me on : Github</a>
            </div>
            <h2 class="text-lg">Full Stack Software Developer and Human Being.</h2>
            <div class="mt-8">
              <h3 class="text-lg font-medium mb-2">Recent Blogs:</h3>
              <ol class="list-decimal ml-6 space-y-1">
                <li>
                  <RouterLink :to="{ name: 'blog', params: { slug: 'test' } }" class="text-blue-300 hover:underline">
                    Test Blog
                  </RouterLink>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </template>
    </RouterView>
  </div>
</template>






