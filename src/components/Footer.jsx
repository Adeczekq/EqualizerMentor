import Logo from "./../../assets/logo.svg";
import IconFb from "./../../assets/icon-facebook.svg";
import IconIg from "./../../assets/icon-instagram.svg";
import IconTwitter from "./../../assets/icon-twitter.svg";
function Footer() {
  return (
    <div className="flex justify-between h-28 items-center mt-60 sm:flex-col sm:gap-4">
      <div className="flex items-center gap-28 sm:flex-col sm:gap-4">
        <img className=" h-8" src={Logo} />
        <div className="max-w-80 ">
          All rights reserved © Equalizer 2021 Have any problems? Contact us
          via social media or email us at
          <span className="font-bold">equalizer@example.com</span>
        </div>
      </div>
      <div className="flex gap-4 ">
        <img src={IconFb} />
        <img src={IconIg} />
        <img src={IconTwitter} />
      </div>
    </div>
  );
}

export default Footer;
