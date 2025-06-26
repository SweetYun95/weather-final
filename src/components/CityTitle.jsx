import './css/CityTitle.css'

function CityTitle({ city }) {
   return (
      <div className="city-title">
         <h2>{city}의 주간 날씨</h2>
      </div>
   )
}

export default CityTitle
