import React, { useRef, useState } from 'react';
import { FaSave, FaUser } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

// Exemple de validation Yup pour les champs
const RegEx_personnel = Yup.object().shape({
  nom: Yup.string().required('Le nom est requis'),
  prenom: Yup.string().required('Le prénom est requis'),
  date_naissance: Yup.date().required('La date de naissance est requise'),
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
});

const Ontest = () => {
  const inputRef = useRef(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    setFieldValue("photos", file || null);
    setPhotoPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleFormReset = (resetForm, setFieldValue) => {
    resetForm();
    setPhotoPreview(null);
    setFieldValue("photos", null); 
    if (inputRef.current) inputRef.current.value = ""; // Réinitialise l'input file
  };

  return (
    <div className='grid w-full place-content-center'>
      <Formik
        initialValues={{
          nom: "",
          prenom: "",
          date_naissance: "",
          sexe: "",
          photos: null,
        }}
        validationSchema={RegEx_personnel}
        onSubmit={(values, { resetForm, setFieldValue }) => {
          console.log(values.photos);
          handleFormReset(resetForm, setFieldValue);
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className="p-4 space-y-4">

            {/* Photo avec avatar */}
            <div
              onClick={() => inputRef.current.click()}
              className='flex flex-col items-center justify-center w-32 h-32 text-white border-[4px] rounded-full cursor-pointer'
            >
              {photoPreview ? (
                <div className='w-32 h-32 overflow-hidden rounded-full'>
                  <img src={photoPreview} className='object-cover w-full h-full' alt="Aperçu" />
                </div>
              ) : (
                <div className="grid w-32 h-32 text-gray-400 bg-white rounded-full place-content-center">
                  <FaUser className='text-[4em]' />
                </div>
              )}
               <input
                type="file"
                name="photos"
                ref={inputRef}
                className="hidden"
                accept="image/*"
                onChange={(event) => handleImageChange(event, setFieldValue)}
              />
              <ErrorMessage
                name="photos"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            {/* Champ Nom */}
            <div>
              <Field
                name="nom"
                type="text"
                placeholder="Nom"
                className={`tailwind-form ${errors.nom && touched.nom ? "border-red-500" : ""}`}
              />
              <ErrorMessage name="nom" component="div" className="mt-1 text-sm text-red-500" />
            </div>

            {/* Champ Prénom */}
            <div>
              <Field
                name="prenom"
                type="text"
                placeholder="Prénom"
                className={`tailwind-form ${errors.prenom && touched.prenom ? "border-red-500" : ""}`}
              />
              <ErrorMessage name="prenom" component="div" className="mt-1 text-sm text-red-500" />
            </div>

            {/* Champ Date de Naissance */}
            <div>
              <Field
                name="date_naissance"
                type="date"
                className={`tailwind-form ${errors.date_naissance && touched.date_naissance ? "border-red-500" : ""}`}
              />
              <ErrorMessage name="date_naissance" component="div" className="mt-1 text-sm text-red-500" />
            </div>

            {/* Champ Sexe (Select) */}
            <div>
              <Field
                name="sexe"
              as="select"
                className={`tailwind-form ${errors.sexe && touched.sexe ? "border-red-500" : ""}`}
              >
                <option value="" disabled>Selectionner le sexe</option>
                <option value="masculin">Masculin</option>
                <option value="feminin">Féminin</option>
              </Field>
              <ErrorMessage name="sexe" component="div" className="mt-1 text-sm text-red-500" />
            </div>

            {/* Bouton de soumission */}
            <button type="submit" className="flex items-center justify-center space-x-3 my-4 sm:text-[12px] text-[1em] px-2 py-1 bg-blue-500 text-white rounded">
              <FaSave />
              <span className="text-[13px]">Enregistrer</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Ontest;
