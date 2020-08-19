<template>
    <div class="container">
            <nuxt-link 
                :to="{name: 'posts-id', params:{id: post.id}}"
                class="row posts"
                v-for="post in posts"
                :key="post.id"
            >
                <div class="col-md-3" id="post-img">
                    <img class="img-fluid" :src="post.image">
                </div>
                <div class="col" id="post-desc">
                    <span>{{post.author.name}}</span>
                    <h4>{{post.title}}</h4>
                    <p>{{post.content}}</p>
                </div>
            </nuxt-link>
        </div>
</template>
<script>
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    computed: {
        posts() {
            return this.$store.state.posts.all;
        }
    },
}
</script>

<style>
    a {
        color: black;
    }
    a:hover {
        text-decoration: none;
        color: black;
    }
    .row.posts {
    background: white;
    border-radius: 18px;
    margin: 10px 20px 0px 20px;
    }

    img {
    border-radius: 25px;
    padding: 12px 0px 12px 0px;
    }

    #post-img img {
    object-fit: cover;
    width: 100%;
    height: 135px;
    }

    #post-desc {
    padding-top: 13px;
    }

    #post-desc span {
    color: #41A703;
    font-size: 17px;
    }

    #post-desc h4 {
    font-weight: 600;
    }
     #post-desc h4:hover {
        opacity: .6;
     }

    #post-desc p {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 40px;
    }

    .row.posts {
    box-shadow: 3px 3px 16px 5px #c4c4c4;
    }
</style>