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

  .centered {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .section {
    background-color: #D0D0D0 ;
    font-size: 12px;
  }

  .testimonial {
    border-left: 4px solid #00AEEF;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #D0D0D0 ;
    color: #1F2E4B;
  }

  a:hover {
    text-decoration: none;
    color: #00AEEF;
  }

  a {
    color: black;
  }

  .testimonial img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 0 10px;
  }

  .user-details {
    display: inline-block;
    font-size: 12px;
  }
</style>