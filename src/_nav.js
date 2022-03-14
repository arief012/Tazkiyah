export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
    },
  },
  {
    component: 'CNavTitle',
    name: 'PRODUK',
  },
  {
    component: 'CNavItem',
    name: 'Produk',
    to: '/Produk/Table',
    icon: 'cil-Speech',
  },
  
  {
    component: 'CNavItem',
    name: 'Keberangkatan',
    to: '/keberangkatan/Tabel',
    icon: 'cil-Pencil',
  },
  {
    component: 'CNavGroup',
    name: 'User Customer',
    to: '#',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Data Customer',
        to: '/data_customer/table',
      },
      {
        component: 'CNavItem',
        name: 'Kirim Pesan',
        to: '#',
      },
      {
        component: 'CNavItem',
        name: 'Update UI',
        to: '#',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Umrah',
    to: '/Umrah',
    icon: 'cil-cursor',
    items: [
      {
        component: 'CNavItem',
        name: 'Umrah',
        to: '/rencana/umrah/table',
      },
      {
        component: 'CNavItem',
        name: 'Uang Muka Haji',
        to: '/rencana/uang_muka_haji/table',
      },
      {
        component: 'CNavItem',
        name: 'Pelunasan Haji',
        to: '/rencana/pelunasan_haji/table',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'PEMBELIAN',
    to: '/forms',
    icon: 'cil-notes',
    items: [
      {
        component: 'CNavItem',
        name: 'Umrah',
        to: '#',
      },
      {
        component: 'CNavItem',
        name: 'Uang Muka Haji',
        to: '#',
      },
      {
        component: 'CNavItem',
        name: 'Pelunasan Haji',
        to: '#',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'USER MANAGEMENT',
    to: '/icons',
    icon: 'cil-People',
    items: [
      {
        component: 'CNavItem',
        name: 'Data User',
        to: '#',
        badge: {
          color: 'info',
        },
      },
      {
        component: 'CNavItem',
        name: 'Data Cabang',
        to: '#',
      },
      {
        component: 'CNavItem',
        name: 'Data Hotel',
        to: '#',
      },
      {
        component: 'CNavItem',
        name: 'Data Airlines',
        to: '/data_airline/Table',
      },
      {
        component: 'CNavItem',
        name: 'Paket Umrah',
        to: '#',
      },
    ],
  },
]
