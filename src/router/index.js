import { createRouter, createWebHistory } from "vue-router";
import TextSlideUp from '../components/TextSlideUp.vue';
import HomePage from '../components/HomePage.vue';
import InteriorPage from '../components/InteriorPage.vue';



const router = createRouter({
    history: createWebHistory(), 
      routes: [
        
        {
            path: '/',
            name: 'HomePage',
            component: HomePage

        },
        {
            path: '/InteriorPage',
            name: 'InteriorPage',
            component: InteriorPage

        },
        {
            path: '/TextSlideUp',
            name: 'TextSlideUp',
            component: TextSlideUp

        }
        
    ],
  scrollBehavior(to, from, savedPosition) {
    // Return the desired position when navigating back and forward
    if (savedPosition) {
      return savedPosition;
    } else {
      // Scroll to the top by default
      return { left: 0, top: 0 };
    }
  },
  
});

export default router