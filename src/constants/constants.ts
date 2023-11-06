export const URL = {
    url: 'http://localhost:8001/api',
}

export const FEATURES = {
    loans                   : 'loans',
    students                : 'students',
    schedule                : 'schedule',
    typeDocument            : 'types-document',
    group                   : {
        g1nb  : 'g1nb',
        g2nb  : 'g2nb',
        g3nb  : 'g3nb',
        g4nb  : 'g4nb',
        gab   : 'gab',
        gi    : 'gi',
    }
}

export const AUTH = {
    login       : '/auth/login',
    register    : '/auth/register',
    msgLogin    : 'Usuario Logueado' 
}


export const MESSAGES_NOTIFICATIONS = {
    features: {
        students: {
            registred           : 'Alumno registrado exitosamente',
            edited              : 'Alumno editado exitosamente',
            deleted             : 'Alumno eliminado exitosamente',
        },

        schedules: {
            registred           : 'Horario registrado exitosamente',
            edited              : 'Horario editado exitosamente',
            deleted             : 'Horario eliminado exitosamente',
        }

    }
}

export const GROUPSCOLORS = {
    GAB: {
        GROUP: 'GAB',
        COLOR: 'violet'
    },
    G1NB: {
        GROUP: 'G1NB',
        COLOR: 'grey'
    },
    G2NB: {
        GROUP: 'G2NB',
        COLOR: 'green'
    },
    G3NB: {
        GROUP: 'G3NB',
        COLOR: 'blue'
    },
    G4NB: {
        GROUP: 'G4NB',
        COLOR: 'red'
    },
    G5NB: {
        GROUP: 'G5NB',
        COLOR: 'black'
    },
    GI: {
        GROUP: 'GI',
        COLOR: 'brown'
    },
    
}
