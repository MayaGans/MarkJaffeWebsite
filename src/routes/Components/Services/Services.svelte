<script>
  export let serviceData = {};
  const { HEADING, ALL_SERVICES, SERVICE_LIST } = serviceData;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="services" class="section grey-bgcolor">
  <div class="container text-center">
    <h2>{HEADING}</h2>
    <div class="row section-body">
      {#each SERVICE_LIST as list}
        <div class="col-sm-6 service col-centered">
          <img src={list.URL} alt={list.LABEL} class="service-img" />
          <h3 class="label">{list.LABEL}</h3>
          <p>{list.DESCRIPTION}</p>
            {#if list.button !== null}
            <a href="https://www.gnpresearch.com" target="_blank">{list.button}</a>
            <br/>
            <br/>
            <p>AARA powered by Bendcare</p>
            <a href="https://aara.care/">AARA</a>
            <a href="https://www.bendcare.com/" target="_blank">BENDCARE</a>
            {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  .section {
    background-color:  #061826 !important;
    color:  #D0D0D0;
    font-weight: 100;
  }

  .col-centered{
    float: none;
    margin: 0 auto;
}

  h3 {
    font-size: 1.5em;
  }

  .label {
    padding-top: 20px;
  }
  p {
    font-size: 0.8em !important;
  }

  h2, h3 {
    color:  #D0D0D0;
  }

  .service-img {
    width: 25%;
    margin-top: 20px;
  }

  a {
    margin-top: 20px;
    text-decoration: none;
    color: black;
    background-color: #00d4ff;
    padding: 10px;
  }

  a:hover {
    color: black;
    background-color: white;
    text-decoration: none;
  }
</style>