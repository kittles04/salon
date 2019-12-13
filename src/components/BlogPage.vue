<template>
  <div class="blog">
    <p>{{greeting}}</p>
    <ul class="book-list">
      <li class="book-list-group-item" v-for="book in bestBooksList">{{ book.title}} - {{ book.author }} - {{book.description}} - {{ book.book_image}}</li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'BlogPage',
  data:function(){
    return{
      key: process.env.VUE_APP_KEY,
      greeting: 'Blog Page',
      bestBooksList:[]
    }
  },
    mounted: function(){
    this.$nextTick(function(){
            this.$http.get(`https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=${process.env.VUE_APP_KEY}`).then(response => {
              return response.json();
        }).then(data => {
          const resultArray = [];
          for(let key in data){
            resultArray.push(data[key]);
          }
          this.bestBooksList = resultArray[4].books;
          console.log(this.bestBooksList[4].books)
        });
      });
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
