<script>
  export let aboutData = {};
  const { HEADING, TITLE, IMAGE_URL, WHY_CHOOSE_US_LIST } = aboutData;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="about-us" class="section grey-bgcolor">
  <div class="container">
    <h2 class="title text-center">{HEADING}</h2>
    <div class="row section-body">
      <div class="col-md-6">
        <p>
          Dr. Mark Jaffe is a Board Certified Rheumatologist who has been practicing in South Florida for over 20 years. After completing a fellowship at New York Medical College, Dr. Jaffe practiced rheumatology in New York before moving to Florida.

          <br/>
          <br/>
        Known for his medical expertise and his unbound energy, Dr. Jaffe enjoys the reputation of being the “Doctor who listens.” Giving his patients the attention and the time they deserve, Dr. Jaffe tailors a specific treatment plan for each patient, employing the most contemporary modalities available.


        </p>
      </div>
      <div class="col-md-6">
        <img src={IMAGE_URL} alt="" class="img-fluid" />
      </div>
    </div>
  </div>
</section>

<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>

  .img-fluid {
    width: 50%;
    display:block;
    margin:auto;
  }

  .section {
    background-color: #1F2E4B   !important;
    color: #D0D0D0;
  }

  h2 {
    color: #D0D0D0;
  }
</style>