export const AUTHENTICATED = 'AUTHENTICATED';
export const LOGGEDIN = 'LOGGEDIN'
export const EXPIREDLOGGEDIN = "EXPIREDLOGGEDIN"

export function authenticate (token) { 
    return {
        type:AUTHENTICATED,
        payload: token
    }
}

export function loggedin () {
    return {
        type: LOGGEDIN,
        payload: true
    }
}

export function expiredLoggedin(){
    return {
        type: EXPIREDLOGGEDIN,
        payload: false
    }
}