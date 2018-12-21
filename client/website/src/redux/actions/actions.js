export const AUTHENTICATED = 'AUTHENTICATED';
export const LOGGEDIN = 'LOGGEDIN'

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