<!-- this module can retain users scroll position on refresh
it can also activate text slide up upon entering view port 
from abave or below -->
<template>
    <div class="bodysection">
        <div class="section1">
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eius cupiditate illum qui, vero, quia nulla libero numquam sapiente nobis ab! Totam assumenda ipsam quidem deleniti eius animi quia rerum?</h1>
        </div>
        
        <div class="texts">
            <div class="first" ><h2 ref="first">ShapeStation</h2> </div>
            <div class="second"><h2 ref="second">Web</h2></div>
            <div class="third"><h2 ref="third">Development</h2></div>
        </div>
        <div class="space"></div>
        <div class="texts2">
            <div class="first2" ><h2 ref="first2">ShapeStation</h2> </div>
            <div class="second2"><h2 ref="second2">Web</h2></div>
            <div class="third2"><h2 ref="third2">Development</h2></div>
        </div>
        <div class="space"></div>
    </div>


</template>

<style lang="scss" scoped>
 .bodysection {
    padding-inline: 1.5rem;
    margin-top: 5rem;
    height: fit-content;
    border: solid;


    .texts {
        // display: grid;
        // grid-template-columns: 1fr 1fr;
        // column-gap: 1rem;
         border: solid;
        display: flex;
        gap: 1rem;
        font-size:18px;

        .first {
            overflow: hidden;
            width: fit-content;
        }

        .second {
            overflow: hidden;
            width: fit-content;


        }

        .third {
            overflow: hidden;
            width: fit-content;


        }


    }

    .space {
        height: 70rem;
    }
    .texts2 {
        // display: grid;
        // grid-template-columns: 1fr 1fr;
        // column-gap: 1rem;
         border: solid;
        display: flex;
        gap: 1rem;
        font-size:18px;

        .first2 {
            overflow: hidden;
            width: fit-content;
        }

        .second2 {
            overflow: hidden;
            width: fit-content;


        }

        .third2 {
            overflow: hidden;
            width: fit-content;


        }

    }
}


</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const first = ref(null);
const second = ref(null);
const third = ref(null);

const first2 = ref(null);
const second2 = ref(null);
const third2 = ref(null);


onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 0.7, ease: 'power2.out()' } });

  tl.from(first.value, { y: 80, delay: 0.06 });
  tl.from(second.value, { y: 80, delay: 0.11 }, '<'); // Add the second animation to start immediately after the first one
  tl.from(third.value, { y: 80, delay: 0.16 }, '<'); // Add the third animation to start immediately after the second one

  ScrollTrigger.create({
    trigger: first.value,
    start: 'top 98%',
    end: 'bottom 23%',
    // markers: true,
    animation: tl,
    onEnterBack: () => tl.play(), 
    onLeave: () => tl.pause(), 
    onEnter: () => tl.play(),
  });

  const tl2 = gsap.timeline({ defaults: { duration: 0.7, ease: 'power2.out()' } });

// Define animations for the second set of elements
tl2.from(first2.value, { y: 80, delay: 0.06 });
tl2.from(second2.value, { y: 80, delay: 0.11 }, '<'); // Add the second animation to start immediately after the first one
tl2.from(third2.value, { y: 80, delay: 0.16 }, '<'); // Add the third animation to start immediately after the second one

// Create ScrollTrigger for the second set of elements
ScrollTrigger.create({
  trigger: first2.value,
  start: 'top 98%', // Start the animation when the top of the trigger element reaches 90% of the viewport
  end: 'bottom 23%', // End the animation when the bottom of the trigger element leaves 90% of the viewport
//   markers: true,
  animation: tl2,
  onEnterBack: () => tl2.play(), 
    onLeave: () => tl2.pause(), 
    onEnter: () => tl2.play(),
});

});


// this code is for maintaining scroll position upon refresh
// also note that the code will not work with mounting router in the main .js 
let scrollPosition = 0;

const saveScrollPosition = () => {
  scrollPosition = window.scrollY;
  localStorage.setItem('scrollPosition', scrollPosition.toString());
};

const restoreScrollPosition = () => {
  const storedPosition = localStorage.getItem('scrollPosition');
  if (storedPosition !== null) {
    scrollPosition = parseInt(storedPosition);
    window.scrollTo(0, scrollPosition);
  }
};

// Save scroll position just before the page is unloaded (refreshed)
window.addEventListener('beforeunload', saveScrollPosition);

// Restore scroll position when the page is loaded again after a refresh
onMounted(() => {
  restoreScrollPosition();
});

// Cleanup the event listener when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', saveScrollPosition);
});
// gsap.to('.bodysection img', {
//     y: '50%', // Adjust the percentage for the parallax speed
//     ease: 'none',
//     scrollTrigger: {
//       trigger: 'body',
//       start: 'top top',
//       end: 'bottom bottom',
//       scrub: true,
//     },
//   });



</script>