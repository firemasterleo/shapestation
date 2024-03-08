<template>
    <div class="bodysection">
        <div class="section1">
            <div class="image">

<img src="../assets/shapestationimage6.jpg" alt="">
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
    <p>Our mission is simple: <br> To empower businesses with the necessary digital assets required to thrive in an ever-evolving digital landscape.</p>
    <div class="buttons">
        <button class="button">About us</button>
        <button class="button">Our Services</button>                
    </div>
</div>
<div class="herosliders">

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



</div>

</div>
            

        </div>
        <div class="backgroundvideosection">
            <div class="video">
                <video autoplay loop muted>
                    <source src="../assets/spinningworld.mp4" type="video/mp4"/>
                </video>

            </div>
            <div class="veil">

            </div>
            <div class="hero">
                <h1>
                    Welcome to shapesation 
                </h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.bodysection {
    height: 100rem;
    background-color: rgb(0, 0, 0);
    overflow-x: hidden;
    position: relative;
    z-index: -2;


    .section1 {
        position: relative;
        z-index: 0;
        .image {
        height: 45rem;
        width: 100%;
        position: absolute;
        z-index: -1;
        // border: solid green;

        img {
            height: 100%;
            width: 100%;
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
    }


    .backgroundvideosection {
        // height: 60vh;
        overflow-x: hidden;
        position: fixed;
        z-index: -1;
        top: 5rem;
        width: 100vw;
        background-color: black;


        .video {
            height: 40rem;
            width: 100vw;
            margin: 1rem;
            position: absolute;
            left: -0.6rem;
            border: solid red;

            video {
                
                width: 100%;
                height: 100%;
                object-fit: cover;

            }
        }
        .veil {
            height: 70vh;
            
            width: 100%;
            background-color: rgba(0, 0, 0, 0.119);
            position: relative;
            z-index: 2;
            // top: 0;

        }
    }
}
</style>