import React from 'react'
import door from '../im/doorStep.svg'
import fApp from '../im/foodApp.svg'
import bar from '../im/bar.jpg'
import resto from '../im/restro.jpg'
import BoxImg from './BoxImg'
import BoxText from './BoxText'

const MainHero = () => {
    return (
        <>
            <div className="info-sec">
                <BoxImg myImg={door} />
                <BoxText myTxt="Taste The Convenience."
                    para="unlock the swiftness of doorstep delivery. we're committed to speedy, personalized solutions, elevating your lifestyle with authenticity and innovation worldwide." btns=" Read more"

                />

                <BoxText myTxt="Savor the Swiftness"
                    para="Our commitment to speed, personalization, and innovation ensures that you can savor the authentic tastes of Haridwar from the comfort of your home. With Haridwar Wala Restaurant, your dining experience becomes a seamless journey of culinary delights, elevating your lifestyle with every bite."
                    btns="Get App"
                />
                <BoxImg myImg={fApp} />

                <BoxImg myImg={resto} />
                <BoxText myTxt="Finding Restaurants in Haridwar"
                    para="Discovering the perfect restaurant in Haridwar has never been easier! With 'Taste The Convenience,' you can unlock a world of culinary delights right at your fingertips. Our personalized and innovative platform brings you a wide selection of top-notch restaurants in Haridwar, catering to every taste and craving. "
                    btns="Go for Dine"
                />

                <BoxText myTxt="Swiftness of Bars in Haridwar"
                    para="Whether you're a cocktail connoisseur or a beer enthusiast, our platform offers a diverse range of bars in Haridwar to suit your preferences. Experience the true essence of Haridwar's nightlife scene with our authentic and innovative bar listings, curated to match your taste."
                    btns="Go for Cheers"
                />
                <BoxImg myImg={bar} />

            </div>
        </>
    )
}

export default MainHero
