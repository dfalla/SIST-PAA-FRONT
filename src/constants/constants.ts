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
