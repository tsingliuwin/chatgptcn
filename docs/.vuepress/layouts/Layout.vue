<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-content-bottom>
        <hr /> 
        <h4>关注我，学习大模型。</h4>
      <div class="content-footer">
        <img src="https://ai-studio-static-online.cdn.bcebos.com/e939f12ab7034a069fb4581dec21bb233473ed75fdd543d683982921ddb69167">
      </div>

      <div class="content-footer">
        <img src="/1v1.jpeg">
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.content-footer {
  text-align: center;
}
</style>