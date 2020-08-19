<template>
    <div class="hero" style="background-color: #4DCB00;">
        <div class="col">
            <div class="row">
                <div class="col">
                    <h2 class="text-center text-white mt-4">Welcome to Our Foodlogg😁</h2>
                </div>
            </div>
            <div class="row" id="hero-paragraph">
                <div class="col">
                    <p class="text-center text-white mt-2">
                        This is a blog of Produce Haven, a realtime produce e-market that keeps and takes care of produces' quality right from the farm<br>
                    </p>
                </div>
            </div>
        </div>
        <div class="text-center mt-3" >
            <button class="btn btn-primary text-center" id="btn" type="button" style="padding: 8px 34px;">
                Shop with us
            </button>
        </div>
    </div>
</template>

<style>
    #btn{
    background-color: #1F4F01;
    color: #DBD202;
    border-radius: 20px;
    border-style: none;
    }

    #hero-paragraph {
    max-width: 800px;
    margin: auto;
    }

    .hero {
    background-color: #4DCB00;
    height: 237px;
    }

    @media (max-width: 414px) {
    .hero {
        height: 281px;
    }
    h2 {
        font-size: 24px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    }
</style>