import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <svg
        className="cs-wave desktop"
        style={{ transform: "rotate(180deg)" }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1920 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 300C300 350 700 350 1000 300C1300 250 1600 250 1920 300V500H0V300Z"
          fill="#fff"
        ></path>
      </svg>
    </div>
  )
}

export default Footer