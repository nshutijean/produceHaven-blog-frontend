<template>
    <div class="contact-clean">
      <!-- alerts if post is stored -->
      <template v-if="isStored === true">
        <div class="row al" id="green">
          <div class="col-md-12">
            <p>
              Your blog post request has been submitted.
            </p>
          </div>
        </div>
      </template>
    
        <form method="post">
            <h2 class="text-center">Request a post</h2>
            <div class="form-group">
                <input v-model="form.username" class="form-control" type="text" name="name" placeholder="Name" required>
            </div>
            <div class="form-group">
                <input v-model="form.career" class="form-control" type="text" name="career" placeholder="What you do" required>
            </div>
            <div class="form-group">
                <input v-model="form.socialMediaUrl" class="form-control" type="url" name="social" placeholder="Social Media URL" required>
            </div>
            <div class="form-group">
                <input v-model="form.title" class="form-control" type="text" name="title" placeholder="Your post's title" required>
            </div>
            <div class="form-group">
                <input v-model="form.imageUrl" class="form-control" type="url" name="image-url" placeholder="Post image url" required>
            </div>
            <div class="form-group">
                <textarea v-model="form.content" class="form-control" name="message" placeholder="Your post's content" rows="14" required></textarea>
            </div>
            <div class="form-group">
                <button class="btn" id="btn" type="submit" @click.prevent="store()">Request</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username:'',
                career:'',
                socialMediaUrl:'',
                title:'',
                imageUrl:'',
                content:'',
            },
            posts: [],
            isStored: false,
            headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json',
            }
        }
    },
    methods: {
        async store() {
          let username = this.form.username;
          let career = this.form.career;
          let socialMediaUrl = this.form.socialMediaUrl;
          let title = this.form.title;
          let imageUrl = this.form.imageUrl;
          let content = this.form.content;
        
          await this.$axios.$post('/blog-post', {username, career, socialMediaUrl, title, imageUrl, content}, {headers: this.headers})
          .then((res) => {
            this.post = res.data;
            this.isStored = true;
            this.checkStored();
            this.form = {};
            console.log(res.data);
          }).catch((err) => {
            console.log(err);
          });
        },
        checkStored() {
          setTimeout(() => {
            this.isStored = false;
          }, 2000);
        }
    },
}
</script>

<style>
.row.al {
  margin: 0 auto;
  max-width: 509px;
}
#green p {
  text-align: center;
  color: green;
  border: 2px solid;
  background: rgb(120,255,120);
  border-radius: 4px;
}
#red p {
  text-align: center;
  color: rgb(128, 0, 0);
  border: 2px solid;
  background: rgb(255, 140, 140);
  border-radius: 4px;
}
  #btn {
      background-color: #1F4F01;
      color: #DBD202;
  }
    .contact-clean {
  background:rgb(227,227,227);
  padding: 80px 0;
  padding-top: 40px;
  padding-bottom: 20px;
}

@media (max-width:414px) {
  .contact-clean {
    margin-top: 5px;
  }
}

@media (max-width:767px) {
  .contact-clean {
    padding: 20px 0;
  }
}

.contact-clean form {
  max-width: 480px;
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 4px;
  color: #505e6c;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
}

@media (max-width:767px) {
  .contact-clean form {
    padding: 30px;
  }
}

.contact-clean h2 {
  margin-top: 5px;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 36px;
  color: inherit;
}

.contact-clean .form-group:last-child {
  margin-bottom: 5px;
}

.contact-clean form .form-control {
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.05);
  outline: none;
  color: inherit;
  padding-left: 12px;
  height: 42px;
}

.contact-clean form .form-control:focus {
  border: 1px solid #b2b2b2;
}

.contact-clean form textarea.form-control {
  min-height: 100px;
  max-height: 260px;
  padding-top: 10px;
  resize: vertical;
}

.contact-clean form .btn {
  padding: 16px 32px;
  border: none;
  background: none;
  box-shadow: none;
  text-shadow: none;
  opacity: 0.9;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 0.4px;
  line-height: 1;
  outline: none !important;
}

.contact-clean form .btn:hover {
  opacity: 1;
}

.contact-clean form .btn:active {
  transform: translateY(1px);
}

.contact-clean form .btn-primary {
  /* background-color: #055ada !important; */
  margin-top: 15px;
  color: #fff;
}

</style>