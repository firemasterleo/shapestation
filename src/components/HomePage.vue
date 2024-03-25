
<template>
    
<div class="bodysection">

    <div class="imageveil"></div>
    <div class="lightveil"></div>
    <div class="lightveil2"></div>
    <div class="lightveil3"></div>
    <div class="lightveil4"></div>
    
    <div class="image">

        <img src="../assets/lightbulb.jpg" alt="">
    </div>
    <div class="herosection">

        
        <div class="heroheading">
   
            <div class="line1">
                <h1 ref="first">Digital </h1> 
                <h1 ref="second">Solutions</h1>
                <h1 ref="third">For</h1>
            </div>
            <div class="line2">
                <h1 ref="fourth">Brand</h1>
                <h1 ref="fifth">Development</h1>
            </div>
            <!-- <p>Our mission is simple: <br> To empower businesses with the necessary digital assets required to thrive in an ever-evolving digital landscape.</p> -->
            <div class="buttons">
                <button class="button">Portfolio</button>
                <button class="button">Company</button>                
            </div>

        </div>
        <!-- <div class="herosliders">

            <div class="slider1">
                <div class="innerslider">
                    <div class="first"><h5>Website/Webapp Development</h5> </div>
                    <div class="second"><h5>App Development</h5> </div>
                    <div class="third"><h5>Digital Marketing</h5></div>
                </div>
                <div class="innerslider">
                    <div class="first"><h5>Website/Webapp Development</h5></div>
                    <div class="second"><h5>App Development</h5></div>
                    <div class="third"><h5>Digital Marketing</h5></div>
                </div>
            </div>

            <div class="slider2">
                <div class="innerslider">
                    <div class="first"><h5>Shapestation Africa</h5></div>
                    <div class="second"><h5>Brand image Designing</h5></div>
                    <div class="third"><h5>UI/UX</h5></div>
                </div>
                <div class="innerslider">
                    <div class="first"><h5>Shapestation Africa</h5></div>
                    <div class="second"><h5>Brand Image Designing</h5></div>
                    <div class="third"><h5>UI/UX</h5></div>
                </div>
            </div>

            <div class="slider3">
                <div class="innerslider">
                    <div class="first"><h5>Website/Webapp Development</h5> </div>
                    <div class="second"><h5>App Development</h5> </div>
                    <div class="third"><h5>Digital Marketing</h5></div>
                </div>
                <div class="innerslider">
                    <div class="first"><h5>Website/Webapp Development</h5></div>
                    <div class="second"><h5>App Development</h5></div>
                    <div class="third"><h5>Digital Marketing</h5></div>
                </div>
            </div>



        </div> -->

    </div>
    <div class="section2">
        <div class="aboutus">
            <div class="aboutshapestation">
                <div class="about" ref="about">
                    <h2>About</h2>

                </div>
                <div class="shapestation" ref="shapestation">
                    <h2>Shapestation</h2>
                    
                </div>

            </div>
            <p>  We're a team of passionate and creative individuals and our mission is simple: to empower businesses with the tools they need to thrive in an ever-evolving digital landscape.
                <br><br> We're here to enhance your online presence and help you stand out in a crowded digital marketplace
            </p>


        </div>

        <div class="oursolutions">
            <h2>Our Solutions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Placeat commodi ipsa modi amet exercitationem cum
                  voluptate, sint enim esse culpa, mollitia vitae in dolore nobis facilis provident, aperiam rem explicabo?</p>
        </div>

        </div>
<!-- 
        <div class="section4">
      <div class="number-container" ref="number">0</div>
      <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
        </div>
        <div class="section5">

      <div class="number-container" ref="number2">0</div>
      <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>

        </div>
        <div class="section6">
      <div class="number-container" ref="number3">0</div>
      <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>

        </div> -->
        <!-- <div class="section3">
        </div> -->
        


</div>







</template>



