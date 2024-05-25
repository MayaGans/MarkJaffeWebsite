<script>
  export let socialData = {};
  const { IMAGES_LIST, HEADING } = socialData;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="social-media" class="section grey-bgcolor">
  <div class="container text-center">
    <div class="social-icons section-body">
      {#each IMAGES_LIST as list}
          <img src={list} alt="{list}" class="glow"/>
      {/each}
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>

  .section-body {
    width: 100%;
  }

  .section {
    background-color: #E8EBE4;
  }
  .social-icons img {
    width: 30%;
  }

  .glow {
    box-shadow: 0 0 10px 2px #00AEEF;
    margin: 10px;
  }

</style>