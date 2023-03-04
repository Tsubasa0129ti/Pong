<script setup lang='ts'>
    //import { ref, onMounted} from 'vue';
    import GamePanelHeader from './components/GamePanelHeader.vue';
    import GamePanelScreen from './components/GamePanelScreen.vue';
    import GamePanelFooter from './components/GamePanelFooter.vue';
    
</script>

<template>
    <div class="container">
        <!-- <LeftPane></LeftPane> -->
        <div class="game-panel">
            <GamePanelHeader></GamePanelHeader>
            <GamePanelScreen></GamePanelScreen>
            <GamePanelFooter></GamePanelFooter>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>