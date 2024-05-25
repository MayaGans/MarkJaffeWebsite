<script>
  export let bannerData = {};
  const { HEADING, DECRIPTION, TUTORIAL_URL, WATCH_TUTORIAL } = bannerData;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section class="black" id="banner">
  <div class="container">
    <div class="custom-flex-row">
      <div class="left">
        <h1>Mark Jaffe, MD</h1>
        <p>{DECRIPTION}</p>
      </div>
      <img src="images/bannerphoto.png" alt="" class="img-fluid" />
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  section {
    padding-top: 5%;
    padding-bottom: 0px;
  }

  .custom-flex-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 0px 10%;
  }

  .img-fluid {
    width: 400px;
    /* box-shadow: 0 0 10px 2px #00AEEF; */
  }

  @media only screen and (max-width: 1000px) {
    .custom-flex-row {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }

  h1 {
    color: #D0D0D0 !important;
  }

  .black {
    background-image: linear-gradient(#374651, 10%, #061826) !important;
    color: #D0D0D0;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    /*margin-top: 100px; */
    text-transform: uppercase;
    color: #061826;
  }

</style>