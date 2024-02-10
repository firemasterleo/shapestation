<template>
    <div class="header2">
    
        <div class="mainveil" :class="{ 'is-expanded': is_expanded }" @click="ToggleMenu"></div>
        
        <div class="headercontainer">
          <div class="header" :class="{ 'ishidingheader': isHidingHeader && !isScrollingUp }"> 
              <div class="logo">
                  <img src="./assets/unikmelogo.png" alt="proselogo">
              </div>
              <div class="name">
                  <img src="./assets/unikmename.png" alt="proselogo">
              </div>
              <div class="hamburger" :class="{ 'is-active': is_expanded }" @click="ToggleMenu">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
              </div>
              
          </div>
          </div>
        
        <div class="menuslidelist" :class="{ 'is-expanded': is_expanded }">
        
        
          <div class="home" >
        
        <router-link class="menuitem" to="/" @click="ToggleMenu">
          <h3>Home</h3>
           </router-link>
        </div>
        <div class="asoebi" >
          <router-link class="menuitem" to="/Asoebi" @click="ToggleMenu">
            <h3>Aso-Ebi Outfits</h3>
          </router-link>
        </div>
        <div class="bridals" >
          <router-link class="menuitem" to="/Bridals" @click="ToggleMenu">
            <h3>Bridals</h3>
          </router-link>
        </div>
        <div class="bespoke" >
          <router-link class="menuitem" to="/Bespoke" @click="ToggleMenu">
            <h3>Bespoke/Custom Outfits</h3>
          </router-link>
        </div>
        <div class="about" >
        <router-link class="menuitem" to="/About" @click="ToggleMenu">
          <h3>About Us</h3>
           </router-link>
        </div>
        <div class="consultation" >
          <router-link class="menuitem" to="/Consultation" @click="ToggleMenu">
            <h3>Consultation</h3>
          </router-link>
        </div>
        <div class="Ourprocess" >
          <router-link class="menuitem" to="/Ourprocess&FAQs" @click="ToggleMenu">
            <h3>Our process / Pricing</h3>
          </router-link>
        </div>
        <div class="contact" >
        <router-link class="menuitem" to="/Contact" @click="ToggleMenu">
          <h3>Contact</h3>
           </router-link>
        </div>
        </div>
    
    </div>


</template>



<style lang="scss" scoped>
@import '../sass/headers.scss';
 </style>

<script setup >

import { ref, onMounted, onUnmounted } from 'vue';
import '../sass/headers.scss';







const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
}



//headerbehaviour logic
const isAtTop = ref(true);
const isHidingHeader = ref(false);
const isScrollingUp = ref(false);

const translateThreshold = 100;
const bottomMargin = 250; // Adjust this margin as needed



let lastScrollTop = 0;

const handleScroll = () => {
  const currentScrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;




  if (currentScrollTop > 0) {
    isAtTop.value = false;

    if (currentScrollTop > translateThreshold) {
      isScrollingUp.value = currentScrollTop < lastScrollTop;


          isHidingHeader.value = true;

      }
    else {
      isHidingHeader.value = false;
    }
  } 
  else {
    isAtTop.value = true;
    isHidingHeader.value = false;
  }
  if (is_expanded.value) {
    isScrollingUp.value = true; } //i used this code to turn off scrolling of the header when isexpanded condition is true

    if (currentScrollTop >= maxScroll - bottomMargin) {
        isHidingHeader.value = false;
        isScrollingUp.value = true;
      }   // i used this one to bring the header down when the footer shows up 

  

  lastScrollTop = currentScrollTop; 
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>