<script>
  import Instagram from "$lib/icons/Instagram.svelte";
  import YouTube from "$lib/icons/YouTube.svelte";
</script>

  <!------------------------------------------->
  <!----------------MARKUP----------------------->
  <!------------------------------------------->
  
  <section id="news" class="section">
      <div class="centered">
        <h2 class="title text-center">Media Appearances</h2>

<div class="icon-container">
            <a
  href="https://www.instagram.com/gnpresearch/?hl=en"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <Instagram size={50} />
</a>

    <a
  href="https://www.youtube.com/watch?v=VtCKWmftkaM"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <YouTube size={50} />
</a>
</div>


      </div>
  </section>

  <!------------------------------------------->
  <!----------------STYLE----------------------->
  <!------------------------------------------->
  <style>
  
    iframe {
      max-width: 500px;
    }
    .centered {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  
    .section {
      background-color: #061826;
      font-size: 12px;
    }

    .icon-container {
      display: flex;
      gap: 10px;
    }
  
  </style>