import React from 'react'
import * as Yup from 'yup';

export const RegEx_personnel = Yup.object().shape({

    nom: Yup.string().
        matches(/^[^0-9]*$/, 'Le nom ne doit pas contenir de chiffres').
        matches(/^[A-Z\s]+$/, 'Le nom doit être en majuscules.').
        required('Le nom est requis'),
    prenom: Yup.string().
        matches(/^[^0-9]*$/, 'Le prenom ne doit pas contenir de chiffres').
        matches(/^([A-Z\s])(.)*$/, 'Le nom doit commencer par une majuscule .').
        required('Le prénom est requis'),
    adresse: Yup.string().
        required('Adresse est requis'),
    contact: Yup.string().
        matches(/^[0]\d{9}$/, "Le numéro de téléphone doit commencer par 0 et contenir exactement 10 chiffres").
        required('Le contact est requis'),
    cin: Yup.string().
        matches(/^\d{12}$/, "Le CIN doit contenir exactement 12 chiffres").
        required('Le CIN est requis'),
    date_naissance: Yup.date().required('Le date de naissance est requis'),
    sexe: Yup.string().required('Le sexe est requis'),
    photos: Yup.mixed()
    .nullable()
    .test(
      'fileType',
      "Seuls les fichiers d'image sont autorisés (jpg, jpeg, png)",
      (value) => {
        if (!value) return true; // Rendre le champ optionnel
        return value && value.type.startsWith('image/');
      }
    )

})


