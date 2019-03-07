import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/admin/login',
            name: 'Login',
            component: () => import("../views/pages/Login.vue")
        },
        {
            path: '/admin/users',
            alias: "/admin",
            component: () => import("../views/pages/Users.vue"),
            name: 'Users',
            meta: {
                requireAuth: true
            },
        }, {
            path: '/admin/pages',
            component: () => import("../views/pages/Pages.vue"),
            name: 'Pages',
            meta: {
                requireAuth: true
            },
        }, {
            path: '/admin/products',
            component: () => import("../views/pages/Products.vue"),
            name: 'Products',
            meta: {
                requireAuth: true
            },
        },
        {
            path: '/admin/settings',
            component: () => import("../views/pages/Settings.vue"),
            name: 'Settings',
            meta: {
                requireAuth: true
            },
        }, ,
        {
            path: '/admin/orders',
            component: () => import("../views/pages/Orders.vue"),
            name: 'Orders',
            meta: {
                requireAuth: true
            },
        },
    ]
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // этот путь требует авторизации, проверяем залогинен ли
        // пользователь, и если нет, перенаправляем на страницу логина
        if (!store.getters.loggedIn) {
            next({
                name: 'Login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next()
        }
    } else {
        next() // всегда так или иначе нужно вызвать next()!
    }
})

export default router
