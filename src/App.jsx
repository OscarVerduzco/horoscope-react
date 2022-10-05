import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useCallback } from "react";

//
const zodiacImg = {
  Capricorn: 'src/assets/img/capricornio.png',
  Aquarius: 'src/assets/img/aquario.png',
  Pisces: 'src/assets/img/piscis.png',
  Aries: 'src/assets/img/aries.png',
  Taurus: 'src/assets/img/tauro.png',
  Gemini: 'src/assets/img/geminis.png',
  Cancer: 'src/assets/img/cancer.png',
  Leo: 'src/assets/img/leo.png',
  Virgo: 'src/assets/img/virgo.png',
  Libra: 'src/assets/img/libra.png',
  Scorpio: 'src/assets/img/scorpio.png',
  Sagittarius: 'src/assets/img/sagitario.png',
  
}

const horoscope = {
  Capricorn: 'Este sera un buen dia para ti',
  Aquarius: 'Este no sera un buen dia para ti',
  Pisces: 'Es muy probable que tu ex te extrañe y te ira muy bien',
  Aries: 'Esta semana recibiras buenas noticias',
  Taurus: 'Esta semana recibiras malas noticias',
  Gemini: 'Hoy es un buen dia para los negocios',
  Cancer: 'Hoy es un mal dia para los negocios',
  Leo: 'El amor esta en el aire',
  Virgo: 'Deberias cuidarte mas',
  Libra: 'Trata de ser mas positivo',
  Scorpio: 'Intenta conocer a mas gente',
  Sagittarius: 'No te preocupes por el futuro'
}

function App() {
  const [zodiacSign, setZodiacSign] = useState('')
  const [zodiacImgUrl, setZodiacImgUrl] = useState('')
  const [zodiacHoroscope, setZodiacHoroscope] = useState('')
  
  


  // Function to calculate the zodiac sign from the date of birth
  const handleFormChange = (e) => {
    const date = new Date(e.target.value)
    const month = date.getMonth()
    const day = date.getDate()
    

    if ((month === 0 && day <= 20) || (month === 11 && day >= 22)) {
      setZodiacSign('Capricornio')
      setZodiacImgUrl(zodiacImg.Capricorn)
      setZodiacHoroscope(horoscope.Capricorn)
    }
    if ((month === 0 && day >= 21) || (month === 1 && day <= 18)) {
      setZodiacSign('Aquario')
      setZodiacImgUrl(zodiacImg.Aquarius)
      setZodiacHoroscope(horoscope.Aquarius)
    }
    if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
      setZodiacSign('Piscis')
      setZodiacImgUrl(zodiacImg.Pisces)
      setZodiacHoroscope(horoscope.Pisces)
    }
    if ((month === 2 && day >= 21) || (month === 3 && day <= 20)) {
      setZodiacSign('Aries')
      setZodiacImgUrl(zodiacImg.Aries)
      setZodiacHoroscope(horoscope.Aries)
    }
    if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
      setZodiacSign('Tauro')
      setZodiacImgUrl(zodiacImg.Taurus)
      setZodiacHoroscope(horoscope.Taurus)
    }
    if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
      setZodiacSign('Geminis')
      setZodiacImgUrl(zodiacImg.Gemini)
      setZodiacHoroscope(horoscope.Gemini)
    }
    if ((month === 5 && day >= 22) || (month === 6 && day <= 22)) {
      setZodiacSign('Cancer')
      setZodiacImgUrl(zodiacImg.Cancer)
      setZodiacHoroscope(horoscope.Cancer)
    }
    if ((month === 6 && day >= 23) || (month === 7 && day <= 23)) {
      setZodiacSign('Leo')
      setZodiacImgUrl(zodiacImg.Leo)
      setZodiacHoroscope(horoscope.Leo)
    }
    if ((month === 7 && day >= 24) || (month === 8 && day <= 23)) {
      setZodiacSign('Virgo')
      setZodiacImgUrl(zodiacImg.Virgo)
      setZodiacHoroscope(horoscope.Virgo)
    }
    if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
      setZodiacSign('Libra')
      setZodiacImgUrl(zodiacImg.Libra)
      setZodiacHoroscope(horoscope.Libra)
    }
    if ((month === 9 && day >= 24) || (month === 10 && day <= 22)) {
      setZodiacSign('Escorpio')
      setZodiacImgUrl(zodiacImg.Scorpio)
      setZodiacHoroscope(horoscope.Scorpio)
    }
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      setZodiacSign('Sagitario')
      setZodiacImgUrl(zodiacImg.Sagittarius)
      setZodiacHoroscope(horoscope.Sagittarius)
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault()   
  }

  return (
    
    <div className="App card">
      <div className="card-body">
        <img className='img-thumbnail img-fluid' src="src/assets/img/logo.jpeg" style={{height:"350px"}} alt="" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h3 className='card-title' style={{fontFamily:"'Eagle', sans-cursive"}}>Horoscopo</h3>
            <h6 className='form-label' htmlFor="birthdate">Ingresa tu fecha de nacimiento</h6>
            <input  className='form-control' type="date"  name="birthdate" onChange={handleFormChange} id="birthdate"/>
            {zodiacSign && <p className='text-center'>Tu signo zodiacal es: {zodiacSign}</p>}
            {zodiacHoroscope && <p className='text-center'>Tu horoscopo de hoy: {zodiacHoroscope}</p>}
        
            {zodiacImgUrl && <img className='img-fluid' src={zodiacImgUrl} style={{height:"200px"}} alt=""/>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
