
const Footer = () => {
    return (
        <section className="mx-auto flex flex-col gap-16 items-center justify-between py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <div className="flex flex-col items-start justify-center gap-3">
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
                    Seller Inc
                </h1>
            </div>
            <div className="max-w-[750px] text-lg sm:text-xl flex gap-6">
                <div>Buy Now</div>
                <div>Sell Now</div>
                <div>Contact Us</div>
                <div>FAQs</div>
                <div>Customer Support</div>
            </div>
            <div className="outline outline-[0.1px] w-full"></div>
            <div className="flex justify-between w-full mx-auto gap-3 text-muted-foreground">
                <div>© 2024 Seller Inc. All rights reserved.</div>
                <div className="flex gap-4">
                    <div>Privacy Policy</div>
                    <div>Terms and Conditions</div>
                    <div>Cookie Policy</div>
                </div>
            </div>
        </section>
    )
}

export default Footer