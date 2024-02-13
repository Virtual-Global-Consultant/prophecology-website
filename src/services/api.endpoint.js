export default {
        //Auth
        generateOtp: 'auth/generate-otp',
        verifyOtp: 'auth/verify-otp',
        user: 'auth/user',
        logout: 'auth/logout',
        register: 'auth/register',

        incompletePrograms: 'programs/incomplete',
        upcomingPrograms: 'programs/upcoming',
        pastPrograms: 'programs/past',
        getProgram:(id) => 'programs/'+ id,
}