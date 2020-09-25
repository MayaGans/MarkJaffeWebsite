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
          <img src={list} alt="Social media {list}" class="glow"/>
      {/each}
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>

  .section {
    background-color: #D0D0D0;
  }
  .social-icons img {
    width: 30%;
  }

  .custom-text {
    font-family: 'Cormorant' !important;
  }

  .glow {
    box-shadow: 0 0 10px 2px #00AEEF;
  }

</style>