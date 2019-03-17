import axios from 'axios'
import { urlApi } from './../support/urlApi'
import Cookie from 'universal-cookie'

const objCookie = new Cookie()

export const onLogin = (paramUsername, paramPassword) => {
    return(dispatch)=>{
        dispatch({
            type: 'LOADING'
        })

        axios.get(urlApi + '/users',{params:{
            username : paramUsername,
            password : paramPassword
        }})
        .then((res) => { console.log(res)
            if(res.data.length > 0){
                dispatch({
                    type : 'LOGIN_BERHASIL',
                    payload : 
                    {
                        username : res.data[0].username
                    }
                })
            } else {
                dispatch({
                    type : 'USER_TIDAK_DITEMUKAN'
                })
            }
        })

        .catch((err) => { console.log(err) 
            dispatch({
                type : 'SYSTEM_ERROR'
            })
        })
    }
}

export const keepOnLogin = (Cookie) => {
    return(dispatch) => {
        axios.get(urlApi + '/users', {params : {username : Cookie}})
        .then((res) => {
            if(res.data.length > 0){
                dispatch({
                    type : 'LOGIN_BERHASIL',
                    payload :
                    {
                        username : res.data[0].username,
                        role : res.data[0].role,
                        id : res.data[0].id
                    }
                })
            }
        })
        .catch((err) => console.log(err))
    }
}

export const resetUser = () => {
    return(dispatch)=>{
        dispatch({
            type = 'RESET_USER'
        })
    }
}

export const Register = (a,b,c,d,e,f) => {
    return(dispatch) => {
        dispatch({
            type : 'LOADING'
        })
        var newData = {firstName : a, lastName : b, username : c, email : d,
                       password : e, phone : f}
        axios.get(urlApi + '/users?username' + c)
        .then((res) => {
            if(res.data.length > 0){
                dispatch({
                    type : 'USERNAME_TIDAK_TERSEDIA'
                })
            } else {
                axios.post(urlApi + '/users', newData)
                .then((res) => dispatch({
                   type : 'LOGIN_BERHASIL',
                   payoad : c
                },
                    objCookie.set('userData',c,{path : '/'})
                ))
                .catch((err) => console.log(err))
            }
        })
        .catch((err) => {
            dispatch({
                type : 'SYSTEM_ERROR'
            })
        })
        axios.get(urlApi + '/users?email' + d)
        .then((res) => {
            if(res.data.length > 0){
                dispatch({
                    type : 'EMAIL_SUDAH_DIPAKAI'
                })
            } else {
                axios.post(urlApi + '/users', newData)
                .then((res) => dispatch({
                    type : 'LOGIN_BERHASIL',
                    payload : d
                },
                    objCookie.set('userData',d,{path : '/'})
                 ))
                 .catch((err) => console.log(err))
            }
        })
        .catch((err) => {
            dispatch({
                type : 'SYSTEM_ERROR'
            })
        })
    }
}