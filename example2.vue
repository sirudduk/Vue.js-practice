<style lang="scss">
  .frame {
    border-bottom: 3px solid #eee;
    padding: 20px;
    text-align: center;
  }
</style>

<template>
  <div>
    <div class="frame">
      <p>total = {{total}}</p>
      <button @click="increment" v-text="counter"></button>
      <button @click="increment2" v-text="counter2"></button>
    </div>
    <div class="frame">
      <input id="MIKE" v-model="MIKE" value="mike" type="checkbox">
      <label for="MIKE">mike</label>
      <input type="checkbox" v-model="MIKE" value="anna"> anna
      <p>{{MIKE}} 가 체크됨</p>
    </div>
    <div class="frame">
      <input type="text" v-model="comment">
      <p>{{comment}}</p>
    </div>
    <div class="frame">
      <li v-for="(item,index) in items">{{item.text}}{{index}}</li>
    </div>
    <div class="frame">
    </div>
  </div>

  
</template>

<script>

  export default {
    props: ['title'],
    data() {
      return {
        counter: 0,
        counter2: 0,
        MIKE: [],
        comment: '',
        items: [
          {text: "google"},
          {text: "naver"}
        ]
      }
    },
    computed: {
      total() {
        return this.counter + this.counter2;
      } 
    },
    methods: {
      increment() {
        this.counter += 1
      },
      increment2() {
        this.counter2 += 1
      }
    }
  }
  
</script>