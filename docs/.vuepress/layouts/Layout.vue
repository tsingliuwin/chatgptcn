<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-content-bottom>
        <hr /> 
        <h4>关注我，学习大模型。</h4>
      <div class="content-footer">
        <img src="https://aistudio-llm-static-online.cdn.bcebos.com/2133/2694/20240628160b40caadd0924f97a18bebe0ad21ba66f82dd7edc96d4cf2b1a5063cc1679a2c?x-bce-process=image/resize,m_fill,w_1100,h_400">
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.content-footer {
  text-align: center;
}
</style>