<template>
    <div class="bodysection">
        <div class="herosection">
    <div class="container1">
        
    </div>
    <div class="container2">

    </div>
    <div class="container3">

    </div>
                       
        </div>
        <footer>
            <div class="leftsection">
                
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
.bodysection {
    height: fit-content;
    width: 100vw;
    // padding-top: 1rem;
    overflow: hidden;
    padding-inline: 1.5rem;
    background-color: rgb(86, 78, 78);

    .herosection {
        height: fit-content;
        padding-bottom: 2rem;
        // width: 100vw;
        // border: solid red;
        background-color: white;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        
        
        
        
        h1 {
            
            font-size: 20px;
        }

        .container1 {
            border: solid blue 1px;
            height: 20rem;
            border-radius: 1rem;
            background-color: grey;


        }
        .container2 {
            border: solid blue 1px;
            height: 20rem;
            border-radius: 1rem;
            background-color: grey;



        }
        .container3 {
            border: solid blue 1px;
            height: 20rem;
            border-radius: 1rem;
            background-color: grey;


        }

    }
}

</style>