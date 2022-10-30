<template>
  <div>
    <h1>学生姓名{{ name }}</h1>
  </div>
</template>
  
  <script>
export default {
  name: "Student",
  data() {
    return {
      name: "lisa",
    };
  },
};
</script>
  
  <style>
h1 {
  color: "green";
}
</style>