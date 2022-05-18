<script>
  export default {
    async asyncData({ $content, params }) {
	const article = await $content('articles', params.slug).fetch()
      	return { article }
    }
  }
</script>

<template>
<div>
	<pre> {{ article }} </pre>
    
  </article>
  </div>
</template>