<style lang="scss" scoped>
.bodysection {
    height: fit-content;
    overflow: hidden;
    // border: solid;
    width: 100vw;
    position: relative;

    .lightveil {
        // border: solid green ;
        width: 0.6rem;
        height: 9rem;
        position: absolute;
        top: 18rem;
        left: 11.1rem;
        background-color: rgba(0, 0, 0, 0.71);
        rotate: 13.5deg;
    }
    .lightveil2 {
        width: 0.6rem;
        height: 9rem;
        position: absolute;
        top: 18rem;
        left: 12.1rem;
        background-color: rgba(0, 0, 0, 0.71);
        rotate: 12deg;
    }
    .lightveil3 {
        // border: solid green ;
        width: 0.6rem;
        height: 9rem;
        position: absolute;
        top: 18rem;
        left: 14.1rem;
        background-color: rgba(0, 0, 0, 0.71);
        rotate: -4.5deg;
    }
    .lightveil4 {
        // border: solid green ;
        width: 0.6rem;
        height: 9rem;
        position: absolute;
        top: 18rem;
        left: 15.4rem;
        background-color: rgba(0, 0, 0, 0.71);
        rotate: -10deg;

    }

    .imageveil {
        // border: solid green;
        position: absolute;
        width: 100%;
        height: 35rem;
        top: 10rem;
        background-color: rgba(0, 0, 0, 0.208);
    }


    .image {
        margin-top: 10rem;
        height: 35rem;
        width: 100%;
        position: absolute;
        z-index: -1;

        // border: solid green;
        display: flex;
        justify-content: center;

        img {
            height: 100%;
            width: 80%;
            object-fit: cover;
        }


    }
    
    
    .herosection {
        // border: solid;
        background-color: rgba(0, 0, 0, 0);
        height: 45rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 3rem;
         position: relative;
         overflow: hidden;



        .heroheading {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.3rem;

            .line1 {
                display: flex;
                gap: 0.6rem;
                overflow: hidden;
                font-size: 19px;
                color: rgb(179, 171, 171);

    
            }
            .line2 {
                display: flex;
                gap: 0.6rem;
                margin-top: -1.2rem;
                overflow: hidden;
                font-size: 19px;
                color: rgb(179, 171, 171);



    
            }
            p {
                font-size: 19.5px;
                text-align: center;
                color: rgb(202, 196, 196);
            }
            .buttons {
                display: flex;
                gap: 2rem;
                .button {
                    width: 9rem;
                    font-size: 20px;
                    font-weight: 700;
                    padding: 0.4rem;
                    border-color: rgba(255, 255, 255, 0.326);
                    border-top-color: rgba(111, 159, 96, 0.42) ;
                    border-bottom-color: rgba(225, 83, 244, 0.468) ;
                    border-left-color: rgb(73, 82, 73);
                    border-right-color:rgba(225, 83, 244, 0.468) ;
                    margin-left: 0.6rem;
                    background-color: rgba(105, 109, 100, 0.185);
                    border-radius: 2rem;
                    color: rgb(202, 196, 196);
                    font-weight: bolder;
                    // outline: none;
                }

            }
  }

        .herosliders {
            margin-inline: -1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            // border: solid;
            margin-top: 4rem;
            // box-shadow: inset 2rem 0px 0px 0px rgba(255, 255, 255, 0.993),
            //             inset  -2rem 0px 0px 0px rgba(255, 255, 255, 0.333);
            // background-color: white;


            @keyframes scrollAnimation {
                0% {
                transform: translateX(4%);
                }
                100% {
                transform: translateX(-100%);
                }
            }
            .slider1 {
                display: flex;
                overflow: hidden;
                gap: 1rem;

                .innerslider {
                    display: flex;
                    gap: 1rem;
                    // overflow: hidden;
                    animation: scrollAnimation 30s linear infinite; /* Adjust duration and timing function as needed */


                    div {
                        display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(255, 255, 255, 0.078); /* Adjust the alpha value as needed */
                    
                    width: 8.5rem;
                    height: 4.5rem;
                    border: solid rgba(73, 82, 73, 0.765);
                    border-radius: 1rem;
                    
                    h5 {
                            font-size: 15px;
                            color: rgba(255, 255, 255, 0.724);

                        }

                    }
                }

            }

            @keyframes scrollAnimation2 {
                0% {
                transform: translateX(-100%);
                }
                100% {
                transform: translateX(4%);
                }
            }
            .slider2 {
                display: flex;
                overflow: hidden;
                gap: 1rem;
                box-shadow: -50rem 0 -40px rgba(0, 0, 0, 0.877); /* Apply a box shadow to the left side */


                .innerslider {
                    // border: solid;

                    display: flex;

                    gap: 1rem;
                    // overflow: hidden;
                    animation: scrollAnimation2 30s linear infinite; /* Adjust duration and timing function as needed */


                    div {
                        display: flex;
                    justify-content: center;
                    align-items: center;
                        background-color: rgba(255, 255, 255, 0.078); /* Adjust the alpha value as needed */

                        width: 8.5rem;
                        height: 4.5rem;
                        border: solid rgba(225, 83, 244, 0.123);
                        border-radius: 1rem;


                                            
                    h5 {
                            font-size: 15px;
                            color: rgba(255, 255, 255, 0.724);

                        }

                    }
                }

            }
            .slider3 {
                display: flex;
                overflow: hidden;
                gap: 1rem;
                box-shadow: -2px 0 50px rgba(0, 0, 0, 0.699); /* Apply a box shadow to the left side */

                .innerslider {
                    display: flex;
                    gap: 1rem;
                    // overflow: hidden;
                    animation: scrollAnimation 35s linear infinite; /* Adjust duration and timing function as needed */


                    div {
                        display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(255, 255, 255, 0.078); /* Adjust the alpha value as needed */
                    
                    width: 8.5rem;
                    height: 4.5rem;
                    border: solid rgba(73, 82, 73, 0.765);
                    border-radius: 1rem;
                    
                    h5 {
                            font-size: 15px;
                            color: rgba(255, 255, 255, 0.724);

                        }

                    }
                }

            }

            @keyframes scrollAnimation2 {
                0% {
                transform: translateX(-100%);
                }
                100% {
                transform: translateX(4%);
                }
            }


        }
    }
    .section2 {
        padding-inline: 1.2rem;
        background-color: rgb(143, 103, 28);
        height: 40rem;
        display: flex;
        flex-direction: column;
        gap: 4rem;
        padding-top: 2rem;
        .aboutus {
            .aboutshapestation {
                display: flex;
                gap: 0.5rem;
                overflow: hidden;


                font-size: 17px;
                color: rgb(179, 171, 171);


            }
            p {
                font-size: 18px;
                width: 23rem;
                color: rgb(202, 196, 196);

            }

        }

            .oursolutions {
                color: rgb(202, 196, 196);

            }
    }
    .section4 {
        background-color: white;
        display: flex;
    }
    .section5 {
        background-color: white;
        display: flex;
        svg {
            
        }

    }
    .section6 {
        background-color: white;
        display: flex;

    }

 }

