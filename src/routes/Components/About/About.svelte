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
    <div class="flex-2 about1">
      <div>
        <p>
          Dr. Mark Jaffe is a Board Certified Rheumatologist who has been practicing 
          in South Florida for over 20 years. After completing a fellowship at New York Medical College, 
          Dr. Jaffe practiced rheumatology in New York before moving to Florida.
        </p>
  
        <p>
          Known for his medical expertise and his unbound energy, 
          Dr. Jaffe enjoys the reputation of being the “Doctor who listens.” 
          Giving his patients the attention and the time they deserve, 
          Dr. Jaffe tailors a specific treatment plan for each patient, 
          employing the most contemporary modalities available.
        </p>
      </div>
      <img src={IMAGE_URL} alt="" class="img-fluid" />
    </div>
  </div>
</section>

<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>

  .flex-2 {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  @media only screen and (max-width: 800px) {
    .flex-2 {
      grid-template-columns: auto;
      grid-template-rows: auto;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    .img-fluid  {
      max-width: 50%;
      margin: 0 auto;
    }

    .about1 {
      text-align: center !important;
    }
  }

  .about1 {
    text-align: right;
    font-size: 0.9rem;
  }

  .section {
    background-color: #061826  !important;
    color: #D0D0D0;
  }

  h2 {
    color: #D0D0D0;
  }
</style>