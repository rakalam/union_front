import React, { useState } from 'react';

const Ontest = () => {
  // Exemple de données
  const [data, setData] = useState([
    { id: 1, nom: 'Rafanelona', prenom: 'Mika', sexe: 'Masculin' },
    { id: 2, nom: 'Raharimanana', prenom: 'Lala', sexe: 'Féminin' },
    { id: 3, nom: 'Rafikindrasoa', prenom: 'Tiana', sexe: 'Masculin' },
    // Ajoutez d'autres données si nécessaire
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Fonction pour gérer la recherche
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrer les données en fonction de la recherche
  const filteredData = data.filter((item) =>
    item.nom.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.prenom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Table de Données</h1>

      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher par nom ou prénom..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 mb-4 border"
      />

      {/* Table des données */}
      <table className="w-full border border-collapse border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300">ID</th>
            <th className="border border-gray-300">Nom</th>
            <th className="border border-gray-300">Prénom</th>
            <th className="border border-gray-300">Sexe</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300">{item.id}</td>
              <td className="border border-gray-300">{item.nom}</td>
              <td className="border border-gray-300">{item.prenom}</td>
              <td className="border border-gray-300">{item.sexe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ontest;
