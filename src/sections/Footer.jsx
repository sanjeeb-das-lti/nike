import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} alt="footer" width={150} height={46} />
                    </a>
                    <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
                        Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
                    </p>
                    <div className="flex items-center gap-5 mt-8">
                        {socialMedia.map((icon) => (
                            <div className="flex justify-center items-center w-12 h-12 bg-coral-red rounded-2xl cursor-pointer">
                                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white-400 text-2xl font-medium leading-normal mb-6 font-montserrat">
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li
                                        key={link.name}
                                        className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                                        <a href={link.link}>{link.name}</a>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 gap-2 justify-start items-center font-montserrat cursor-pointer">
                    <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0" />
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className="font-montserrat cursor-pointer leading-none max-sm:mt-2">Terms & Conditions</p>
            </div>
        </footer>
    )
}

export default Footer