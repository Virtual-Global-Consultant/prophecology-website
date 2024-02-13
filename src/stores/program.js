import { reactive} from 'vue';
import { defineStore } from 'pinia';
import Api from '@/services/api';
import { errorLogger, appState, } from '@/services/app';
import ApiEndpoints from '@/services/api.endpoint';

export const useProgramStore = defineStore('auth', () => {

    const upcomingProgramsRT = reactive({
        data: [],
        appState: appState().idle,
        errorMessage: '',
    }) 

    function getUpcomingPrograms() {
        upcomingProgramsRT.appState = appState().loading
        Api.getData(ApiEndpoints.upcomingPrograms).then(res => {
            const data = res.data;
            if(data.success){
                upcomingProgramsRT.data = data.data
                upcomingProgramsRT.appState = appState().idle
                upcomingProgramsRT.errorMessage = ''
            }
        }).catch(error=>{
            upcomingProgramsRT.appState = appState().error
            errorLogger(error.response.data)
        });
    }

    return {
        getUpcomingPrograms,
    }

})