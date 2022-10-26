

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';


export const Results = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const slider = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", slider);

        return () => {
            window.removeEventListener("resize", slider)
        }
    })

    let sliders = 1.5

    if (width >= 768) {
        sliders = 2
    }

    if (width >= 1440) {
        sliders = 3
    }


    return (

        <div>

            <header className="header"></header>

            <div className="conteiner">
                <div className="bar">
                    <div className="bar__steps">
                        <div className="bar__steps__frame ">
                            <div className="step1">
                                <div className='step1__vector'></div>
                            </div>
                        </div>
                        <div className="bar__steps__number state">1</div>
                        <div className='bar__steps__number names__bar'>Gear</div>
                    </div>
                    <div className="bar__steps">
                        <div className="bar__steps__frame ">
                            <div className="step1">
                                <div className='step1__vector'></div>
                            </div>
                        </div>
                        <div className="bar__steps__number state">2</div>
                        <div className='bar__steps__number names__bar'>length</div>
                    </div>
                    <div className="bar__steps">
                        <div className="bar__steps__frame ">
                            <div className="step1">
                                <div className='step1__vector'></div>
                            </div>
                        </div>
                        <div className="bar__steps__number state">3</div>
                        <div className='bar__steps__number names__bar'>commute</div>
                    </div>
                    <div className="bar__steps">
                        <div className="bar__steps__frame ">
                            <div className="step1">
                                <div className='step1__vector'></div>
                            </div>
                        </div>
                        <div className="bar__steps__number state">4</div>
                        <div className='bar__steps__number names__bar'>climate</div>
                    </div>
                    <div className="bar__steps">
                        <div className="bar__steps__frame ">
                            <div className="step1">
                                <div className='step1__vector'></div>
                            </div>
                        </div>
                        <div className="bar__steps__number state">5</div>
                        <div className='bar__steps__number names__bar'>use</div>
                    </div>
                    <div className="bar__steps">
                        <div className="bar__steps__frame ">
                            <div className="step1">
                                <div className='step1__vector'></div>
                            </div>
                        </div>
                        <div className="bar__steps__number state">6</div>
                        <div className='bar__steps__number names__bar'>shoes</div>
                    </div>
                    <div className="bar__steps">
                        <div className="bar__steps__frame ">
                            <div className="step1">
                                <div className='step1__vector'></div>
                            </div>
                        </div>
                        <div className="bar__steps__number state">7</div>
                        <div className='bar__steps__number names__bar'>one-of-a-kind</div>
                    </div>
                    <div className="bar__line"></div>
                </div>

                <div className='text'>
                    We found the best bag for you!
                </div>
            </div>

            <div className='text1'>
                Based on your answers, we’ve handpicked the best bag for your upcoming travels.
            </div>
            <div className="card__products">
                <div className='option1__slider products '>
                    <div className='option1__frame36'>
                        <div className='option1__slider__bg bg__height'>
                            <div className='option1__frame36__match'>
                                <div className='match__great produc1'>
                                    The best match
                                </div>
                                <div className='frame37'>
                                    <div className='frame37__match'>100% match</div>
                                    <div className='frame37__button'>
                                        <div className='frame37__button__elipse'>
                                            <div className='frame37__button__group'>
                                                <div className='line1'></div>
                                                <div className='line2'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='option1__slider__img img__position product1'>

                                <div className='button'>
                                    <div className="button__text">Choose Color</div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='option1__content__slider'>
                        <div className="top">
                            <div className='top__text1'>Luzon 18L Backpack - Del Día</div>
                            <div className='top__text2'>$60</div>
                        </div>
                        <div className="text3">Great for <span className='hikes'>Hikes</span></div>
                    </div>
                </div>
                <div className='option1__slider products'>
                    <div className='option1__frame36'>
                        <div className='option1__slider__bg bg__height'>
                            <div className='option1__frame36__match'>
                                <div className='match__great'>
                                    another great option for you
                                </div>
                                <div className='frame37'>
                                    <div className='frame37__match'>80% match</div>
                                    <div className='frame37__button'>
                                        <div className='frame37__button__elipse'>
                                            <div className='frame37__button__group'>
                                                <div className='line1'></div>
                                                <div className='line2'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='option1__slider__img img__position product2'>

                                <div className='button'>
                                    <div className="button__text">Choose Color</div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='option1__content__slider'>
                        <div className="top">
                            <div className='top__text1'>Luzon 18L Backpack - Del Día</div>
                            <div className='top__text2'>$80</div>
                        </div>
                        <div className="text3">Great for <span className='hikes'>Hikes</span></div>
                    </div>
                </div>
            </div>


            <div className="frame41">
                <div className="frame41__img"></div>
                <div className="frame41__frame40">
                    <div className='frame41__frame40__text1'>Vibrant, one-of-a-kind colorways designed
                        from 100% repurposed fabrics. Responsibly made, uniquely yours.</div>

                    <div className='frame41__frame40__text2'>Del Día bags are made in the Philippines
                        using fabric left over from other companies’ production runs. This helps keep good
                        material out of the landfill, and puts it into the hands of thoughtful adventurers like you.</div>
                </div>
            </div>

            <div className="frame29">
                <div className='frame79'>
                    <div className='frame79__img'></div>
                </div>
                <div className="frame28">
                    <div className="frame38">
                        <div className="frame38__text1">Guaranteed for good™</div>
                        <div className="frame38__text1 size">Built To Last. Sustainably Sourced. Ethically Made.</div>
                    </div>

                    <div className='frame28__text'>Truly sustainable design includes a backup plan. If there’s a problem
                        with your gear, we’ll happily repair it, replace it, help you return it,
                        or reward you for trading it in.
                    </div>

                    <div className="frame28__button">
                        <div className='frame28__button__text'>
                            Learn More
                        </div>
                    </div>
                </div>
            </div>

            <div className='slider'>
                <div className='slider__title'>More gear you’ll love</div>

                <Swiper
                    spaceBetween={-20}
                    slidesPerView={sliders}
                >

                    <SwiperSlide>
                        <div className='option1__slider slider1'>
                            <div className='option1__frame36'>
                                <div className='option1__slider__bg'>
                                    <div className='option1__slider__img slider__img product__slider1'>
                                        <div className='button button__slider'>
                                            <div className="button__text">Choose Color</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='option1__content__slider'>
                                <div className="top">
                                    <div className='top__text1'>Halcon Chalk Bag - Del Día</div>
                                    <div className='top__text2'>$33</div>
                                </div>
                                <div className="text3">Great for <span className='hikes'>Climbing</span></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='option1__slider slider1'>
                            <div className='option1__frame36'>
                                <div className='option1__slider__bg'>
                                    <div className='option1__slider__img slider__img product__slider2'>
                                        <div className='button button__slider'>
                                            <div className="button__text">Choose Color</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='option1__content__slider slider1'>
                                <div className="top">
                                    <div className='top__text1'>Maigo Neck Pouch - Del Dia</div>
                                    <div className='top__text2'>$25</div>
                                </div>
                                <div className="text3">Great for <span className='hikes'>Essentials</span></div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className='option1__slider slider1'>
                            <div className='option1__frame36'>
                                <div className='option1__slider__bg'>
                                    <div className='option1__slider__img slider__img product__slider3'>
                                        <div className='button button__slider'>
                                            <div className="button__text">Choose Color</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='option1__content__slider'>
                                <div className="top">
                                    <div className='top__text1'>Halcon Chalk Bag - Del Día</div>
                                    <div className='top__text2'>$33</div>
                                </div>
                        
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
                <div className="slider__division">
                    <div className='option1__slider1'>
                        <div className='option1__frame36'>
                            <div className='option1__slider__bg'>
                                <div className='option1__slider__img'>
                                    <div className='button'>
                                        <div className="button__text">Choose Color</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='option1__content__slider'>
                            <div className="top">
                                <div className='top__text1'>Halcon Chalk Bag - Del Día</div>
                                <div className='top__text2'>$33</div>
                                <div className="text3">Great for <span className='hikes'>Climbing</span></div>
                            </div>
                            {/* <div className="text3">Great for <span className='hikes'>Climbing</span></div> */}
                        </div>
                    </div>

                    <div className='option1__slider1'>
                        <div className='option1__frame36'>
                            <div className='option1__slider__bg'>
                                <div className='option1__slider__img product2__slider'>
                                    <div className='button'>
                                    <div className="button__text">Choose Color</div>
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className='option1__content__slider'>
                            <div className="top">
                                <div className='top__text1'>Maigo Neck Pouch - Del Dia</div>
                                <div className='top__text2'>$25</div>
                                <div className="text3">Great for <span className='hikes'>Essentials</span></div>
                            </div>
                            {/* <div className="text3">Great for <span className='hikes'>Climbing</span></div> */}
                        </div>
                    </div>
                </div>
                <div className="slider__division">
                    <div className='option1__slider1'>
                        <div className='option1__frame36'>
                            <div className='option1__slider__bg'>
                                <div className='option1__slider__img product3__slider'>
                                    <div className='button'>
                                    <div className="button__text">Choose Color</div>
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className='option1__content__slider'>
                            <div className="top">
                                <div className='top__text1'>Kapai 1.5L Hip Pack - Del Día</div>
                                <div className='top__text2'>$30</div>
                            </div>
                            {/* <div className="text3">Great for <span className='hikes'>Climbing</span></div> */}
                        </div>
                    </div>

                    <div className="frame81">
                        <div className="frame30">
                            <div className='frame30__text'>Looking for something else?</div>
                            <div className='frame30__button'>
                                <div className='frame30__button__text'> Start Over</div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="card__products desk">
                    <div className='option1__slider products slider__card__weight'>
                        <div className='option1__frame36'>
                            <div className='option1__slider__bg bg__height'>

                                <div className='option1__slider__img img__position product1__slider_des'>

                                    <div className='button'>
                                        <div className="button__text">Choose Color</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='option1__content__slider'>
                            <div className="top">
                                <div className='top__text1'>Halcon Chalk Bag - Del Día</div>
                                <div className='top__text2'>$33</div>
                            </div>
                            <div className="text3">Great for <span className='hikes'>Climbing</span></div>
                        </div>
                    </div>
                    <div className='option1__slider products slider__card__weight'>
                        <div className='option1__frame36'>
                            <div className='option1__slider__bg '>

                                <div className='option1__slider__img img__position product2__slider_des'>

                                    <div className='button'>
                                        <div className="button__text">Choose Color</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='option1__content__slider'>
                            <div className="top">
                                <div className='top__text1'>Maigo Neck Pouch - Del Dia</div>
                                <div className='top__text2'>$25</div>
                            </div>
                            <div className="text3">Great for <span className='hikes'>Essentials</span></div>
                        </div>
                    </div>
                    <div className='option1__slider products slider__card__weight'>
                        <div className='option1__frame36'>
                            <div className='option1__slider__bg'>
                                <div className='option1__slider__img img__position product3__slider_desk'>

                                    <div className='button'>
                                        <div className="button__text">Choose Color</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='option1__content__slider'>
                            <div className="top">
                                <div className='top__text1'>Kapai 1.5L Hip Pack - Del Día</div>
                                <div className='top__text2'>$30</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="frame80">
                <div className="frame30">
                    <div className='frame30__text'>Looking for something else?</div>
                    <div className='frame30__button'>
                        <div className='frame30__button__text'> Start Over</div>
                    </div>
                </div>
            </div>



            <div className='email'>
                <div className='email__bg'>
                    <div className="email__frame66">
                        <div className="frame61">
                            <div className="frame61__frame60">
                                <div className="frame61__frame60__text1">Want to save your results for later?</div>
                                <div className="frame61__frame60__text2">Enter your email to receive your best bag
                                    match directly to your inbox and be the first to learn about new models releases
                                    and more.
                                </div>
                            </div>
                            <div className="frame61__frame19">
                                <div className="frame61__frame19__frame62">
                                    <div className='frame61__frame19__frame62__title'>Email</div>
                                    <div className='frame61__frame19__frame62__input'>
                                        <div className='input__placeholder'>Your emal </div>
                                    </div>
                                    <div className="frame61__frame19__checkbox">
                                        <div className="frame61__frame19__checkbox__check"></div>
                                        <div className="frame61__frame19__checkbox__text">I agree with the <span className='terms'>Privacy Policy</span> and the website's <span className='terms'>Terms of Conditions</span></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="email__frame66__button">
                            <div className="email__frame66__button__text">sign me up</div>
                        </div>
                    </div>
                </div>
            </div>
            <footer></footer>
        </div >
    )
}
