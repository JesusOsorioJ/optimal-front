import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        global:{
            "welcome": "CRUD: App",
            "add": "Add",
            "edit": "Edit",
            "delete": "Delete",
            "close": "Close",
            "save": "Save",
            "noRecordsFound": "No records found",
            "darkLight": "Dark/Light",
            "inputRequired": "Input required"
        },
        items:{
            "createItem":"Create item",
            "editItem":"Edit item",
            "name": "Name",
            "description": "Description",
            "createAt": "Date",
            "actions":"Actions",
            "nameRequirements": "Name must be between 4 and 100 characters", 
            "descriptionRequirements": "Description must be between 4 and 100 characters",
            "sureToDelete": "Are you sure you want to delete the item"
        },
      }
    },
    es: {
      translation: {
        global:{
            "welcome": "CRUD: Aplicación ",
            "add": "Agregar",
            "edit": "Editar",
            "delete": "Eliminar",
            "close": "Cerrar",
            "save": "Guardar",
            "noRecordsFound": "Sin items aun",
            "darkLight": "Oscuro/Claro",
            "inputRequired": "Campo requido"
        },
        items:{
            "createItem":"Crear item",
            "editItem":"Editar item",
            "name": "Nombre",
            "description": "Descripcion",
            "createAt": "Fecha",
            "actions": "Acciones",
            "nameRequirements": "Nombre debe tener entre 5 y 20 caracteres",
            "descriptionRequirements": "Descripción debe tener entre 5 y 100 caracteres",
            "sureToDelete": "¿Estás seguro de que quieres eliminar el elemento"
        }
      },
    },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;