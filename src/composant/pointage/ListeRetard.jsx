import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";
import { GrAdd } from "react-icons/gr";
import { FaArrowDown, FaArrowUp, FaDotCircle, FaFilter, FaInfo, FaPen, FaSearch, FaTrash } from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';


const ListeRetard = ({ show_ajout, listeDesRetards, show_modif, show_div_supression }) => {
  const [donne, setDonne] = useState([])
  const [moDe, setMode] = useState('light')
  useEffect(() => {
    setMode(localStorage.getItem('theme'))
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
        filter:false
      }
    },
    {
      name: 'avatar',
      label: 'Avatar',
      options: {
        customBodyRenderLite: (dataIndex) => {
          const photos = listeDesRetards[dataIndex].avatar
          const sexe = listeDesRetards[dataIndex].sexe
          return (
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
      name: 'prenom',
      label: "Prenom",
      options: {
        filter: false
      },
    },
    {
      name: 'date_retard',
      label: "Date Retard",
      options: {
        customBodyRender: (value) => (
          <font>{
            format(new Date(value), 'd MMM yyyy', { locale: fr })
            }</font>
        ),
        
      }
    },
    {
      name: 'jour',
      label: "Jour"
    },
    {
      name: 'nb_heure_retard',
      label: "Nb heure",
      options: {
        customBodyRender: (value) => (
          <div className="px-2 py-1 bg-gray-100 rounded text-gray-950 dark:text-white dark:bg-[transparent]">
           <font> {value}</font>
          </div>
        ), 
        filter:false
      }
    },

    {
      name: '',
      options: {
        customBodyRenderLite: (dataIndex) => {
         
           const  prenom = listeDesRetards[dataIndex].prenom
           const  date_retard = listeDesRetards[dataIndex].date_retard
           const tout_donnes = listeDesRetards[dataIndex];
           const id = listeDesRetards[dataIndex].id;
          return (
            <div className="flex items-center justify-center space-x-2">
         
              <div 
              onClick={() => show_modif(tout_donnes, prenom, date_retard)} 
              className="flex items-center justify-center w-6 h-6 font-bold text-gray-400 border-gray-400 rounded-full border-[1px] cursor-pointernter cursor-pointer" title="modifier">
                <FaPen />
              </div>

              <div 
              onClick={()=>show_div_supression(id)} 
              className="flex items-center justify-center w-6 h-6 font-bold text-gray-400 border-gray-400 rounded-full border-[1px] cursor-pointernter cursor-pointer" title="suprimer">
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
    },
    selectableRows: false,
    responsive: "standard",
    elevation: 0,
    rowsPerPage: 7,
    rowsPerPageOptions: [7, 10, 16],

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
        <font className="text-[13px] dark:text-gray-300 text-gray-900">Liste des retards</font>

        {/* Bouton avec icône pour ajouter */}
        <button
          onClick={show_ajout}
          className="flex items-center justify-center space-x-3 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
          <GrAdd />
          <span className="hidden md:flex sm:hidden">Pointer un retard</span>
        </button>
      </div>
      <MUIDataTable
        data={listeDesRetards}
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

export default ListeRetard;




