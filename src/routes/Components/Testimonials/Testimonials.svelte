<script>
  export let testimonialData = {};
  const { HEADING, TESTIMONIAL_LIST } = testimonialData;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->

<section id="testimonials" class="section">
  <div class="container">
    <h2 class="title text-center">{HEADING}</h2>
    <div class="row offset-1 section-body">
      {#each TESTIMONIAL_LIST as list}
        <div class="col-md-5 testimonial">
          <p>{list.DESCRIPTION}</p>
          <p class="user-details">
            <a href={list.URL} target="_blank"><b>{list.NAME}</b></a>
          </p>
        </div>
      {/each}
    </div>
  </div>
  <div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>

  .title {
    color: #061826;
  }
  
  .section {
    background-color: #E8EBE4;
    font-size: 12px;
  }

  .testimonial {
    border-left: 4px solid #00AEEF;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #E8EBE4 ;
    color: #1F2E4B;
  }

  a:hover {
    text-decoration: none;
    color: #00AEEF;
  }

  a {
    color: black;
  }

  .user-details {
    display: inline-block;
    font-size: 12px;
  }
</style>