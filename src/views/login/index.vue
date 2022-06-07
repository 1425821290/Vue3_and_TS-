<template>
    <div class="login">
        <a-form
            class="form"
            :model="formState"
            name="basic"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="onFinish"
        >
            <a-form-item
                label="用户名"
                name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]"
            >
                <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item
                label="密码"
                name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]"
            >
                <a-input-password v-model:value="formState.password" />
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 3, span: 19 }">
                <a-button style="width: 100%" type="primary" html-type="submit">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
<script lang="ts">
import type { LoginType } from '@/type/user';
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const formState = reactive<LoginType>({
            username: 'admin',
            password: '111111',
        });

        const store = useStore()
        const router = useRouter()


        const onFinish = async(values: LoginType) => {       
            try {
                const res = await store.dispatch('loginAction', values)
                if (res.code === 200) {
                    router.push('/')
                }
            } catch (error) {
                console.log(error);
            }
        };


        return {
            formState,
            onFinish,
        };
    }
})

</script>
<style scoped>
.login {
    height: 100%;
    background-color: rgb(117,70,201);
}
.form {
    width: 500px;
    height: 200px;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    padding-top: 20px;
    border-radius: 10px;
    box-shadow: 0 0 40px -12px rgba(0, 0, 0, 0.9)
}
</style>
