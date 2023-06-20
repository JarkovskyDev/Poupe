import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer__footer' id='footer'>
        <div className='footer__contacts'>
          <div>
            <iframe title='google' width="520" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=397&amp;hl=en&amp;q=V%20Zahrad%C3%A1ch%201084%20Dob%C5%99ichovice+()&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>

          <div className='footer__info'>
            <h1>Petra Frková</h1>
            <h1>Adresa: V Zahradách 1084, Dobřichovice</h1>
            <h1>Tel.:<a href="tel:+420603544822" className="footer__phone">603544822</a></h1>
            <h1>Email: <a href="mailto:petulepf@seznam.cz" className="footer__mail">petulepf@seznam.cz</a></h1>
            <h1>IČO: 68387393</h1>
          </div>
        </div>
    </div>
  )
}

export default Footer