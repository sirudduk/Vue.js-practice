


<style lang='scss'>

</style>
<template lang='html'>
  <div>
    <input type="text" v-model="input">
    <button @click="addTodo">add todos</button>
    <ul>
      <li @click='toggleTodo(todo)' v-for="todo in todos" v-text="todo.text" :style="{textDecoration: todo.isDone ? 'line-through' : 'none' }"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.input });
      this.input = '';
    },
    toggleTodo(todo) {
      todo.isDone = !todo.isDone;
    }
  }
}
</script>

