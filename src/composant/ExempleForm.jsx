import React, { useState } from "react";

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    selectOption: "",
    textarea: "",
    acceptTerms: false,
    gender: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Traitement des données du formulaire ici
  };

  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Formulaire d'exemple</h2>
      <form onSubmit={handleSubmit}>
        {/* Nom */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Entrez votre nom"
          />
        </div>
        <input type="text" className="tailwind-form" />

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Entrez votre email"
          />
        </div>

        {/* Mot de passe */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Entrez votre mot de passe"
          />
        </div>

        {/* Sélection */}
        <div className="mb-4">
          <label htmlFor="selectOption" className="block mb-2 font-medium text-gray-700">
            Sélectionnez une option
          </label>
          <select
            id="selectOption"
            name="selectOption"
            value={formData.selectOption}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Choisissez une option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        {/* Texte long */}
        <div className="mb-4">
          <label htmlFor="textarea" className="block mb-2 font-medium text-gray-700">
            Texte long
          </label>
          <textarea
            id="textarea"
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Entrez un texte long"
          ></textarea>
        </div>

        {/* Case à cocher */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 form-checkbox"
            />
            <span className="ml-2 text-gray-700">Accepter les conditions</span>
          </label>
        </div>

        {/* Boutons radio */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Genre</label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 form-radio"
            />
            <span className="ml-2">Homme</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 form-radio"
            />
            <span className="ml-2">Femme</span>
          </label>
        </div>

        {/* Fichier */}
        <div className="mb-4">
          <label htmlFor="file" className="block mb-2 font-medium text-gray-700">
            Télécharger un fichier
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Bouton de soumission */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormExample;
