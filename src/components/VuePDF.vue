<template>
    <div class="app-header">
      <template v-if="isLoading"> Loading... </template>
  
      <template v-else>
        <span>
          <button class="pdf-button" :disabled="page <= 1" @click="page--">❮</button>
  
          {{ page }} / {{ pageCount }}
  
          <button class="pdf-button" :disabled="page >= pageCount" @click="page++">❯</button>
        </span>
      </template>
    </div>
  
    <div class="app-content">
      <vue-pdf-embed
        scale=5
        height=1000
        ref="pdfRef"
        :source="pdfSource"
        :page="page"
        @rendered="handleDocumentRender"
      />
    </div>

    <div class="app-header">
      <template v-if="isLoading"> Loading... </template>
  
      <template v-else>
        <span>
          <button class="pdf-button" :disabled="page <= 1" @click="page--">❮</button>
  
          {{ page }} / {{ pageCount }}
  
          <button class="pdf-button" :disabled="page >= pageCount" @click="page++"> ❯ </button>
        </span>
      </template>
    </div>
  </template>

  <style scoped>


.vue-pdf-embed > div {
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}

.app-header {
  padding: 16px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: var(--color-background-dark-hover);
;
  color: #ddd;
}

.pdf-button {
    background-color: var(--color-pink);
    border: 0;
    border-radius: 50px;
}

.app-content {
  padding: 24px 16px;
}

.right {
  float: right;
}


</style>

  
  <script lang="ts">
  import VuePdfEmbed from 'vue-pdf-embed'
  
  // OR THE FOLLOWING IMPORT FOR VUE 2
  // import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
  
  export default {
    components: {
      VuePdfEmbed
    },
    data() {
      return {
        isLoading: true,
        page: 1,
        pageCount: 1,
        pdfSource:
          'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'
      }
    },
    methods: {
      handleDocumentRender(args : String) {
        console.log(args)
        this.isLoading = false
        this.pageCount = this.$refs.pdfRef.pageCount
      }
    }
  }
  </script>
  