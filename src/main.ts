import confetti from 'canvas-confetti'
import './style.css'
import bunnySong from '../bunny_song.m4a'
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
            .split(' ')
            .map(
              (word, wordIndex) =>
                `<span class="title-word">${word
                  .split('')
                  .map((letter, letterIndex) => {
                    const index = wordIndex * 8 + letterIndex
                    return `<span style="--letter:${index}">${letter}</span>`
                  })
                  .join('')}</span>`,
            )
            .join('')}
        </h1>
        <p class="intro">
          A rainbow-sparkle adventure about how bunnies listen, hide, hop, and nibble their way through the world.
        </p>
        <div class="hero-actions">
          <button class="sparkle-button" type="button">More sparkles!</button>
          <div class="music-player" aria-label="Bunny song controls">
            <audio class="bunny-audio" src="${bunnySong}" preload="metadata" loop></audio>
            <button class="music-button play-button" type="button" aria-label="Play bunny song">Play song</button>
            <button class="music-button mute-button" type="button" aria-label="Mute bunny song">Mute</button>
            <label class="volume-control">
              <span>Volume</span>
              <input class="volume-slider" type="range" min="0" max="1" step="0.01" value="0.65" aria-label="Bunny song volume" />
            </label>
          </div>
        </div>
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
const bunnyAudio = document.querySelector<HTMLAudioElement>('.bunny-audio')
const playButton = document.querySelector<HTMLButtonElement>('.play-button')
const muteButton = document.querySelector<HTMLButtonElement>('.mute-button')
const volumeSlider = document.querySelector<HTMLInputElement>('.volume-slider')

const launchSparkles = () => {
  const sparkleColors = ['#ff5e9c', '#ffd166', '#57d5c8', '#7a77ff', '#ffffff']
  const sparkleShapes = ['star', 'circle'] as confetti.Shape[]

  confetti({
    particleCount: 180,
    spread: 115,
    startVelocity: 48,
    scalar: 1.1,
    ticks: 240,
    shapes: sparkleShapes,
    colors: sparkleColors,
    origin: { x: 0.5, y: 0.38 },
  })

  confetti({
    particleCount: 110,
    angle: 55,
    spread: 75,
    startVelocity: 62,
    scalar: 0.95,
    shapes: sparkleShapes,
    colors: sparkleColors,
    origin: { x: 0.05, y: 0.72 },
  })

  confetti({
    particleCount: 110,
    angle: 125,
    spread: 75,
    startVelocity: 62,
    scalar: 0.95,
    shapes: sparkleShapes,
    colors: sparkleColors,
    origin: { x: 0.95, y: 0.72 },
  })

  window.setTimeout(() => {
    confetti({
      particleCount: 160,
      spread: 160,
      startVelocity: 34,
      gravity: 0.7,
      scalar: 0.8,
      ticks: 260,
      shapes: sparkleShapes,
      colors: sparkleColors,
      origin: { x: Math.random() * 0.5 + 0.25, y: 0.18 },
    })
  }, 180)
}

sparkleButton?.addEventListener('click', () => {
  sparkleField?.classList.remove('burst')
  window.requestAnimationFrame(() => {
    sparkleField?.classList.add('burst')
  })
  launchSparkles()
})

if (bunnyAudio && playButton && muteButton && volumeSlider) {
  bunnyAudio.volume = Number(volumeSlider.value)

  const updateMusicButtons = () => {
    playButton.textContent = bunnyAudio.paused ? 'Play song' : 'Pause song'
    playButton.setAttribute('aria-label', bunnyAudio.paused ? 'Play bunny song' : 'Pause bunny song')
    muteButton.textContent = bunnyAudio.muted || bunnyAudio.volume === 0 ? 'Unmute' : 'Mute'
    muteButton.setAttribute('aria-label', bunnyAudio.muted ? 'Unmute bunny song' : 'Mute bunny song')
  }

  playButton.addEventListener('click', async () => {
    if (bunnyAudio.paused) {
      await bunnyAudio.play()
    } else {
      bunnyAudio.pause()
    }
    updateMusicButtons()
  })

  muteButton.addEventListener('click', () => {
    bunnyAudio.muted = !bunnyAudio.muted
    updateMusicButtons()
  })

  volumeSlider.addEventListener('input', () => {
    bunnyAudio.volume = Number(volumeSlider.value)
    bunnyAudio.muted = bunnyAudio.volume === 0
    updateMusicButtons()
  })

  bunnyAudio.addEventListener('play', updateMusicButtons)
  bunnyAudio.addEventListener('pause', updateMusicButtons)
  updateMusicButtons()
}
