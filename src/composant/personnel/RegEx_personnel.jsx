import React from 'react'
import * as Yup from 'yup';

export const RegEx_personnel = Yup.object({

    nom: Yup.string().
        matches(/^[^0-9]*$/, 'Le nom ne doit pas contenir de chiffres').
        matches(/^[A-Z\s]+$/, 'Le nom doit être en majuscules.').
        required('Le nom est requis'),
    prenom: Yup.string().
        matches(/^[^0-9]*$/, 'Le prenom ne doit pas contenir de chiffres').
        matches(/^([A-Z\s])(.)*$/, 'Le nom doit commencer par une majuscule .').
        required('Le prénom est requis'),
    date_naissance: Yup.date().required('Le date est requis'),
    sexe: Yup.string().required('Le sexe est requis'),

})


