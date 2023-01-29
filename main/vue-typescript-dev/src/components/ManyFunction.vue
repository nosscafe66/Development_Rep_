<template>
    <div class="main-wrapper">
        <div class="button-wrapper">
            <p class="context">いいね{{ halfNumber }}</p>
            <button class="click-button" @click="increment">+1</button>
            <p>いいね({{ halfNumber }})</p>
            <button class="click-button" @click="increment">+1</button>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'ManyFunction',
        props:['totalNumber'],
        computed:{
            halfNumber(){
                return this.totalNumber / 2;
            },
        },
        emits: {
            myEvent:(text) => {
                return typeof text === 'string'
            }
        },
        methods:{
            doMyEvent1(){
                this.$emit('myEvent',this.totalNumber + 3)
            },
            doMyEvent2(){
                this.$emit('myEvent',this.totalNumber + 2)
            },
            increment(){
                this.$emit('myEvent',this.totalNumber + 1)
                console.log("OK!");
            },
        },
    };
</script>
<style>
.main-wrapper{
    height:100px;
    width:100px;
    background-color: azure;
}

.click-button{
    border-radius: 5em;
    background-color: violet;
}

.button-wrapper{
    background-color: greenyellow;
}
</style>