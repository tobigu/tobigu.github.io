<template>
  <div class="m-12 space-y-8">
    <div class="space-y-2">
    	<h1 class="text-3xl font-thin">Toby's general software development blog</h1>
    	<p>Here things are written. The value of the things is questionable.</p>
    </div>
    <ul>
      <li v-for="article of articles" :key="article.slug" class="p-12 text-5xl text-white font-thin my-3" v-bind:class="article.bg">
        <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }">
          <div>
            <h2>{{ article.title }}</h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'slug', 'bg'])
        .sortBy('createdAt', 'desc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>