<template>
  <div class="custom-block danger">
    <p class="custom-block-title">本页面已过时！</p>
    <p>
      本页面为旧版本文档，已经过时并停止更新。你可以
      <a :href="latest">点击这里</a>
      查看最新文档。
    </p>
  </div>
</template>

<script lang="ts" setup>
const latest = '/v4/'
</script>
