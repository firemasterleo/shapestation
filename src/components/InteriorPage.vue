<template>

    <div class="entirebody">
        <div class="section1">
            <!-- veil zindex 10 -->
            <div class="veil"></div>
            <div class="leftsection">

                <div class="top">
                    <h1>VIE MODERNE</h1>
                    <p>your space, your personality</p>
                    <button>Begin a Project</button>

                </div>
                <!-- <div class="bottom">
                    <div class="aboutustext">
                        <h1>ABOUT US</h1>
                    </div>
                    <div class="aboutusbar">

                    </div>
                    <div class="aboutus">
                        <div>
                            <p>something is here </p>

                        </div>
                    </div>
                </div> -->

                </div>

            <div class="rightsection">
                <div class="image">
                    <img src="../assets/interiorimage1.jpeg" alt="">
                </div>
                <!-- <div class="smallbox">
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <button>DISCOVER MORE</button>
                </div> -->

            </div>
        </div>
        <div class="section2">
            <div class="veil"></div>
            <div class="image">
                    <img src="../assets/motherboard.jpg" alt="">
                </div>


        </div>


    </div>





</template>


<style lang="scss">

.entirebody {
    // border: solid green;
    width: 98.8vw;
    // height: 90vh;
    overflow: hidden;
    position: relative;

    .section1 {
        display: flex;

        .veil {

            position: absolute;
            // border: solid red;
            z-index: 10;
            height: 51.2rem;
            width: 98.8vw;
            background: linear-gradient(to right, rgb(0, 0, 0),rgba(0, 0, 0, 0.916), rgba(0, 0, 0, 0.669)); /* Gradient for the shadow effect */

        }
        .leftsection {
            position: absolute;
            // padding-top: 10rem;
            display: flex;
            height: 30rem;
            width: 50rem;
            flex-direction: column;
            gap: 1rem;
            // border: solid rgba(50, 50, 255, 0.642);
            background: rgba(0, 0, 0, 0);
            z-index: 11;
            padding-left: 3rem;

            .top {
                position: relative;

                
                display: flex;
                flex-direction: column;
                gap: 1rem;





                h1 {
                    // position: relative;
                    color: rgba(255, 255, 255, 0.413);
                    margin-top: 6rem;
                    font-size: 80px;
                    // border: solid rgb(50, 50, 255);
    
    
    
                }
                p {
                    margin-left: 2rem;
                    color: rgba(255, 255, 255, 0.413);
                    font-size: 35px;
    
                }
                button {
                    margin-left: 2rem;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
    
                    width: 10rem;
                    background-color: rgba(255, 255, 255, 0.413);
                }
            }

            .bottom {
                position: relative;
                z-index: 11;
                color: rgba(255, 255, 255, 0.413);

                // border: solid red;
                height: 50rem;
                display: flex;
                margin-top: 5rem;
                gap: 1rem;
                .aboutustext {
                    margin-top: 5rem;

                }
                .aboutusbar {
                    // border: solid rgba(255, 255, 255, 0.413);
                    
                    height: 20rem;
                    position: relative;
                    bottom: 3rem;

                    // margin-bottom: 5rem;
                    width: 0.1rem;
                    background-color: rgba(255, 255, 255, 0.413);
                    
                }
            }
            

        }
        .rightsection {
            border: solid red;
            width: 100%;
            height: 51rem;
            // border: solid red;


            .image {
                width: 100%;

                object-fit: cover;
                img {
                    width: 100%;
                }
            }
        }
    }
    .section2 {
        width: 98.8vw;
        height: 35rem;
        border: solid green;
        

        .veil {
            position: absolute;
            z-index: 10;
            background-color: rgba(0, 0, 0, 0.856);
            width: 98.8vw;
            height: 35rem;
        }
        .image {
            width: 50rem;
            rotate: 4deg;
            height: 35rem;
            overflow: hidden;
            // margin: auto;
            
            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }


    }
}


</style>

<script setup>
import { onMounted, onBeforeUnmount, onUnmounted } from 'vue';



let scrollPosition = 0;

const saveScrollPosition = () => {
  scrollPosition = window.scrollY;
  localStorage.setItem('scrollPosition', scrollPosition.toString());
};

const restoreScrollPosition = () => {
  const storedPosition = localStorage.getItem('scrollPosition');
  if (storedPosition !== null) {
    scrollPosition = parseInt(storedPosition);
    window.scroll(0, scrollPosition);
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







</script>