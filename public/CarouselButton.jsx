import './CarouselButton.css'

const CarouselButton = ({ direction, onClick, ariaLabel }) => {
  return (
    <button 
      onClick={onClick} 
      aria-label={ariaLabel} 
      className={`carousel-button ${direction}`}
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        {direction === 'left' ? (
          <path d="m15 18-6-6 6-6" />
        ) : (
          <path d="m9 18 6-6-6-6" />
        )}
      </svg>
    </button>
  )
}

export default CarouselButton
