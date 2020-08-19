<template>
    <div id="navigation">
        <div class="container">
            <nav class="navbar navbar-light navbar-expand-md text-center" id="navBar">
                <div class="container-fluid">
                    <nuxt-link class="navbar-brand text-white" :to="{name: 'index'}">Produce Haven | Blog</nuxt-link>
                    <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
                        <span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse" id="navcol-1">
                        <ul class="nav navbar-nav ml-auto" id="li-color">
                            <li class="nav-item" role="presentation">
                                <nuxt-link class="nav-link text-white" :to="{name: 'index'}">Posts📄</nuxt-link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <nuxt-link class="nav-link text-white" :to="{name: 'request-post'}">Request a post✍🏽</nuxt-link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active text-white" target="_blank" rel="noopener noreferrer" href="https://twitter.com/kintsugi_boy">DM us!😊</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<style>
    #navigation {
        background-color: #4DCB00;
    }
    #navBar {
        padding: 15px 10px 10px 0px;
    }
    @media (max-width: 414px) {
        #navBar {
            padding: 10px;
        }
    }
</style>