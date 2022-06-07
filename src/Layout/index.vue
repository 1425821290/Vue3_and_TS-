<template>
    <a-layout>
        <Header />
        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
            <router-view></router-view>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
            Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Header from './components/header.vue'

export default defineComponent({
    components: {
        Header
    },
    setup() {


        return {
            
        }
    }
})
</script>

<style scoped>
.ant-layout {
    height: 100%;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
