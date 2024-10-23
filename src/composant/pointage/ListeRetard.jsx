import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";
import { GrAdd } from "react-icons/gr";
import { FaArrowDown, FaArrowUp, FaDotCircle, FaFilter, FaInfo, FaPen, FaSearch, FaTrash } from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";

const retard = {
  "liste": [
    {
      "id": "1",
      "id_pers": "U-8",
      "photos": "RJ",
      "nom": "RAKALADY Jean Dieu",
      "date_retard": "12 Oct 2024",
      "nb_heure": "2 heure",
   

    },

    {
        "id": "1",
        "id_pers": "U-8",
        "photos": "RJ",
        "nom": "RAKALADY Jean Dieu",
        "date_retard": "12 Oct 2024",
        "nb_heure": "2 heure",
     
  
      },

      {
        "id": "1",
        "id_pers": "U-8",
        "photos": "RJ",
        "nom": "RAKALADY Jean Dieu",
        "date_retard": "12 Oct 2024",
        "nb_heure": "2 heure",
     
  
      },

      {
        "id": "1",
        "id_pers": "U-8",
        "photos": "RJ",
        "nom": "RAKALADY Jean Dieu",
        "date_retard": "12 Oct 2024",
        "nb_heure": "2 heure",
     
  
      },

      {
        "id": "1",
        "id_pers": "U-8",
        "photos": "RJ",
        "nom": "RAKALADY Jean Dieu",
        "date_retard": "12 Oct 2024",
        "nb_heure": "2 heure",
     
  
      },

      {
        "id": "1",
        "id_pers": "U-8",
        "photos": "RJ",
        "nom": "RAKALADY Jean Dieu",
        "date_retard": "12 Oct 2024",
        "nb_heure": "2 heure",
     
  
      },

      {
        "id": "1",
        "id_pers": "U-8",
        "photos": "RJ",
        "nom": "RAKALADY Jean Dieu",
        "date_retard": "12 Oct 2024",
        "nb_heure": "2 heure",
     
  
      },

  ]
}

const ListeRetard = () => {
  const [donne, setDonne] = useState([])
  const [moDe, setMode] = useState('light')
  useEffect(() => {
    setDonne(retard)
    setMode(localStorage.getItem('theme'))
  }, [])
  const columns = [
    {
      name: 'id_pers',
      label: "NUM",
      options: {
        customBodyRender: (value) => (
          <font>{value}</font>
        )
      }
    },
    {
      name: 'photos',
      options: {

        customBodyRender: (value) => (
          <div className="flex items-center justify-center w-full">
            <div className={`flex items-center justify-center w-8 h-8 px-2 font-bold border-orange-500 text-white bg-orange-300
                border-[2px]  rounded-full`}>
              {value}
            </div>
          </div>
        ),
        filter: false
      }
    },
    {
      name: 'nom'
    },
    {
      name: 'date_retard',
      label:"Date"
    },
    {
      name: 'nb_heure',
      label:"Nb heure"
    },
  
    {
      name: '',
      options: {
        customBodyRender: () => (

          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center justify-center w-6 h-6 font-bold text-gray-400 border-gray-400 rounded-full border-[1px] cursor-pointernter cursor-pointer" title="modifier">
              <FaPen />
            </div>

            <div className="flex items-center justify-center w-6 h-6 font-bold text-gray-400 border-gray-400 rounded-full border-[1px] cursor-pointernter cursor-pointer" title="suprimer">
              <FaTrash />
            </div>
          </div>


        ),
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
    rowsPerPage: 4,
    rowsPerPageOptions: [7, 10, 20],

  };

  const getMuiTheme = () => createTheme({
    typography: {
      fontFamily: "myFont",

    },
    palette: {
      mode: moDe,
      ...(moDe === "dark" && {
        background :{
          paper: "red"
        },
      }),

     
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: {
            padding: "1px",
            background: "#09aac6",
            borderBottom : "2px solid orange",
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
        <button  className="flex items-center justify-center space-x-3 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
          <GrAdd />
          <span className="hidden md:flex sm:hidden">Pointer un retard</span>
        </button>
      </div>
      <MUIDataTable
        data={retard.liste}
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




