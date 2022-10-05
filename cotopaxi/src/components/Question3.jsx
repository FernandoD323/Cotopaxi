
// import images from '../assets/imgs'

export const Question3 = () => {
    return (

        <div>
            <header className="header"></header>
            <div className="frame10">
                <div className="frame1">
                    <div className="frame1__title">How long is your trip?</div>
                    <div className="frame1__text"> <span className="frame1__text__span">Did you know? </span> While it depends on how light you pack, we recommend
                        around 25-35L for weekend trips and 35-50L for a week or more.
                    </div>
                    <div className="frame1__text1">Choose all that appply</div>
                </div>
                <div className="answers">
                    <div className="row1">
                        <div className="row1__frame15">
                            <div className="row1__frame15__text ">
                                Walking
                            </div>
                        </div>
                        <div className="row1__frame15">
                            <div className="row1__frame15__text">
                                Train or Buses
                            </div>
                        </div>
                        <div className="row1__frame15">
                            <div className="row1__frame15__text">
                                In a Car
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="row1__frame15">
                            <div className="row1__frame15__text subtext">
                                Flights
                            </div>
                            <div className="row1__frame15__subtext">
                                Carry on bag
                            </div>
                        </div>
                        <div className="row1__frame15">
                            <div className="row1__frame15__text subtext">
                                Flights
                            </div>
                            <div className="row1__frame15__subtext">
                                Checked-in bag
                            </div>
                        </div>
                        <div className="row1__frame15">
                            <div className="row1__frame15__text">
                                Other
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frame36">
                <div className="frame36__button previous ">
                    Previous
                </div>
                <div className="frame36__button next">
                    Next
                </div>
            </div>
            <footer className="footer"></footer>
        </div>
    )
}
