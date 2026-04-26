import './style.css'
import survivalPoster from '../how_bunnies_survive.png'
import bunnyMeadow from './assets/bunny-meadow.png'

const survivalFacts = [
  {
    icon: 'EAR',
    title: 'Super listening ears',
    copy:
      'Big ears help bunnies notice danger early, and those ears also help them stay cool on warm days.',
  },
  {
    icon: 'ZIG',
    title: 'Zoomy zigzags',
    copy:
      'When a bunny is chased, strong back legs can carry it in quick, twisty hops toward a hiding place.',
  },
  {
    icon: 'HOME',
    title: 'Secret hidey-homes',
    copy:
      'Some rabbits live in burrows called warrens, while many cottontails hide in grass, brush, or shallow nests.',
  },
  {
    icon: 'NIB',
    title: 'Nibble smart',
    copy:
      'Bunnies eat grasses and soft plants, often feeding near cover so they can pop back to safety fast.',
  },
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="page-shell">
    <section class="hero" aria-labelledby="site-title">
      <img class="hero-art" src="${bunnyMeadow}" alt="Two cheerful bunnies in a sunny meadow beside a burrow and rainbow." />
      <div class="rainbow-ribbons" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="sparkle-field" aria-hidden="true">
        ${Array.from({ length: 36 }, (_, index) => `<i style="--i:${index}"></i>`).join('')}
      </div>
      <div class="hero-copy">
        <p class="kicker">Made especially for Olive</p>
        <h1 id="site-title" aria-label="Olive's Best Website">
          ${"olive's best website"
            .split('')
            .map((letter, index) =>
              letter === ' '
                ? '<span class="gap" aria-hidden="true"></span>'
                : `<span style="--letter:${index}">${letter}</span>`,
            )
            .join('')}
        </h1>
        <p class="intro">
          A rainbow-sparkle adventure about how bunnies listen, hide, hop, and nibble their way through the world.
        </p>
        <button class="sparkle-button" type="button">More sparkles!</button>
      </div>
    </section>

    <section class="fact-strip" aria-label="Bunny survival facts">
      ${survivalFacts
        .map(
          (fact) => `
          <article class="fact-card">
            <div class="fact-icon" aria-hidden="true">${fact.icon}</div>
            <h2>${fact.title}</h2>
            <p>${fact.copy}</p>
          </article>
        `,
        )
        .join('')}
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
      <img src="${survivalPoster}" alt="A colorful illustrated guide called how bunnies survive." />
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
`

const sparkleButton = document.querySelector<HTMLButtonElement>('.sparkle-button')
const sparkleField = document.querySelector<HTMLDivElement>('.sparkle-field')

sparkleButton?.addEventListener('click', () => {
  sparkleField?.classList.remove('burst')
  window.requestAnimationFrame(() => {
    sparkleField?.classList.add('burst')
  })
})
