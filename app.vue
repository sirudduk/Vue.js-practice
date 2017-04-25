<style lang='scss'>

</style>
<template lang='html'>
  <div>
    <input placeholder="what is focus in today" v-model="input" type="text">
    <button @click="add">ADD</button>
    <ul>
      <li :style="{ textDecoration: item.do ? 'line-through' : 'none' }" @click="toggleDo(item)" v-for="item in items">{{item.text}}</li>
    </ul>
    <p>TOTAL: {{total}}</p>
    <p>SUCCESS: {{total - isDone}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      items: []

    }
  },
  methods: {
    add() {
      this.items.push({text: this.input, do: false});
      this.input = '';
    },
    toggleDo(item) {
      item.do = !item.do
    }
  },
  computed: {
    total() {
      return this.items.length.toString();
    },
    isDone() {
      return this.items.filter(s => s.do).length;
    }
  }
}
</script>
