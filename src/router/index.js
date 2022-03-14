/* eslint-disable no-undef */
import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/data_customer',
        name: 'Data Customer',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/data_customer/table',
        children: [
          {
            path: '/data_customer/table',
            name: 'data_customer',
            component: () => import('@/views/data_customer/table.vue'),
          },
          {
            path: '/data_customer/tambah',
            name: 'Data Customer',
            component: () => import('@/views/data_customer/tambah.vue'),
          },
        ],
      },
      {
        path: '/rencana',
        name: 'Rencana',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/rencana/umrah',
        children: [
          {
            path: '/rencana/umrah/table',
            name: 'Rencana Umrah',
            component: () => import('@/views/rencana/umrah/table.vue'),
          },
          {
            path: '/rencana/uang_muka_haji/table',
            name: 'Uang Muka Haji',
            component: () => import('@/views/rencana/uang_muka_haji/table.vue'),
          },
          {
            path: '/rencana/pelunasan_haji/table',
            name: 'Pelunasan Hajii',
            component: () => import('@/views/rencana/pelunasan_haji/table.vue'),
          },
        ],
      },
      {
        path: '/keberangkatan',
        name: 'Keberangkatan',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/keberangkatan/Table',
        children: [
          {
            path: '/keberangkatan/Tabel',
            name: 'Table Keberangkatan',
            component: () => import('@/views/keberangkatan/Table.vue'),
          },
          {
            path: '/keberangkatan/tambah',
            name: 'Tambah',
            component: () => import('@/views/keberangkatan/tambah.vue'),
          },
        ],
      },

      {
        path: '/forms',
        name: 'Forms',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/forms/form-control',
        children: [
          // {
          //   path: '/forms/form-control',
          //   name: 'Form Control',
          //   component: () => import('@/views/forms/Table.vue'),
          // },
         
        ],
      },
      {
        path: '/Produk',
        name: 'Produk',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/Produk/Table',
        children: [
          {
            path: '/Produk/Table',
            name: 'Produk',
            component: () => import('@/views/Produk/Table.vue'),
          },
          {
            path: '/Produk/tambah',
            name: 'tambah',
            component: () => import('@/views/Produk/tambah.vue'),
          },
        ],
      },
      {
        path: '/data_airline/Table',
        name: 'Data Airline',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/data_airline/Table',
        children: [
          {
            path: '/data_airline/Table',
            name: 'Table',
            component: () => import('@/views/data_airline/Table.vue'),
          },
          {
            path: '/data_airline/tambah',
            name: 'AirLine',
            component: () => import('@/views/data_airline/tambah.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
