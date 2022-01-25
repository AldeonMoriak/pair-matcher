<template>
  <div>
    <div class="h-10" />
    <div id="search">
      <input type="text" value :placeholder="t('all-projects.search')">
    </div>
  </div>
</template>

<script lang="ts" setup>

const { t } = useI18n()

</script>

<route lang="yaml">
meta:
  requiresAuthorize: false
  layout: default
</route>
