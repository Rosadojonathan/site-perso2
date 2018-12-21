export const AUTHENTICATED = 'AUTHENTICATED';

export function authenticate () { 
    return {
        type:AUTHENTICATED,
        payload: true
    }
}