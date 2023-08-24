import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5
    border-t border-gray-100">
        <div className="flex max-md:flex-col flex-wrap
        justify-between gap-5 sm:px-16 px-6 py-10">
            

                <div className="footer__links">
                    <h3 className="font-bold">About</h3>
                    <Link href="/about" className="text-gray-500 flex flex-col">
                        <a href="/about">Partner</a>
                        <a href="/about">All Partnerships</a>
                        <a href="/about">Featured</a>
                        

                    </Link>

                    <h3 className="font-bold">Deals</h3>
                    <Link href="/about" className="text-gray-500 flex flex-col">
                        <a href="/about">All deals</a>
                        <a href="/about">Includes</a>
                        <a href="/about">Offers and discounts</a>
                        <a href="/about">Other</a>

                    </Link>
                    <h3 className="font-bold">Contact</h3>
                    <Link href="/about" className="text-gray-500 flex flex-col">
                        <a href="/about">Instagram</a>
                        <a href="/about">Discord</a>
                        <a href="/about">Twitter</a>
                        <a href="/about">Facebook</a>
                        <a href="/about">Email: cardealership@demo.ca</a>

                    </Link>
                </div>

                
        </div>
        <div className="flex flex-col justify-center
            items-center gap-6 mb-10 mt-10 font-bold">
                <p className="text-2xl text-gray-700">
                    Official Page of Car dealeship <br />
                    All right reserved &copy;
                </p>

            </div>

    </footer>
  )
}

export default Footer

// md:flex-col na medium devices ce da bude flex u columns