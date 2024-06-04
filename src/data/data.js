import { faArrowRightFromBracket, faCartShopping, faChartArea, faCog, faHeadset, faHome, faMoneyBill, faStore, faTag, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"

export const NavDetails1 = [
    {
        navName: 'dashboard',
        icon: faHome,
        path: 'Dashboard',
    },
    {
        navName: 'OrderHistory',
        icon: faCartShopping,
        path: 'OrderHistory',
    },
    {
        navName: 'Products',
        icon: faTag,
    },
    {
        navName: 'Customers',
        icon: faUsers,
        path: 'Customers',
    },
    {
        navName: 'ExpenseStatement',
        icon: faMoneyBill,
        path: 'ExpenseStatement',
    },
    {
        navName: 'SalesReport',
        icon: faChartArea
    },
]

export const NavDetails2 = [
    {
        navName: 'StoreSetup',
        icon: faStore
    },
    {
        navName: 'AdminAccount',
        icon: faUser
    }
]

export const NavDetails3 = [
    {
        navName: 'HelpSupport',
        icon: faHeadset
    },
    {
        navName: 'Settings',
        icon: faCog
    },
    {
        navName: 'Logout',
        icon: faArrowRightFromBracket
    },
]