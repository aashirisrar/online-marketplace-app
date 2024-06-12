import { ArrowRightIcon, ShoppingBag } from "lucide-react"


const KeyFeatures = () => {
    return (
        <section className="mx-auto gap-12 flex flex-col items-center justify-between py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <div className="text-xl text-center mx-80 font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] hidden md:block">
                Discover a Wide Variety of Products on Our Secure Marketplace
            </div>
            <div className="flex gap-5 justify-center items-center text-center">
                <div className="flex flex-1 flex-col gap-5 justify-center items-center">
                    <div><ShoppingBag /></div>
                    <div className="text-lg font-bold">Buy and Sell with Confidence Using Our Seller Rating System</div>
                    <div>Our platform ensures secure transactions and offers a diverse range of product categories.</div>
                    <div className="flex gap-2 items-center justify-center"><div>Learn More </div><ArrowRightIcon /></div>
                </div>
                <div className="flex flex-1 flex-col gap-5 justify-center items-center">
                    <div><ShoppingBag /></div>
                    <div className="text-lg font-bold">Connect with a Global Community of Buyers and Sellers</div>
                    <div>Join our marketplace and experience the power of a global network.</div>
                    <div className="flex gap-2 items-center justify-center"><div>Learn More </div><ArrowRightIcon /></div>
                </div>
                <div className="flex flex-1 flex-col gap-5 justify-center items-center">
                    <div><ShoppingBag /></div>
                    <div className="text-lg font-bold">Find Unique and Hard-to-Find Items from Trusted Sellers</div>
                    <div>Discover one-of-a-kind products from reliable sellers in our marketplace.</div>
                    <div className="flex gap-2 items-center justify-center">
                        <div>Learn More
                        </div><ArrowRightIcon />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default KeyFeatures