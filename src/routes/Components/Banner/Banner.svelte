<script>
  export let bannerData = {};
  const { HEADING, DECRIPTION, TUTORIAL_URL, WATCH_TUTORIAL } = bannerData;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section class="black" id="banner">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Mark Jaffe, MD</h1>
        <p>{DECRIPTION}</p>
      </div>
      <div class="col-md-6">
        <img src="images/about.png" alt="" class="img-fluid" />
      </div>
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  section {
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .img-fluid {
    width: 75%;
    box-shadow: 0 0 10px 2px #00AEEF;
  }

  h1 {
    color: #D0D0D0 !important;
  }

  .black {
    background-color: #061826  !important;
    color: #D0D0D0;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-top: 100px;
    text-transform: uppercase;
    color: #061826;
  }

</style>