</style>

<script setup>

import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const is_portfolioexpanded = ref(false)

const TogglePortfolio = () => {
    is_portfolioexpanded.value = !is_portfolioexpanded.value;
}


const first = ref(null);
const second = ref(null);
const third = ref(null);
const fourth = ref(null);
const fifth = ref(null);


const html5 = ref(null);
const java = ref(null);
const netlify = ref(null);
const vuejs = ref(null);
const coding = ref(null);
const css3 = ref(null);
const git = ref(null);


const svg = ref(null);
const wind1 = ref(null);
const wind2 = ref(null);
const wind3 = ref(null);
const wind4 = ref(null);


const about = ref(null);
const shapestation = ref(null);



onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 0.75, ease: 'power.in()' } });
  const tl2 = gsap.timeline({ defaults: { duration: 0.4, ease: 'power.in()' } });
  const tl3 = gsap.timeline({ defaults: { duration: 2, ease: 'power.in()' } });
  const tl4 = gsap.timeline({ defaults: { duration: 5, ease: 'power.in()' } });
  const tl5 = gsap.timeline({ defaults: { duration: 0.75, ease: 'power.in()' } });

  tl.from(first.value, { y: 80, delay: 0.06 });
  tl.from(second.value, { y: 80, delay: 0.09 }, '<'); // Add the second animation to start immediately after the first one
  tl.from(third.value, { y: 80, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl.from(fourth.value, { y: 80, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl.from(fifth.value, { y: 80, delay: 0.2 }, '<'); // Add the third animation to start immediately after the second one


  tl2.from(css3.value, { y: 40, delay: 0.2 }, '<'); // Add the second animation to start immediately after the first one
  tl2.from(java.value, { y: 40, delay: 0.1 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(netlify.value, { y: 40, delay: 0.15 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(vuejs.value, { y: 40, delay: 0.2 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(html5.value, { y: 40, delay: 0.25 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(coding.value, { y: 40, delay: 0.3 }, '<'); // Add the third animation to start immediately after the second one
  tl2.from(git.value, { y: 40, delay: 0.35 }, '<'); // Add the third animation to start immediately after the second one



  tl3.to(svg.value, { rotation: -57, delay: 0, duration: 0.5}); // Add the second animation to start immediately after the first one
  tl3.to(svg.value, { rotation: -39, delay: 0, duration: 0.5}); // Add the second animation to start immediately after the first one
  tl3.to(svg.value, { rotation: -57, delay: 0, duration: 0.5}); // Add the second animation to start immediately after the first one
  tl3.to(svg.value, { rotation: -39, delay: 0, duration: 0.5}); // Add the second animation to start immediately after the first one
  
  tl3.to(svg.value, { rotation: -57, delay: 0, duration: 0.1}); // Add the second animation to start immediately after the first one
  tl3.to(svg.value, { rotation: -39, delay: 0, duration: 0.1}); // Add the second animation to start immediately after the first one
  tl3.to(svg.value, { rotation: -57, delay: 0, duration: 0.1}); // Add the second animation to start immediately after the first one
  tl3.to(svg.value, { rotation: -39, delay: 0, duration: 0.1}); // Add the second animation to start immediately after the first one

  tl3.to(svg.value, { rotation: -45, delay: 0, duration: 0.3}); // Add the second animation to start immediately after the first one
  
  tl3.to(svg.value, { y: -210, delay: 0}, '<'); // Add the second animation to start immediately after the first one



  tl4.to(wind1.value, { x: 450, delay: 1}, '<'); // Add the third animation to start immediately after the second one
  tl4.to(wind2.value, { x: 450, delay: 0 }, '<'); // Add the third animation to start immediately after the second one
  tl4.to(wind3.value, { x: 450, delay: 0 }, '<'); // Add the third animation to start immediately after the second one
  tl4.to(wind4.value, { x: 450, delay: 0 }, '<'); // Add the third animation to start immediately after the second one


  tl5.from(about.value, { y: 80, delay: 0.75 }, );
  tl5.from(shapestation.value, { y: 80, delay: 0.2 },'<'); // Add the second animation to start immediately after the first one

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



  ScrollTrigger.create({
    trigger: css3.value,
    start: '-1000% 60%',
    end: '1000% 60%',
    // markers: true,
    
    animation: tl2,
    onEnterBack: () => tl2.reverse(), 
    onLeave: () => tl2.pause(), 
    onEnter: () => tl2.play(),
  });
  
  ScrollTrigger.create({
    trigger: svg.value,
    start: 'top 70%',
    end: 'bottom 45%',
    // markers: true,
    scrub: 3,
    animation: tl3,
    onEnterBack: () => tl3.reverse(), 

  });

  ScrollTrigger.create({
    trigger: wind1.value,
    start: '300% 70%',
    end: '300% 45%',
    // markers: true,
    scrub:6,
    animation: tl4,
    // onLeave: () => tl4.pause(), 


    // onEnterBack: () => tl4.reverse(), 

    

  });

  ScrollTrigger.create({
    trigger: about.value,
    start: 'top 100%',
    end: 'bottom 100%',
    // markers: true,
    
    animation: tl5,
    // onEnterBack: () => tl5.reverse(), 
    // onLeave: () => tl5.pause(), 
    onEnter: () => tl5.play(),
  });



});








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



// const animateNumber = (target, endValue, duration) => {
//   gsap.to(target, {
//     duration: 3,
//     textContent: endValue,
//     snap: 'textContent' // Ensures smooth transition for numbers
//   });
// };

// // Set the target element and end value using ref
// const number = ref(null);
// const number2 = ref(null);
// const number3 = ref(null);
// const endValue = 50; // Set your desired end value
// const endValue2 = 10; // Set your desired end value
// const endValue3 = 1000; // Set your desired end value

// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger);

//   // Trigger the animation when the section comes into view
//   ScrollTrigger.create({
//     trigger: number.value,
//     start: 'top center', // Adjust as needed
//     end: 'bottom center', 
//         markers: true,
//         scrub:true, // Adjust as needed
//     onEnter: () => animateNumber(number.value, endValue, 1) // Adjust duration as needed
//   });
//   ScrollTrigger.create({
//     trigger: number2.value,
//     start: 'top center', // Adjust as needed
//     end: 'bottom center', 
//         markers: true,
//         scrub:true, // Adjust as needed
//     onEnter: () => animateNumber(number2.value, endValue2, 1) // Adjust duration as needed
//   });
//   ScrollTrigger.create({
//     trigger: number3.value,
//     start: 'top center', // Adjust as needed
//     end: 'bottom center', 
//         markers: true,
//         scrub:true, // Adjust as needed
//     onEnter: () => animateNumber(number3.value, endValue3, 1) // Adjust duration as needed
//   });
// });



</script>
