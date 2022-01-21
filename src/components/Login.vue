<template>
  <div />
</template>

<script setup lang="ts">import { supabase } from '~/composables/supabase'

const signInWithGoogle = async() => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'google',
  })
}
</script>
