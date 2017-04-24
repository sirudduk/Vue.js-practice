<template>
    <div>
        <p>total = {{total}}</p>
        <button @click="increment" v-text="counting"></button>
        <button @click="incrementSecond" v-text="counting2"></button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
							counting: 0,
							counting2:0
            }
        },

		computed: {
			total () {
				return this.counting + this.counting2;
			}
		},

		methods: {
			increment() {
				this.counting += 1
						
			},
			incrementSecond() {
				this.counting2 += 1
			},
		}
    }
</script>   