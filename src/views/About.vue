<template>
  <mark-display
    :markdown="markdown"
    @title="setTitle"
    keyboard-ctrl
    auto-font-size
    supportPreview
  ></mark-display>
</template>
 
<script>
import MarkDisplay from "vue-mark-display";

const markdown = `
# Hello World

<!-- style: background: #4fc08d; color: white; -->

---

#This is Vue Mark Display

----
#This is Vue Mark Display`;

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