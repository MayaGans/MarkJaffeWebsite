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
        <div class="col-md-3 service">
          <img src={list.URL} alt={list.LABEL} class="service-img" />
          <h3 class="label">{list.LABEL}</h3>
          <p>{list.DESCRIPTION}</p>
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
    background-color:  #1F2E4B !important;
    color:  #D0D0D0;
    font-weight: 100;
  }

  .label {
    padding-top: 20px;
  }

  p {
    font-size: 0.8em !important;
  }

  h1, h2, h3, h4 {
    color:  #D0D0D0;
  }

  .service-img {
    width: 200px;
    height: 200px;
    margin-top: 20px;
  }

  .service h4 {
    padding: 5px;
    margin-top: 25px;
    text-transform: uppercase;
  }

  .title {
    text-transform: uppercase;
    color: #D0D0D0;
  }

  .title::before {
    content: "";
    background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
    height: 5px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transform: translateY(60px);
  }

  .title::after {
    content: "";
    background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
    height: 10px;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    display: block;
    transform: translateY(14px);
  }

  section .btn-primary {
    box-shadow: none;
    padding: 8px 25px;
    border: none;
  }
</style>