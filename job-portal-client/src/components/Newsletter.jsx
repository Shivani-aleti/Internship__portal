import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";
const Newsletter = () => {
return (
<div>
<div>
<h3 className="text-lg font-bold mb-2 flex items-center gap-2">
<FaEnvelopeOpenText />
Email me for hobs
</h3>
<p className="text-white/75 text-base mb-4">Ut esse eiusmod aute. Sit enim labore dolore. Aute ea
fugiat commodo ea foes.</p>
<div className="w-full space-y-4">
<input type="email" name="email" id="email" placeholder=" name@mail.com" className="placeholder:text-ly bg-transparent w-full block py-2
p1-3 border focus: outline-none"/>
<input type="submit" value={"Subscribe"} className="text-dk w-full block py-2 pl-3 border focus: outline-none
bg-blue rounded-sm text-dk cursor-pointer font-semibold"/>
</div>
</div>
{/*2nd Part */}
<div className="mt-20">
<h3 className="text-lg font-bold mb-2 flex items-center gap-2">
<FaRocket />
Get Noticed faster
</h3>
<p className="text-white/75 text-base mb-4">Ut esse eiusmod aute. Sit enim labore dolore. Aute ea
fugiat commodo ea foes.</p>
<div className="w-full space-y-4">
<input type="submit" value={"Upload your Resume"} className="w-full block py-2 pl-3 border focus: outline-none
bg-blue rounded-sm text-dk cursor-pointer font-semibold"/>
</div>


</div>
</div>
);
};
export default Newsletter;