<script>
  export let navlists = [];
  export let header;
  console.log(navlists);
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="nav-bar">
  <nav class="navbar navbar-expand-md navbar-dark">
    <a class="navbar-brand company_brand" href="/">
      {header}
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        {#each navlists as list}
          <li class="nav-item">
            <a class="nav-link light-color" href={list.url}>{list.label}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  #nav-bar {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #00AEEF !important;
    color: #1F2E4B !important;
  }

  a.nav-link.light-color {
    color: #1F2E4B !important;
  }

  section#nav-bar {
    padding: 20px !important;
}

  .navbar {
    padding: 0 20px !important;
  }

  .navbar-brand {
    color: #1F2E4B !important;
  }

  .navbar-nav li {
    padding: 0 0 0 20px;
  }

  .navbar-nav li a {
    font-weight: 600;
    text-transform: uppercase;
    float: right;
    text-align: left;
  }

  .navbar-nav a:hover {
    color: black !important;
    font-weight: 900 !important;
  }

  a:hover {
    font-weight: 900 !important;
  }
</style>