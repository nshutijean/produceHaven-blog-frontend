<template>
  <div>
    <div class="hero" style="background-color: #4DCB00;">
      <div class="container">
        <div class="row" id="hero-title">
          <div class="col">
            <h2 class="text-left text-white mt-4" style="padding-left: 28px;">
              Welcome to {{ post.author.name }}'s blog post<br/>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="content">
        <div class="row" id="hero-paragraph">
          <div class="col" style="margin: 0;">
            <div class="post">
              <p id="title">{{ post.title }}</p>
              <p id="content">{{ post.content }}<br/><br/></p>
              <p id="author">Author</p>
              <span>
                {{ post.author.name }} | {{ post.author.career }} | Twitter:
                <a :href="`htpps://twitter.com/${post.author.social}`" id="twitter">
                  {{post.author.social}}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,

    };
  },
  computed: {
    post() {
      return this.$store.state.posts.all.find(post => post.id === this.id);
    }
  }
};
</script>

<style scoped>
a {
  opacity: .4;
}
a:hover {
  opacity: .9;
}
.hero {
  /*background-color: rgb(86,35,170);*/
  height: 250px;
}

.hero h2 {
  margin-bottom: 50px;
}

#hero-paragraph {
  /*max-width: 922px;*/
  /*margin: auto;*/
}

#hero-paragraph {
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 15px 15px 0px #bfbfbf;
  max-width: 1070px;
  margin: auto;
  margin: -142px 20px 0px 20px;
  z-index: -1;
}

.hero #hero-title {
  margin-left: -26px;
}

#hero-paragraph #author {
  opacity: 0.4;
  margin-bottom: 0px;
}

#hero-paragraph #title {
  font-size: 25px;
  opacity: 0.6;
  font-weight: 600;
}

ul li {
  list-style: none;
  display: inline-block;
  /*margin: 5px 11px 0px 36px;*/
}

@media (max-width: 414px) {
  #navBar {
    padding: 10px 10px 0px 10px;
  }
}

@media (max-width: 414px) {
  .hero h2 {
    margin-left: -6px;
    margin-bottom: 22px;
    font-size: 29px;
  }
}

@media (max-width: 414px) {
  #hero-paragraph {
    margin: -140px 6px 0px 6px;
  }
}
</style>
