<script>
  export let footerData = {};
  export let header = "";
  const {
    DESCRIPTION,
    CONTACT_DETAILS,
    SUBSCRIBE_NEWSLETTER,
    SUBSCRIBE
  } = footerData;
  const { HEADING, ADDRESS, MOBILE, EMAIL } = CONTACT_DETAILS;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="footer">
  <div class="container">
    <div class="left">
      9900 Stirling Rd #102 
      <br/>
      Hollywood, FL 33024
      <br/>
      (954) 441-9995
    </div>
    <img src="images/logo-aara.png" alt="aara-logo" class="right logo"/>
  </div>
</section>
<!------------------------------------------->
<!----------------Style----------------------->
<!------------------------------------------->
<style>

  #footer {
    background-color: #D0D0D0;
    color: #1F2E4B;
  }

  .footer-title {
    font-weight: bold;
    text-transform: uppercase;
  }

  .container {
    padding: 10px 0px 10px 0px;
    height: 100px;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .logo {
    width: 10%;
    padding-top: 10px;
  }

  .footer-box button {
    margin-top: 30px;
  }

  .round-border {
    border-radius: 20px !important;
  }
</style>