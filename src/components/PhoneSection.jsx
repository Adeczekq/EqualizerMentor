import React from "react"
import Phone from "./../../assets/illustration-app.png"
import Patter2 from "./../../assets/bg-pattern-2.svg"
import IconIos from "./../../assets/icon-apple.svg"
import IconAndroid from "./../../assets/icon-android.svg"
function PhoneSection () {
  return (
    <div className="flex relative max-width-section bg-dark justify-around ml-40 rounded-lg phone-section-height -z-20 ">
      <img className="max-w-80 phone-margin self-start" src={Phone}/>
      <img className="absolute -z-10 bg-image" src={Patter2}/>
      <div className="flex flex-col bg-dark-peach p-16 pb-6 max-con-peach gap-4 text-white form-margin self-end rounded-lg">
        <h2 className="text-h2 font-bold">Premium EQ</h2>
        <p className="text-xl">Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
        <div className="flex items-center gap-3 ">
            <span className="text-price font-bold">$4</span>
            <p className="text-xl">/month</p>
        </div>
        <button className="max-w-80 flex justify-center rounded-lg bg-dark text-white items-center h-16 hover:bg-light-blue">
                <span ><img src={IconIos}/></span> IOS Download

            </button>
            <button className="max-w-80 flex justify-center rounded-lg bg-white text-dark items-center h-16 hover:bg-peach">
            <span ><img src={IconAndroid}/></span> IOS Download
            </button>
      </div>
    </div>
  )
};

export default PhoneSection
