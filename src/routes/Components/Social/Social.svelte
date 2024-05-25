<script>
  export let socialData = {};
  const { IMAGES_LIST, HEADING } = socialData;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="social-media" class="section grey-bgcolor">
  <div class="container text-center">
    <div class="social-icons section-body">
      {#each IMAGES_LIST as list}
      <div class="img-gradient">
        <img src={list} alt="{list}"/>
      </div>
      {/each}
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>

  .section-body {
    width: 100%;
  }

  .section {
    background-color: #E8EBE4;
  }
  .social-icons {
    display: grid;
    grid-template-columns: auto auto;
    grid-row: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .social-icons img {
    max-width: 300px;
  }

  .img-gradient {
  position:relative;
  display:inline-block;
}

/* 
#002f4b,#dc4225 
Convert HEX to RGBA - http://hex2rgba.devoth.com/
*/
.img-gradient:after {
  content:'';
  position:absolute;
  left:0; top:0;
  width:100%; height:100%;
  display:inline-block;
  background: -moz-linear-gradient(top, rgba(0,47,75,0.0) 0%, rgba(6,24,38,0.7) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,rgba(6,24,38,0.7)), color-stop(100%,rgba(0,47,75,0.5))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, rgba(0,47,75,0.0) 0%, rgba(6,24,38,0.7) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(0,47,75,0.0) 0%, rgba(6,24,38,0.7) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(0,47,75,0.0) 0%,rgba(6,24,38,0.7) 100%); /* IE10+ */
  background: linear-gradient(to bottom, rgba(0,47,75,0.0) 0%,rgba(6,24,38,0.7) 100%); /* W3C */
}

.img-gradient {
  display: block;
}

@media only screen and (max-width: 800px) {
    .social-icons {
      flex-direction: column;
      flex-wrap: wrap;
      grid-row: 1;
      grid-template-columns: 1fr;
      max-width: max-content;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }

</style>