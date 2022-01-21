<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,

import { supabase } from './composables/supabase'

// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Pair Matcher',
  meta: [
    { name: 'description', content: 'A website to find another beginner programmer to fill the gap in the sample project team' },
  ],
})

const { user, session, error } = await supabase.auth.signIn({
  provider: 'google',
})
</script>

<template>
  <router-view />
</template>
