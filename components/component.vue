<template>
    <div>
        <input type="text" v-model="parentMsg">
        <span>{{parentMsg}}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                parentMsg: ''

            }
        }
    }
</script>

