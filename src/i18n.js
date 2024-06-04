import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";


i18next.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: 'en',
    returnObjects: true,
    resources: {
        en: {
            translation: {
                dashboard: 'Dashboard',
                OrderHistory: 'Order History',
                Products: 'Products',
                Customers :'Customers',
                ExpenseStatement: 'Expense Statement',
                SalesReport:'Sales Report',
                StoreSetup: 'Store Set-up',
                AdminAccount: 'Admin Account',
                salesOverview: 'Sales Overview',
                customerOverview: 'Customer Overview',
                expenseStatement: 'Expense Statement',
                Search: 'Search',
                Monthly: 'Monthly',
                downloadReport: 'Download Report',
                nav3: {
                    HelpSupport: 'Help & Support',
                    Settings: 'Settings',
                    Logout: 'Logout',
                },
                outlet: {
                    
                }
            }
        },
        fr: {
            translation: {
                dashboard: 'Tableau de bord',
                OrderHistory: 'Historique des commandes',
                Products: 'Des produits',
                Customers : 'Clients',
                ExpenseStatement: 'État des dépenses',
                SalesReport:'Rapport des ventes',
                StoreSetup: 'Configuration du magasin',
                AdminAccount: 'Compte administrateur',
                salesOverview: 'Aperçu des ventes',
                customerOverview: 'Aperçu du client',
                expenseStatement: 'État des dépenses',
                Search: 'Recherche',
                Monthly: 'Mensuel',
                downloadReport: 'Télécharger le rapport',
                nav3: {
                    HelpSupport: "Support d'aide",
                    Settings: 'Paramètres',
                    Logout: 'Se déconnecter',
                }
            }
        },
        esp: {
            translation: {
                dashboard: 'Panel',
                OrderHistory: 'Historial de pedidos',
                Products: 'Productos',
                Customers : 'Clientes',
                ExpenseStatement: 'Declaración de gastos',
                SalesReport: 'Reporte de ventas',
                StoreSetup: 'Configuración de la tienda',
                AdminAccount: 'Cuenta de administrador',
                salesOverview: 'Resumen de ventas',
                customerOverview: 'Descripción general del cliente',
                expenseStatement: 'Declaración de gastos',
                Search: 'Buscar',
                Monthly: 'Mensual',
                downloadReport: 'Descargar Informe',
                nav3: {
                    HelpSupport: 'Servicio de asistencia',
                    Settings: 'Ajustes',
                    Logout: 'Cerrar sesión',
                }
            }
        },
    }
})