<template>
  <div>
    <h1>学校名{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "大学",
    };
  },
};
</script>

<style>
h1 {
  color: "pink";
}
</style>