

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

    let sliders = 1

    if (width >= 768) {
        sliders = 2
    }

    if (width >= 1000) {
        sliders = 3
    }


    return (

        <div>

            <header className="header"></header>

            <div className="img">
                <div>

                </div>
                <div className='text'>
                    We found the best bag for you!
                </div>
            </div>
            <div className='text1'>
                Based on your answers, we’ve handpicked the best bag for your upcoming travels.
            </div>

            <div className='conteiner__options'>
                <div className='option1'>
                    <div className='option1__frame36'>
                        <div className=''>
                            <div className='option1__frame36__img1' >
                                <div className='option1__frame36__match'>
                                    <div className='match__great'>
                                        the Best match
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

                                <div className='option1__frame36__img' >
                                </div>
                                <div className='button'>
                                    <div className="button__text">Choose Color</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='option1__content'>
                        <div className="top">
                            <div className='top__text1'>Luzon 18L Backpack - Del Día</div>
                            <div className='top__text2'>$60</div>
                        </div>
                        <div className="text3">Great for <span className='hikes'>Hikes</span></div>
                    </div>
                </div>




                <div className='option1'>
                    <div className='option1__frame36'>
                        <div className='option1__frame36__img'>
                            <div className='option1__frame36__img__bg'>
                                <div className='option1__frame36__img__product'>
                                    <div className='button'>
                                        <div className="button__text">Choose Color</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='option1__content'>
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
                    spaceBetween={0}
                    slidesPerView={sliders}
                >

                    <SwiperSlide>
                        <div className='slider__frame '>
                            <div className='option1__slider'>
                                <div className='option1__frame36'>
                                    <div className='option1__slider__bg'>
                                        <div className='option1__slider__img'><div className='button'>
                                            <div className="button__text">Choose Color</div>
                                        </div></div>

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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider__frame '>
                            <div className='option1__slider'>
                                <div className='option1__frame36'>
                                    <div className='option1__slider__bg'>
                                        <div className='option1__slider__img'><div className='button'>
                                            <div className="button__text">Choose Color</div>
                                        </div></div>

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
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slider__frame '>
                            <div className='option1__slider'>
                                <div className='option1__frame36'>
                                    <div className='option1__slider__bg'>
                                        <div className='option1__slider__img'><div className='button'>
                                            <div className="button__text">Choose Color</div>
                                        </div></div>

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
                        </div>
                    </SwiperSlide>


                </Swiper>

                <div className="slider__frame72">
                    <div className='slider__frame '>
                        <div className='option1__slider'>
                            <div className='option1__frame36'>
                                <div className='option1__slider__bg'>
                                    <div className='option1__slider__img'><div className='button'>
                                        <div className="button__text">Choose Color</div>
                                    </div></div>

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
                    </div>
                    <div className="frame80">
                        <div className="frame30">
                            <div className='frame30__text'>Looking for something else?</div>
                            <div className='frame30__button'>
                                <div className='frame30__button__text'> Start Over</div>
                            </div>
                        </div>
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
