<template>
  <div class="mx-auto">
    <div>google</div>
  </div>
</template>

<script lang="ts" setup>
import { supabase } from '~/composables/supabase'

const signInWithGoogle = async() => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'google',
  })
}
</script>
