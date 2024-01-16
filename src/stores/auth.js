import { computed, reactive} from 'vue';
import { defineStore } from 'pinia';
import Api from '@/services/api';
import { getLocalToken, getLocalUser, setLocalToken, setLocalUser, clearLocal, errorLogger, appState, infoLogger } from '@/services/app';
import ApiEndpoints from '@/services/api.endpoint';
import { useRouter } from 'vue-router'
import { routerName } from '@/router';

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()

    const loginRT = reactive({
        phone: '',
        appState: appState().idle,
        errorMessage: '',
    }) 

    const verifyRT = reactive({
        code: '',
        appState: appState().idle,
        errorMessage: '',
    })

    function setToken(value) {
        setLocalToken(value)
    }

    function setUser(value) {
        setLocalUser(value)
    }

    const token = computed(() => {
        return getLocalToken();
    })

    const user = computed(() => {
        return getLocalUser();
    })

    const isAuthenticated = computed(() => {
        return token.value && user.value;
    })

    const fullName = computed(() => {
        if (user.value) {
            return user.value.first_name + ' ' + user.value.last_name;
        }
        return '';
    })

    async function checkToken() {
        try {
            const { data } = await Api.getData("/auth/verify");
            return data;
        } catch (error) {
            console.log(error.response.data);
        }
    }


    function clear() {
        clearLocal
    }

    async function getOTP() {
        loginRT.appState = appState().loading
        try {
            const {data} = await Api.postData(ApiEndpoints.generateOtp, loginRT);
            if(data.success){
                loginRT.appState = appState().idle
                router.push(routerName().verifyOtp)
            }
        } catch (error) {
            loginRT.appState = appState().error
            errorLogger(error.response.data)
            loginRT.errorMessage = error.response.data.message ?? 'Failed'
        }
    }

    async function verifyOTP() {
        verifyRT.appState = appState().loading
        // infoLogger(token)
        try {
            const {data} = await Api.postData(ApiEndpoints.verifyOtp, {phone: loginRT.phone, code: verifyRT.code});
            infoLogger(data.data.token)
            if(data.success){
                verifyRT.appState = appState().idle
                setToken(data.data.token)
                setUser(data.data.user)
                window.location.replace('/')
            }
        } catch (error) {
            verifyRT.appState = appState().error
            errorLogger(error.response.data)
            verifyRT.errorMessage = error.response.data.message ?? 'Failed'
        }
    }

    return {
        loginRT,
        verifyRT,
        token,
        user,
        isAuthenticated,
        fullName,
        setToken,
        setUser,
        checkToken,
        clear,
        getOTP,
        verifyOTP,
    }

})