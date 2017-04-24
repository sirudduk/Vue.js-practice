<template>
  <div>
    <input v-model="message">
    <p v-bind:class="{active: isActive}">this value is: {{message}}</p>
    <h1 v-if="ok">안녕하세요~</h1>
    <h2 v-else>즐~!</h2>
    <li v-for="item of items" :key="item.id">{{item}}</li>
    <li v-for="(value, key, index) in object">{{ value }}. {{key}} : {{index}}</li>
    <span v-for="n in 10">{{ n }}</span>
    <span v-for="b in even(numbers)">{{ b }}</span>
    <button v-on:click="counter += 1">{{counter}}</button>
    <button v-on:click="counter -= 1">{{counter}}</button>
    <button v-on:click="greet">Greet</button>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <input type="checkbox" id="mike" v-model="checkedName" value="Mike">
    <label for="mike">mike</label>
    <br>
    <span>체크한 이름: {{checkedName}}</span>
    <br>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <input type="radio" id="two" value="Two~!!" v-model="picked">
    <label for="two">two</label>
    <br>
    <span>picked: {{picked}}</span>
    <br>
    <select v-model="selected">
      <option disabled value="">please select one</option>
      <option>a</option>
      <option>b</option>
      <option>c</option>
    </select>
    <br>
    <span>{{selected}} 가 선택되었습니다</span>
    <br>
    <select v-model="selecting">
      <option v-for="option in options">{{ option.text }}</option>
    </select>
    <br>
    <span>{{selecting}} 가 선택</span>
    <test></test>
    <exam></exam>
    <h1>나는 부모 컴포넌트의 제목입니다.</h1>
    <practice>
      <p slot="quite">이것은 원본 컨텐츠 입니다.</p>
      <p slot="quite">이것은 원본 중 추가 컨텐츠 입니다.</p>
    </practice>
    <input type="text" v-model="abraham">
    <p>{{abraham}}</p>
    <button @click="increment" v-text="number"></button>
    <select v-model="pickme">
      <option disabled> please checking</option>
      <option v-for="count in 5">{{count}}</option>
    </select>
    <p>{{pickme}} 가 선택되었다</p>

  </div>
</template>

<script>
  import test from './components/component.vue'
  import exam from './components/buttonCounter.vue'
  import practice from './components/Practice.vue'

  export default {
    data() {
      return {
        pickme: '',
        number: 0,
        abraham: '',
        message: 'heelowww',
        isActive: true,
        ok: false,
        items: [
          { comment: 'google' },
          { comment: 'naver' }
        ],
        object: {
          firstName: 'john',
          lastName: '정균',
          age: 25
        },
        numbers: [1,2,3,4,5,6],
        counter: 0,
        checked: true,
        checkedName: [],
        picked: '',
        selected: '',
        selecting: 'A',
        options: [
          {text: 'One',value: 'A'},
          {text: 'Two',value: 'B'},
          {text: 'three', value: 'c'}
        ]
      }
    },
    components: {
      test,exam,practice
    },

    methods: {
        increment: function() {
          this.number += 1
        },
        even: function(numbers) {
          return this.numbers.filter((number) => {
            return number % 2 === 0
          })
        },
        greet: function(event) {
          if (event) {

            alert(event.target.tagName)
          }
        }
        
    }

    
  }
  
</script>