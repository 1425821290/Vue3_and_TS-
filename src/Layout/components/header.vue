<template>
   <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo" />
        <a-dropdown placement="bottomRight">
            <a-avatar :src="store.state.user.avatar_url" :style="{float: 'right', marginTop: '10px'}" size="large"></a-avatar>
            <template #overlay>
            <a-menu>
                <a-menu-item>个人主页</a-menu-item>
                <a-menu-item>退出登录</a-menu-item>
            </a-menu>
            </template>
        </a-dropdown>
    </a-layout-header>
</template>

<script lang="ts">
import { StoreStateType } from '@/type/store'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    setup() {
        
        const store = useStore<StoreStateType>()

        return {
            store
        }
    }
})

</script>

<style scoped>
.logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
