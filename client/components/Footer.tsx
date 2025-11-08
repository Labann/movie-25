import { FaFacebook, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="p-4  bg-primary">
        <div className='grid max-w-7xl gap-6 p-4 grid-cols-4 w-fit md:w-auto mx-auto'>
            <div className="flex flex-col space-y-2">
                <h2 className='font-bold text-white'>Home</h2>
                <ul className='flex text-sm flex-col space-y-2 text-gray-light font-extralight'>
                    <li>Popular searches</li>
                    <li>Trending</li>
                    <li>Recommended For you</li>
                    <li>Popular People</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2">
                <h2 className='font-bold text-white'>Watchlist</h2>
                <ul className='flex text-sm flex-col space-y-2 text-gray-light font-extralight'>
                    <li>Add New list</li>
                    <li>Your own list</li>
                    <li>Lists For you</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2">
                <h2 className='font-bold text-white'>Contacts</h2>
                <ul className='flex text-sm space-x-2 text-gray-light font-extralight'>
                    <li>contact-us</li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2">
                <h2 className='font-bold text-white'>Contact us</h2>
                <ul className='flex text-sm space-x-2 text-gray-light font-extralight'>
                    <li><FaFacebook/></li>
                    <li><FaInstagram/></li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Footer