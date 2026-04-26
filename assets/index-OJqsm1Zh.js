(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/olives_website/assets/how_bunnies_survive-DIPZCCP-.png`,t=`/olives_website/assets/bunny-meadow-U4bUD9eb.png`,n=[{icon:`EAR`,title:`Super listening ears`,copy:`Big ears help bunnies notice danger early, and those ears also help them stay cool on warm days.`},{icon:`ZIG`,title:`Zoomy zigzags`,copy:`When a bunny is chased, strong back legs can carry it in quick, twisty hops toward a hiding place.`},{icon:`HOME`,title:`Secret hidey-homes`,copy:`Some rabbits live in burrows called warrens, while many cottontails hide in grass, brush, or shallow nests.`},{icon:`NIB`,title:`Nibble smart`,copy:`Bunnies eat grasses and soft plants, often feeding near cover so they can pop back to safety fast.`}];document.querySelector(`#app`).innerHTML=`
  <main class="page-shell">
    <section class="hero" aria-labelledby="site-title">
      <img class="hero-art" src="${t}" alt="Two cheerful bunnies in a sunny meadow beside a burrow and rainbow." />
      <div class="rainbow-ribbons" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="sparkle-field" aria-hidden="true">
        ${Array.from({length:36},(e,t)=>`<i style="--i:${t}"></i>`).join(``)}
      </div>
      <div class="hero-copy">
        <p class="kicker">Made especially for Olive</p>
        <h1 id="site-title" aria-label="Olive's Best Website">
          ${`olive's best website`.split(``).map((e,t)=>e===` `?`<span class="gap" aria-hidden="true"></span>`:`<span style="--letter:${t}">${e}</span>`).join(``)}
        </h1>
        <p class="intro">
          A rainbow-sparkle adventure about how bunnies listen, hide, hop, and nibble their way through the world.
        </p>
        <button class="sparkle-button" type="button">More sparkles!</button>
      </div>
    </section>

    <section class="fact-strip" aria-label="Bunny survival facts">
      ${n.map(e=>`
          <article class="fact-card">
            <div class="fact-icon" aria-hidden="true">${e.icon}</div>
            <h2>${e.title}</h2>
            <p>${e.copy}</p>
          </article>
        `).join(``)}
    </section>

    <section class="survival-poster" aria-labelledby="poster-title">
      <div class="poster-copy">
        <p class="label">Olive's bunny guide</p>
        <h2 id="poster-title">How bunnies survive</h2>
        <p>
          This picture guide shows the big survival ideas: hide near safe places, listen for danger, move quickly, and keep
          finding tasty plants.
        </p>
      </div>
      <img src="${e}" alt="A colorful illustrated guide called how bunnies survive." />
    </section>

    <section class="burrow-band">
      <div class="bunny-stage" aria-hidden="true">
        <div class="hopping-bunny">
          <span class="ear ear-left"></span>
          <span class="ear ear-right"></span>
          <span class="body"></span>
          <span class="tail"></span>
          <span class="foot foot-front"></span>
          <span class="foot foot-back"></span>
        </div>
        <div class="grass grass-one"></div>
        <div class="grass grass-two"></div>
        <div class="burrow"></div>
      </div>
      <div class="learning-copy">
        <p class="label">Tiny research corner</p>
        <h2>What Wikipedia says bunnies do to survive</h2>
        <p>
          Wikipedia describes rabbit ears as useful for detecting predators, European rabbits as living in burrow systems called
          warrens, and cottontails as using speed, cover, and zigzag escapes. Olive version: listen carefully, stay near a cozy
          hideout, and hop-hop-wiggle away!
        </p>
        <a href="https://en.wikipedia.org/wiki/Rabbit" target="_blank" rel="noreferrer">Rabbit research</a>
        <a href="https://en.wikipedia.org/wiki/European_rabbit" target="_blank" rel="noreferrer">Burrow research</a>
      </div>
    </section>
  </main>
`;var r=document.querySelector(`.sparkle-button`),i=document.querySelector(`.sparkle-field`);r?.addEventListener(`click`,()=>{i?.classList.remove(`burst`),window.requestAnimationFrame(()=>{i?.classList.add(`burst`)})});