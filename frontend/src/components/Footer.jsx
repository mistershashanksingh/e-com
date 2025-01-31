import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="fle flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
        <h1 className="text-3xl font-semibold text-zinc-900"><span className="text-green-700">AT</span> <span className="text-red-500">Jerseys</span></h1>
          <p className="w-full md:w-2/3 text-gray-600">
          The sun dipped below the horizon, casting a warm orange glow across the sky as a gentle breeze rustled through the trees. A quiet hum of crickets filled the air, blending with the distant laughter of children playing in the park. The world seemed to slow down, wrapped in the calm embrace of twilight. Somewhere, a lone streetlight flickered to life, casting long shadows on the pavement. It was a moment of transition—where day met night, where the noise of the world softened, and where possibilities lingered in the cool evening air.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-8130063118</li>
            <li>myownemailadd@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ Jerseys-All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
