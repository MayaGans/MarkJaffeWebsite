<script>
  export let recipeData = {};
  const { HEADING, ALL_RECIPES, RECIPE_LIST } = recipeData;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="dinners" class="section">
  <div class="container text-center">
    <h1>{HEADING}</h1>
    <h5>Select a dinner to get the recipe</h5>
    <div class="row section-body">
      {#each RECIPE_LIST as list}
        <div class="col-md-3 service">
          <img src={list.URL} alt={list.LABEL} class="service-img" />
          <a href={list.LINK} target="_blank"><p class="listlabel">{list.LABEL}</p></a>
        </div>
      {/each}
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  .service-img {
    width: 50px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .listlabel {
    font-weight: 500 !important;
  }
  
  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: none;
    color: black;
    letter-spacing: 3px; 
  }

  p {
    font-size: 12px;
  }

  section {
    padding-top: 50px;
  }

</style>