<script>
  export let navlists = [];
  console.log(navlists);
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="nav-bar">
  <nav class="navbar navbar-expand-md navbar-dark">
    <a class="navbar-brand company_brand" href="/">
      Dr. Mark Jaffe
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
    background-color: #E8EBE4 !important;
    color: #1F2E4B !important;
  }

  a.nav-link.light-color {
    color: #1F2E4B !important;
  }

  section#nav-bar {
    padding: 20px !important;
    font-weight: 300 !important;
}

  .navbar {
    padding: 0 20px !important;
  }

  .navbar-brand {
    color: #1F2E4B !important;
  }

  .navbar-nav li {
    padding: 0 0 0 20px;
    font-weight: 300 !important;
  }

  .navbar-nav li a {
    text-transform: uppercase;
    float: right;
    text-align: left;
    font-weight: 300 !important;
  }

  .navbar-nav a:hover {
    color: white  !important;
    font-weight: 400 !important;
  }

  a:hover {
    font-weight: 400 !important;
  }
</style>