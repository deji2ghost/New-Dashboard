import { faArrowRightFromBracket, faCartShopping, faChartArea, faCog, faHeadset, faHome, faMoneyBill, faStore, faTag, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"

export const NavDetails1 = [
    {
        navName: 'Dashboard',
        icon: faHome,
        path: 'Dashboard',
    },
    {
        navName: 'Order History',
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
        navName: 'Expense Statement',
        icon: faMoneyBill,
        path: 'ExpenseStatement',
    },
    {
        navName: 'Sales Report',
        icon: faChartArea
    },
]

export const NavDetails2 = [
    {
        navName: 'Store Set-up',
        icon: faStore
    },
    {
        navName: 'Admin Account',
        icon: faUser
    }
]

export const NavDetails3 = [
    {
        navName: 'Help & Support',
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