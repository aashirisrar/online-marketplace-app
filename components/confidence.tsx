import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Confidence = () => {
    return (
        <section className="mx-auto gap-20 flex flex-col items-center justify-between py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <div className='flex gap-3'>
                <div className='flex flex-col flex-1 gap-4'>
                    <div>Trustworthy</div>
                    <div className="text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] hidden md:block">
                        Shop with Confidence on Our Marketplace
                    </div>
                </div>
                <div className='flex flex-col flex-1 gap-6'>
                    <div> Experience the benefits of our online marketplace. With buyer protection, you can shop worry-free knowing that your purchases are safeguarded. Our easy returns policy ensures a hassle-free shopping experience. Plus, our competitive pricing guarantees you'll find the best deals.</div>
                    <div className='flex gap-3'>
                        <div>
                            <Button variant='outline'>Learn More</Button>
                        </div>
                        <div >
                            <Button>
                                <div className='flex items-center justify-center text-md gap-1 font-semibold'>
                                    Sign Up
                                    <ArrowRight width={18} />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='mx-auto w-[1340px] h-[800px]'>
                <Image alt='watch' className='w-full h-full object-cover' src='/hero.jpg' width={800} height={500} />
            </div>


        </section >
    )
}

export default Confidence