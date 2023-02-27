<script setup lang='ts'>
    import { ref, onMounted} from 'vue';

    const count = ref(0);

    function increment() {
        count.value++;
    }

    onMounted(() => {
        console.log(`this initial count is ${count.value}.`);
    });
</script>

<template>
    <button class="btn red" @click='increment'>Count is : {{ count }}</button>
</template>

<style lang="scss" scoped>
    .btn {
        width: 120px;

        &.red {
            background: red;
        }
    }
</style>