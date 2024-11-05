import React from 'react'
import * as Yup from 'yup';

export const RegEx_retard = Yup.object({

    id_personnel: Yup.string().
        required('Le personnel est requis'),
    date_retard: Yup. date().required('Le date de retard est requis'),
    heure_arrive: Yup.string().required("L'heure d 'arrive est requis"),

})


