import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import { appState, errorLogger } from '@/services/app';
import { useRoute } from 'vue-router'
import Api from '@/services/api';
import ApiEndpoints from '@/services/api.endpoint';

export const useProgramStore = defineStore('program', () => {

    const route = useRoute()

    const stepAppState = ref(appState().loaded)
    const stepErrorMessage = ref('')

    const programData = ref()
    const programAppState = ref(appState().loading)
    const programErrorMessage = ref('')
    const answers = reactive({})

    function setProgromSuccessData(program) {

        programData.value = program
        programAppState.value = appState().loaded
        programErrorMessage.value = ''

        // console.log(stepData.value)
        stepAppState.value = appState().loaded
        stepErrorMessage.value = ''        

        // console.log(program.steps)
        const ans = {}
        program.steps.forEach(step => {
            // console.log(step)
            const data = step.content.questions
            // console.log('dsa',step)
            for (const item in data) {
                if (item.includes('question')) {
                    if (!('answer' in data[item]) && data[item].answer_type == 'checkbox') {
                        data[item].answer = []
                        // console.log(data[item])
                    }
                }
            }
            ans[step.id] = {...data}
        });

        answers.value = {...ans}

        console.log(answers)

    }

    function setProgromErrorData(error) {

        programAppState.value = appState().error
        programErrorMessage.value = error
    }

    function getProgramData() {

        Api.getData(ApiEndpoints.getProgram(route.params.id)).then(res => {
            const data = res.data;
            if (data.success) {
                setProgromSuccessData(data.data)
            }
        }).catch(error => {
            setProgromErrorData(error?.response?.data ?? error)
            errorLogger(error?.response?.data ?? error)
        });
    }

    const currentProgramID = computed(() => {
        return route.params.id;
    })

    const currentProgramStepId = computed(() => {
        return route.params.stepId;
    })

    const stepData = computed(() => {
        return programData.value?.steps.find(e => e.id == currentProgramStepId.value);
    })

    const questions = computed(() => {
        return answers.value[currentProgramStepId.value]
    })

    const previousStepData = computed(() => {
        const i = programData.value?.steps.findIndex(e => e.id == currentProgramStepId.value)
        if(i == 0){
            return null
        }
        return programData.value?.steps[i-1]
    })

    const nextStepData = computed(() => {
        const i = programData.value?.steps.findIndex(e => e.id == currentProgramStepId.value)
        if(i == programData.value?.steps.length - 1){
            return null
        }
        return programData.value?.steps[i+1]
    })

    async function saveSubmitStepUpdate() {
        try {
            console.log(answers.value[currentProgramStepId.value])
        } catch (error) {
            console.log(error?.response?.data);
        }
    }


    return {
        stepData,
        questions,
        stepAppState,
        stepErrorMessage,
        programData,
        programAppState,
        programErrorMessage,
        currentProgramID,
        currentProgramStepId,
        answers,
        previousStepData,
        nextStepData,
        setProgromSuccessData,
        setProgromErrorData,
        getProgramData,
        saveSubmitStepUpdate,
    }

})