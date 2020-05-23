<template>
  <mark-display
    :markdown="markdown"
    @title="setTitle"
    keyboard-ctrl
    
  ></mark-display>
</template>
 
<script>
import MarkDisplay from "vue-mark-display";

import markdown from './markdown.js'
export default {
  components: { MarkDisplay },
  data() {
    return { markdown };
  },
  methods: {
    setTitle({ title }) {
      document.title = title;
    }
  }
};
</script>
 
<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>