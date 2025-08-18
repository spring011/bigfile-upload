<template>
  <div class="container">
        <div class="m-search">
          <div class="buttons flex flex-row items-center justify-between gap-x-10px">
            <n-space>
              <n-button
                size="large"
                color="#1EA5FC"
                :focusable="false"
                text-color="#fff"
                @click="upload"
              >
                上传
              </n-button>
            </n-space>
          </div>
        </div>
    <file-uploader  ref="fileUploader"></file-uploader>
  </div>

</template>
<script lang="ts" setup>

import { ref } from 'vue';
import FileUploader from './FileUploader.vue';
import { NButton, NSpace,  } from 'naive-ui';

const fileUploader = ref();

function upload() {
  fileUploader.value.openUploader();
}

</script>
<style lang="scss" scoped>

.container {
  padding: 16px;
  width: 100%;
  height: 100%;
  max-width: none;
}
.buttons {
  margin-bottom: 10px;
}
</style>
