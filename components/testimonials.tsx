import { Star, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
        <section className="mx-auto flex flex-col gap-8 items-center justify-between py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <div className='flex gap-1'>
                <div><Star fill='white' /></div>
                <div><Star fill='white' /></div>
                <div><Star fill='white' /></div>
                <div><Star fill='white' /></div>
                <div><Star fill='white' /></div>
            </div>
            <div className='text-lg font-semibold'>The app is amazing! It has made buying and selling so much easier for me.
            </div>
            <div className='flex items-center justify-center gap-6'>
                <div className='flex gap-5'>
                    <div className='h-[50px] w-[50px]'>
                        <Image src='/hero.jpg' alt='profile' className='rounded-full w-full h-full' width={50} height={50} />
                    </div>
                    <div>
                        <div>
                            John Doe
                        </div>
                        <div>
                            CEO, ABC Company
                        </div>
                    </div>
                </div>
                <div className='py-5 outline outline-1'></div>
                <div className='flex items-center justify-center'>
                    <Twitter fill='white' />
                </div>
            </div>
        </section>
    )
}

export default Testimonials