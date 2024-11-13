import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";
import { GrAdd } from "react-icons/gr";
import { FaArrowDown, FaArrowUp, FaDotCircle, FaFilter, FaInfo, FaPen, FaSearch, FaTrash } from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";

const TableExample = ({ show_infoPersonnel, show_form_ajout, show_div_supression_personnel, donne_table_trans, show_form_modif }) => {

  useEffect(() => {

  }, [])
  const columns = [
    {
      name: 'id',
      label: "ID_kely",
      options: {
        display: "excluded", // Cache la colonne `id` dans la table
        filter: false
      },
    },
    {
      name: 'identifiant',
      label: 'ID',
      options: {
        customBodyRender: (value) => (
          <font>{value}</font>
        ),
        filter: false
      }
    },
    {
      name: 'avatar',
      label: 'Avatar',
      options: {
        customBodyRenderLite: (dataIndex) => {
          const photos = donne_table_trans[dataIndex].avatar
          const sexe = donne_table_trans[dataIndex].sexe
          const photos_vrai = donne_table_trans[dataIndex].photos
          return (
            photos_vrai ?
              <div className="flex items-center justify-center w-full">
                <img src={`http://127.0.0.1:8000/storage/${photos_vrai}`} className="w-8 h-8 rounded-full border-[2px]" />
              </div>
              :
              <div className="flex items-center justify-center w-full">
                <div className={`flex items-center justify-center w-8 h-8 px-2 font-bold
                  border-[2px]  rounded-full  ${sexe === "masculin" ? "text-white bg-blue-300 border-blue-500"
                    : "border-orange-500 text-white bg-orange-300"}`}>
                  {photos}
                </div>
              </div>
          );
        },
        filter: false
      }
    },

    {
      name: 'nom',
      label: "Nom",
      options: {
        filter: false
      },
    },
    {
      name: 'prenom',
      label: "Prenom",
      options: {
        filter: false
      },
    },
    {
      name: 'date_naissance',
      label: "Naissance",
      options: {
        display: "excluded" // Cache la colonne `id` dans la table
      }
    },
    {
      name: 'sexe',
      label: 'sexe',
      options: {
        customBodyRender: (value) => (
          <div className={`flex items-center justify-center px-1 py-0.5 rounded-full text-gray-950 font-extrabold space-x-2 dark:bg-[#282828a2]  dark:text-gray-200
            ${value === "masculin" ? "bg-gray-300" : "bg-gray-200"}
          `}>
            <FaDotCircle className={` ${value === "masculin" ? "text-bleue_union_500" : "text-orange_union"}`} />
            <span>
              {value}
            </span>
          </div>
        )
      }
    },
    {
      name: 'nb_absent',
      label: 'Absent',
      options: {
        customBodyRender: (value) => (
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center justify-center w-8 h-8 font-bold bg-gray-100 rounded-full text-orange_union dark:bg-[#282828a2]">
              {value}
            </div>
          </div>
        )
      }
    },
    {
      name: 'nb_retard',
      label: 'Retard',
      options: {
        customBodyRender: (value) => (
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center justify-center w-8 h-8 font-bold bg-gray-200 rounded-full dark:bg-[#282828a2] dark:text-white">
              {value}
            </div>
          </div>
        )
      }
    },
    {
      name: '',
      options: {
        customBodyRenderLite: (dataIndex) => {
          const id = donne_table_trans[dataIndex].id
          const prenom = donne_table_trans[dataIndex].prenom
          const tout_donnes = donne_table_trans[dataIndex];
          return (
            <div className="flex items-center justify-center space-x-2">
              <div
                onClick={() => show_infoPersonnel(id)}
                className="flex items-center justify-center w-6 h-6 font-bold text-gray-400 border-gray-400 rounded-full border-[1px] cursor-pointernter cursor-pointer" title="information détaillés">
                <FaInfo />
              </div>

              <div onClick={() => show_form_modif(tout_donnes, prenom)} className="flex items-center justify-center w-6 h-6 font-bold text-gray-400 border-gray-400 rounded-full border-[1px] cursor-pointernter cursor-pointer" title="modifier">
                <FaPen />
              </div>

              <div onClick={() => show_div_supression_personnel(id, prenom)} className="flex items-center justify-center w-6 h-6 font-bold text-gray-400 border-gray-400 rounded-full border-[1px] cursor-pointernter cursor-pointer" title="suprimer">
                <FaTrash />
              </div>
            </div>
          )
        },
        filter: false
      }
    }
  ]

  const options = {
    textLabels: {
      body: {
        noMatch: "Données non trouvées",
        toolTip: "Trier",
        columnHeaderTooltip: column => `Trier par ${column.label}`,
      },
      pagination: {
        next: "Suivant",
        previous: "Précédent",
        rowsPerPage: "Lignes par page:",
        displayRows: "de",
      },
      toolbar: {
        search: "Rechercher",
        downloadCsv: "Télécharger CSV",
        print: "Imprimer",
        viewColumns: "Voir les colonnes",
        filterTable: "Filtrer le tableau",
      },
      filter: {
        all: "Tous",
        title: "Filtres",
        reset: "Réinitialiser",
      },
      viewColumns: {
        title: "Voir les colonnes",
        titleAria: "Afficher/Masquer les colonnes de la table",
      },
    },
    selectableRows: false,
    responsive: "standard",
    elevation: 0,
    rowsPerPage: 7,
    rowsPerPageOptions: [7, 10, 20],

  };

  const getMuiTheme = () => createTheme({
    typography: {
      fontFamily: "myFont",

    },
    palette: {
      mode: localStorage.getItem('theme'),
      ...(localStorage.getItem('theme') === "dark" && {
        background: {
          paper: "rgba(0, 0, 0, 0)"
        },
      }),

    },
    
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: {
            padding: "1px",
            background: "#09aac6",
            borderBottom: "2px solid orange",
            color: "white",
            '&:first-of-type': {
              borderRadius: "10px 0 0 0", // Arrondir uniquement le premier header (à gauche)
            },
            '&:last-of-type': {
              borderRadius: "0 10px 0 0", // Arrondir uniquement le dernier header (à droite)
            },
          },

          body: {
            padding: "8px",
            fontSize: "12px",
            textAlign: "center"
          },
          footer: {
            padding: "2px",
            background: "",
            fontSize: "8px",
            borderRadius: "1em",
            color: "white"
          }
        }
      }
    }

  })

  return (

    <ThemeProvider theme={getMuiTheme()} >

      {/* En-tête personnalisé */}
      <div className="flex items-center justify-between px-4 text-gray-900 dark:text-gray-300">
        {/* Titre stylisé */}
        <font className="text-[15px] dark:text-gray-300 text-gray-900">Liste des personnel</font>

        {/* Bouton avec icône pour ajouter */}
        <button onClick={show_form_ajout} className="flex items-center justify-center space-x-3 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
          <GrAdd />
          <span className="hidden md:flex sm:hidden">Ajouter nouvelle Personnel</span>
        </button>
      </div>
      <MUIDataTable
        data={donne_table_trans}
        columns={columns}
        options={options}
      />



      <style jsx>{`
        .MuiTableHead-root .MuiTableCell-root {
          text-align: center !important; /* Exemple : changer l'alignement du texte au centre */
        }
        .MuiIconButton-root {
          color: #6b7280; /* Exemple : changer la couleur des icônes par défaut en vert */
        }
        .MuiIconButton-root:hover {
          color: #e6631f;
        }  
      `}</style>

    </ThemeProvider>

  );
};

export default TableExample;




