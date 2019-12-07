<template>
  <div class="container">
    <div v-if="open">
      <input
        type="text"
        v-model="title"
        placeholder="Please enter a title..."
        autofocus
        @keyup.enter="addItem"
      />
    </div>
    <div v-else>
      <span @click="open = true">+</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      title: "",
      open: false
    };
  },
  methods: {
    addItem: function() {
      this.$props.add(this.title);
      this.title = "";
      this.open = false;
    }
  },
  props: {
    add: Function
  }
};
</script>

<style scoped>
.container {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  text-align: center;
}

input {
  display: block;
  width: 80%;
  height: 40px;
  padding: 8px 12px;
  margin: auto auto 10px;
  border-radius: 4px;
  border: 1px solid #d8d8d8;
}

span {
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 100%;
  border: none;
  background-color: #42b983;
  cursor: pointer;
  color: #156f46;
  font-size: 42px;
  text-align: center;
  line-height: 42px;
  box-shadow: 0 0 4px 1px #156f46;
}
</style>