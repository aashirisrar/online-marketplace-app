import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Contact = () => {
    return (
        <section className="mx-auto flex flex-col gap-6 items-center justify-between py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <div className="flex flex-col items-start justify-center gap-3">
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
                    Stay Updated with Our Newsletter
                </h1>
            </div>
            <div className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                Subscribe to our newsletter for the latest updates and special offers.
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex gap-3">
                    <div>
                        <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                        <Button> Join Now </Button>
                    </div>
                </div>
                <div className="text-muted-foreground">By joining, you agree to our Terms and Conditions.</div>
            </div>
        </section>
    )
}

export default Contact 