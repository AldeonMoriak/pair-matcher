<script setup lang="ts">
const { t, locale } = useI18n()

const router = useRouter()

</script>

<template>
  <nav class="text-xl mt-6 border-b border-b-gray-200 dark:border-b-gray-500" :class="locale === 'fa' ? 'text-right' : 'text-left'" :dir="locale === 'fa' ? 'rtl' : 'ltr'">
    <router-link
      class="icon-btn mx-5 border-b-2"
      :class="router.currentRoute.value.path === '/' ? 'border-b-orange-400 dark:text-white text-black' : 'border-b-transparent hover:border-b-gray-200'"
      to="/"
    >
      {{ t('navigation.profile') }}
    </router-link>
    <router-link
      class="icon-btn mx-5 border-b-2"
      :class="router.currentRoute.value.path === '/allProjects' ? 'border-b-orange-400 dark:text-white text-black' : 'border-b-transparent hover:border-b-gray-200'"
      to="/allProjects"
    >
      {{ t('navigation.projects') }}
    </router-link>
    <router-link
      class="icon-btn mx-5 border-b-2"
      :class="router.currentRoute.value.path === '/myProjects' ? 'border-b-orange-400 dark:text-white text-black' : 'border-b-transparent hover:border-b-gray-200'"
      to="/myProjects"
    >
      {{ t('navigation.myprojects') }}
    </router-link>
  </nav>
</template>
