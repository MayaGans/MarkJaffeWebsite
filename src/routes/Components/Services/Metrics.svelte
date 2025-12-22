<script>
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->

<section id="services2" class="section grey-bgcolor">

      <div class="abim-section">
        <div class="content-wrapper">
            <h2 class="abim-title">My ABIM Community</h2>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">32</div>
                    <div class="stat-label">Years certified</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-number">23.5%</div>
                    <div class="stat-label">Physicians certified<br/>as long as me or longer</div>
                    <div class="stat-detail">63,832 out of 270,000 ABIM Board Certified physicians.</div>
                </div>

                <div class="stat-card specialty-card">
                    <div class="stat-number-large">&lt;1%</div>
                    <div class="stat-label-large">Physicians with the same<br/>combination of certifications:</div>
                    <div class="specialty-name">Rheumatology</div>
                    <div class="stat-detail">2,065 out of 270,000 ABIM Board Certified physicians.</div>
                </div>
            </div>
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

     * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'SF Pro Display', sans-serif;
            background: #000000;
            color: #ffffff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
        }

        .abim-section {
            width: 100%;
            max-width: 1400px;
            padding: 100px 60px;
            position: relative;
        }

        /* Gradient background blur effect */
        .abim-section::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -25%;
            width: 150%;
            height: 200%;
            background: radial-gradient(ellipse at center, rgba(26, 107, 143, 0.15) 0%, transparent 70%);
            filter: blur(80px);
            pointer-events: none;
            z-index: 0;
        }

        .content-wrapper {
            position: relative;
            z-index: 1;
        }

        .abim-title {
            font-size: 3.5em;
            font-weight: 700;
            margin-bottom: 80px;
            text-align: center;
            letter-spacing: -1px;
            background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-bottom: 30px;
        }

        .stat-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(40px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            padding: 60px 40px;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 420px;
        }

        .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(26, 107, 143, 0.1) 0%, transparent 50%);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .stat-card:hover {
            transform: translateY(-8px);
            border-color: rgba(255, 255, 255, 0.15);
            background: rgba(255, 255, 255, 0.05);
        }

        .stat-card:hover::before {
            opacity: 1;
        }

        .stat-number {
            font-size: 5em;
            font-weight: 700;
            background: linear-gradient(135deg, #1a6b8f 0%, #00d4ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
            line-height: 1;
            letter-spacing: -2px;
        }

        .stat-label {
            font-size: 1.3em;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
            margin-bottom: 20px;
            line-height: 1.4;
            letter-spacing: -0.3px;
        }

        .stat-detail {
            font-size: 0.95em;
            color: rgba(255, 255, 255, 0.5);
            font-weight: 400;
            line-height: 1.6;
            margin-top: 20px;
        }

        .specialty-card {
            padding: 60px 40px;
        }

        .stat-number-large {
            font-size: 5em;
            font-weight: 700;
            background: linear-gradient(135deg, #1a6b8f 0%, #00d4ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
            line-height: 1;
            letter-spacing: -3px;
        }

        .stat-label-large {
            font-size: 1.3em;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
            margin-bottom: 20px;
            line-height: 1.4;
            letter-spacing: -0.3px;
        }

        .specialty-name {
            font-size: 2.2em;
            font-weight: 700;
            background: linear-gradient(135deg, #f39c12 0%, #ffb347 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 25px 0;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        /* Ambient light effects */
        .stat-card:nth-child(1)::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(26, 107, 143, 0.2) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
        }

        .stat-card:nth-child(1):hover::after {
            opacity: 1;
        }

        @media (max-width: 968px) {
            .abim-title {
                font-size: 2.5em;
                margin-bottom: 50px;
            }

            .stats-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .stat-card {
                padding: 50px 35px;
                min-height: 350px;
            }

            .specialty-card {
                padding: 50px 35px;
            }

            .stat-number {
                font-size: 4em;
            }

            .stat-number-large {
                font-size: 4em;
            }

            .stat-label,
            .stat-label-large {
                font-size: 1.2em;
            }

            .specialty-name {
                font-size: 1.8em;
            }

            .abim-section {
                padding: 60px 30px;
            }
        }

        @media (max-width: 640px) {
            .abim-title {
                font-size: 2em;
            }

            .stat-number {
                font-size: 3em;
            }

            .stat-number-large {
                font-size: 3.5em;
            }

            .specialty-name {
                font-size: 1.5em;
            }
        }
  

</style>