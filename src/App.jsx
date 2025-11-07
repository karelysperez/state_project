import {useState} from 'react'
import './App.css'

const images = [
    {
        src: 'https://picsum.photos/id/600/600/400',
        alt: 'Forest',
    },
    {
        src: 'https://picsum.photos/id/100/600/400',
        alt: 'Beach',
    },
    {
        src: 'https://picsum.photos/id/200/600/400',
        alt: 'Yak',
    },
    {
        src: 'https://picsum.photos/id/300/600/400',
        alt: 'Hay',
    },
    {
        src: 'https://picsum.photos/id/400/600/400',
        alt: 'Plants',
    },
    {
        src: 'https://picsum.photos/id/500/600/400',
        alt: 'Building',
    },
];

function App() {
  const [current, setCurrent] = useState(0);

  const total = images.length;

  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);
  const goTo = (index) => setCurrent(index);

  const { src, alt } = images[current]

  return (
    <div className="app-shell">

      <div className="carousel-container">

        <div className="carousel">

          <button onClick={prev} aria-label="Previous image" className="nav-button left"></button>

          <img src={src} alt={alt} className="carousel-image"/>

          <button onClick={next} aria-label="Next image" className="nav-button right"></button>
        </div>

        <div className="pager">
          {images.map((image, i) => (
              <button
                  key={image.src + i}
                  onClick={() => goTo(i)}
                  aria-current={i === current}
                  className={`dot${i === current ? " active" : ""}`}
              />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
