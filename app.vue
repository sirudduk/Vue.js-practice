<style lang='scss'>

</style>
<template lang='html'>
  
  <div>
  
    <input type="text" v-model="input" @keydown.enter="addTodo" />
    <button @click="addTodo">Add TODO</button>
    <ul>
      <li v-for="todo in todos" v-text="todo.text" @click="toggleTodo(todo)"></li>
    </ul>
  
  </div>

</template>
<script>
export default {
  data() {
    return {
      input: '',
      todos: [],
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.input,
        isDone: false,
      });
      this.input = '';
    },
    toggleTodo(todo) {
      todo.isDone = !todo.isDone;
    }
  }
}
</script>