const INITIAL_STATE = {id : "", username : "", loading : false, error : "", email : "", role :""}

export default (state=INITIAL_STATE, action) => {
    if(action.type === 'LOGIN_BERHASIL'){
        return {...INITIAL_STATE,username : action.payload.username, id : action.payload.id, role : action.payload.role, email : action.payload.email}
    } else if(action.type === 'LOADING'){
        return {...INITIAL_STATE,loading : true}
    } else if(action.type === 'USER_TIDAK_DITEMUKAN'){
        return {...INITIAL_STATE, error : "Email atau Password salah"}
    } else if(action.type === 'SYSTEM_ERROR'){
        return {...INITIAL_STATE, error : "System Error!"}
    } else if(action.type === 'USERNAME_TIDAK_TERSEDIA'){
        return {...INITIAL_STATE, error : 'Username not available'}
    } else if(action.type === 'EMAIL_SUDAH_DIPAKAI'){
        return {...INITIAL_STATE, error : 'Email Sudah dipakai'}
    } else if(action.type === 'RESET_USER'){
        return INITIAL_STATE
    } else {
        return state
    }
}