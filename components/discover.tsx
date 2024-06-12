import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Discover = () => {
    return (
        <section className="mx-auto flex items-center justify-between py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <div className="flex flex-1 flex-col items-start justify-center gap-3">
                <div>Discover</div>
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
                    Find the Perfect Products for You
                </h1>
                <span
                    className="max-w-[750px] text-lg text-muted-foreground sm:text-xl"
                >
                    Explore our curated collection of featured products. From electronics to fashion, we have everything you need. Shop now and experience the convenience of online shopping.
                </span>
                <div className="flex w-full items-center justify-start space-x-4 py-4 md:pb-10">
                    <Link
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-[6px]"
                        href="/home"
                    >
                        Shop
                    </Link>
                    <Link
                        className=" inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-[6px] gap-1 "
                        href="/sign-up"
                    >
                        <div>Learn More</div> <ArrowRight width={16} />
                    </Link>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-[30rem] h-[30rem]">
                    <Image width={450} height={450} alt="hero-img" className="h-full w-full object-cover" src="/hero.jpg" />
                </div>
            </div>
        </section>
    )
}

export default Discover