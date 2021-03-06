import Vue from 'vue'
import Router from 'vue-router'
import { Globals } from "./models/api.js";
import Home from './views/Home.vue'
import MyFriends from "./views/MyFriends.vue";
import MyFriendsUser from "./views/MyFriendsUser.vue";
import MyFriendsAdd from "./views/MyFriendsAdd.vue";
import FriendsSearch from "./views/FriendsSearch.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Users from "./views/Users.vue";
import Profile from "./views/Profile.vue";
import ProfileUser from "./views/ProfileUser.vue";
import ProfileEdit from "./views/ProfileEdit.vue";
import Contacts from "./views/Contacts.vue";
import ContactsUser from "./views/ContactsUser.vue";
import ContactsEdit from "./views/ContactsEdit.vue";
import FoodComments from "./views/FoodComments.vue";
import FoodCommentsLog from "./views/FoodCommentsLog.vue";
import FoodCommentsAdd from "./views/FoodCommentsAdd.vue";
import ExerciseComments from "./views/ExerciseComments.vue";
import ExerciseCommentsLog from "./views/ExerciseCommentsLog.vue";
import ExerciseCommentsAdd from "./views/ExerciseCommentsAdd.vue";
import Messages from "./views/Messages.vue";
import MessagesUser from "./views/MessagesUser.vue";
import MessagesSend from "./views/MessagesSend.vue";
import FoodLogs from "./views/FoodLogs.vue";
import FoodLogsUser from "./views/FoodLogsUser.vue";
import FoodLogsTotC from "./views/FoodLogsTotC.vue";
import FoodLogsCreate from "./views/FoodLogsCreate.vue"
import ExerciseLogs from "./views/ExerciseLogs.vue";
import ExerciseLogsUser from "./views/ExerciseLogsUser.vue";
import ExerciseLogsCreate from "./views/ExerciseLogsCreate.vue";
import ExerciseLogsAvgW from "./views/ExerciseLogsAvgW.vue";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/MyFriends',
      name: 'my-friends',
      component: MyFriends
    },
    {
      path: '/MyFriends/:userid',
      name: 'my-friendsUser',
      component: MyFriendsUser
    },
    {
      path: '/MyFriends/:userid/:friendid',
      name: 'my-friendsAdd',
      component: MyFriendsAdd
    },
    {
      path: '/MyFriends/search/name/:userid',
      name: 'my-friendsSearch',
      component: FriendsSearch
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: `/Profile`,
      name: 'Profile',
      component: Profile
    },
    {
      path: `/Profile/:userid`,
      name: 'ProfileUser',
      component: ProfileUser
    },
    {
      path: `/Profile/Edit/:userid`,
      name: 'ProfileEdit',
      component: ProfileEdit
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/Contacts/:userid',
      name: 'ContactsUser',
      component: ContactsUser
    },
    {
      path: '/Contacts/Edit/:userid',
      name: 'ContactsEdit',
      component: ContactsEdit
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users
    },
    {
      path: '/FoodComments',
      name: 'FoodComments',
      component: FoodComments
    },
    {
      path: '/comments/food/:logid',
      name: 'FoodCommentsLog',
      component: FoodCommentsLog
    },
    {
      path: '/comments/food/:userid/:logid',
      name: 'FoodCommentsAdd',
      component: FoodCommentsAdd
    },
    {
      path: '/ExerciseComments',
      name: 'ExerciseComments',
      component: ExerciseComments
    },
    {
      path: '/comments/exercise/:logid',
      name: 'ExerciseCommentsLog',
      component: ExerciseCommentsLog
    },
    {
      path: '/comments/exercise/:userid/:logid',
      name: 'ExerciseCommentsAdd',
      component: ExerciseCommentsAdd
    },
    {
      path: '/FoodLogs',
      name: 'FoodLogs',
      component: FoodLogs
    },
    {
      path: '/FoodLogs/:userid',
      name: 'FoodLogsUser',
      component: FoodLogsUser
    },
    {
      path: '/FoodLogs/create/:userid',
      name: 'FoodLogsCreate',
      component: FoodLogsCreate
    },
    {
      path: '/FoodLogs/totalcalories/:userid',
      name: 'FoodLogsTotC',
      component: FoodLogsTotC
    },
    {
      path: '/ExerciseLogs',
      name: 'ExerciseLogs',
      component: ExerciseLogs
    },
    {
      path: '/ExerciseLogs/:userid',
      name: 'ExerciseLogsUser',
      component: ExerciseLogsUser
    },
    {
      path: '/ExerciseLogs/create/:userid',
      name: 'ExerciseLogsCreate',
      component: ExerciseLogsCreate
    },
    {
      path: '/ExerciseLogs/averageWeight/:userid',
      name: 'ExerciseLogsAvgW',
      component: ExerciseLogsAvgW
    },
    {
      path: '/Messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/Messages/:userid',
      name: 'MessagesUser',
      component: MessagesUser
    },
    {
      path: '/Messages/:userid/:idTo',
      name: 'MessagesSend',
      component: MessagesSend
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicRoutes = ['home', 'Login', 'Register'];
  if(!publicRoutes.includes(to.name) && !Globals.user){
    Globals.redirectRoute = { name: to.name, path: to.path, params: to.params, query: to.query, hash: to.hash }
    return next('login');
  }
  next();
})

export default router;
