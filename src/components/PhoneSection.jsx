import Phone from "./../../assets/illustration-app.png";
import Patter2 from "./../../assets/bg-pattern-2.svg";
import IconIos from "./../../assets/icon-apple.svg";
import IconAndroid from "./../../assets/icon-android.svg";
function PhoneSection() {
  return (
    <div className=" ml-40 flex relative phone-section-height bg-dark justify-between   rounded-lg  z-30 mr-40 2xl:mr-7 2xl:ml-7 sm:flex-col sm:h-full sm:gap-9 sm:items-center sm:justify-center">
      <img
        className=" ml-40 max-w-80 phone-margin self-start z-20 2xl:ml-7 sm:self-center sm:ml-0"
        src={Phone}
      />
      <img
        className="absolute z-10 bg-image sm:top-0 sm:left-1/4"
        src={Patter2}
      />
      <div className="flex flex-col mr-40 -ml-36 bg-dark-peach p-16 pb-6 max-con-peach gap-4 text-white form-margin self-end rounded-lg z-20 2xl:mr-7 sm:ml-0 sm:mr-0 sm:w-full">
        <h2 className="text-h2 font-bold md:text-3xl">Premium EQ</h2>
        <p className="text-xl md:text-lg">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <div className="flex items-center gap-3 ">
          <span className="text-price font-bold">$4</span>
          <p className="text-xl md:text-lg">/month</p>
        </div>
        <button className="max-w-80 flex justify-center rounded-lg gap-2 cursor-pointer bg-dark text-white items-center h-16 hover:bg-light-blue">
          <span>
            <img src={IconIos} />
          </span>{" "}
          IOS Download
        </button>
        <button className="max-w-80 flex justify-center  gap-2 cursor-pointer rounded-lg bg-white text-dark items-center h-16 hover:bg-peach">
          <span>
            <img src={IconAndroid} />
          </span>{" "}
          Android Download
        </button>
      </div>
    </div>
  );
}

export default PhoneSection;
