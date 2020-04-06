import about from "pages/about.vue";
import home from "pages/home.vue";
import user from "pages/user.vue";
import news from "pages/news.vue";
import message from "pages/message.vue";
export default [
  {path:"/about",component:about},
  {
    path:"/home",
    component:home,
    children:[
      {path:"news",component:news},
      {path:"message",component:message},
      {path:"",redirect:"news"}
    ]
  },
  {path:"/user/:id",component:user},
  {path:"/",redirect:"/about"}
]
