<template>
   <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo" />
        <a-dropdown placement="bottomRight">
            <a-avatar :src="store.state.user.avatar_url" :style="{float: 'right', marginTop: '10px'}" size="large"></a-avatar>
            <template #overlay>
            <a-menu>
                <a-menu-item @click="showModal">修改头像</a-menu-item>
                <a-menu-item>退出登录</a-menu-item>
            </a-menu>
            </template>
        </a-dropdown>
    </a-layout-header>

    <a-modal v-model:visible="visible" title="修改头像" :confirm-loading="confirmLoading" @ok="handleOk">
        <a-upload
            name="avatar"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="false"
            action="http://localhost:3000/setInfo"
            :headers="{
                Authorization: token
            }"
        >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
                <loading-outlined v-if="loading"></loading-outlined>
                <plus-outlined v-else></plus-outlined>
                <div class="ant-upload-text">上传头像</div>
            </div>
        </a-upload>
    </a-modal>
</template>

<script lang="ts">
import { StoreStateType } from '@/type/store'
import { getToken } from '@/utils/auth'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    setup() {
        const visible = ref<boolean>(false)
        const confirmLoading = ref<boolean>(false);
        const loading = ref<boolean>(false);
        const imageUrl = ref<string>('');

        const token = getToken()
        
        const store = useStore<StoreStateType>()

        const showModal = () => visible.value = true;
        const handleOk = () => {
            confirmLoading.value = true;
            setTimeout(() => {
                visible.value = false;
                confirmLoading.value = false;
            }, 2000);
            };

        return {
            store,
            showModal,
            visible,
            confirmLoading,
            handleOk,
            loading,
            imageUrl,
            token
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
