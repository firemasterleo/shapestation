<template>
    <div class="bodysection">
        <div class="herosection">
            <div class="subsection1">

                <div class="div1">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
                <div class="div2">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
                <div class="div3">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
            </div>
            <div class="subsection2">

                <div class="div4">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
                <div class="div5">   
                    <h2>WARDROBE</h2>
                    <h2>KING</h2>
                </div>
                <div class="div6">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
            </div>
            <div class="subsection3">

                <div class="div7">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
                <div class="div8">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
                <div class="div9">   
                         <img src="../assets/shapestationimage6.jpg" alt="">
                </div>
            </div>
            
        </div>
        <footer></footer>
    </div>
</template>

<style lang="scss" scoped>
.bodysection {
    height: 100vh;
    padding-top: 1rem;
    overflow: hidden;

    .herosection {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        .subsection1 {
            // border: green solid;
            display: flex;
            gap: 0.2rem;
        margin-inline: 1rem;     
       }
        .subsection2 {
            // border: green solid;
            display: grid;
            justify-content: center;

            grid-template-columns: 1fr 1fr 1fr;
            gap: 0.2rem;
        margin-inline: 1rem;     

        .div5 {
            display: flex;
            flex-direction: column;
            margin-top: 5rem;
            h2 {
                font-size: 21px;
                color: rgba(44, 41, 41, 0.548);
                text-align: center;
            }

                }
       }
        .subsection3 {
            // border: green solid;
            display: flex;
            gap: 0.2rem;
        margin-inline: 1rem;     
       }


        // column-gap: 0.5rem;

        div {
            border-radius: 0.5rem;

            height: 13rem;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

</style>