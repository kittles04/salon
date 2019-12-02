<template>
  <div id="app">
  <About/>
  <Navigation/>
  <BlogPage/>
  <VideoPage/>
  </div>
</template>

<script>
import About from './components/About.vue'
import Navigation from './components/Navigation.vue'
import BlogPage from './components/BlogPage.vue'
import VideoPage from './components/VideoPage.vue'

export default{
  name: 'App',
  components: {
    'About': About,
    'Navigation': Navigation,
    'BlogPage': BlogPage,
    'VideoPage': VideoPage
  }
}
</script>

<style>

</style>
