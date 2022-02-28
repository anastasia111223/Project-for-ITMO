<template>
    <div>
        <div v-if="!auth">Не верный логин или пароль</div>
        <div v-if="auth">
            <span>Добро пожаловать!</span>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            auth: 'getauth'
            }),
    }
}
</script>