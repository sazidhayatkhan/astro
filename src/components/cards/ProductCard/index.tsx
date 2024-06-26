'use client'
import React, { useState } from 'react';
import styles from './productCard.module.css';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa6';
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';
import useDrawerStore from '@/stores/useDrawerStore';
import useCartStore from '@/stores/useCartStore';
import useModalStore from '@/stores/useModalStore';

type Props = {
    product?: any;
};

const ProductCard = ({ product }: Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { openWishDrawer }:any = useDrawerStore();
    const {openPurchaseModal}:any = useModalStore();
    const addToCart = useCartStore((state:any) => state.addToCart);

    const handleAddToCart = () => {
        addToCart(product);
        openPurchaseModal();
    };

    const handleMouseEnter = () => {
        setIsDrawerOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDrawerOpen(false);
    };


    return (
        <div className='border border-[#ddd]'>
            <div className='h-[82px] p-3 flex justify-between products-start'>
                <div className='w-full'>
                    <p className='text-lg leading-[20px] mb-2 line-clamp-2'>{product?.title}</p>
                    {product?.discountPrice === '' || product?.discountPrice === null ? (
                        <p className='text-sm'>${product?.price}</p>
                    ) : (
                        <p className='text-sm'>$<span className='text-red-500 font-semibold me-[2px]'>&nbsp;{product?.discountPrice}</span><span className='line-through text-slate-300'>{product?.price}</span></p>
                    )}
                </div>
                <div>
                    <button onClick={openWishDrawer} className='text-sm border border-black rounded-full p-2'><FaRegHeart/></button>
                </div>
            </div>
            <div className="relative overflow-hidden" onMouseLeave={handleMouseLeave}>
                <div className={`${styles.imageWrapper}`} onMouseEnter={handleMouseEnter}>
                    <Image
                        src={product?.thumbnail || '/'}
                        alt="img-product"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-[230px] md:h-[350px] object-cover"
                    />
                </div>
                <button className={styles.button} onMouseEnter={handleMouseEnter}>
                    ADD TO BAG
                </button>
                <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`} onMouseEnter={handleMouseEnter}>
                    <div>
                        <div className='p-[10px]'>
                            <div className=' border-black border-b-[1px] pb-2'>
                                <p className='text-sm font-semibold'>{product?.title}</p>
                                {/* <p className='text-xs mt-[2px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In natus alias iste blanditiis illum explicabo, incidunt similique veritatis distinctio deserunt?</p> */}
                            </div>
                            {/* <div className='flex justify-between products-center border-black border-b-[1px] py-2'>
                                <div className='flex justify-start products-center gap-1'>
                                        <div className='bg-red-400 w-[20px] h-[20px]'/>
                                        <div className='bg-blue-400 w-[20px] h-[20px]'/>
                                        <div className='bg-orange-400 w-[20px] h-[20px]'/>
                                </div>
                                <p className='text-xs'>Mint</p>
                            </div> */}
                            <div className='border-black border-b-[1px] py-2'>
                                <p className='text-xs font-semibold text-[#50b996] text-center'>Mitten Extracts</p>
                            </div>
                            <div className='flex justify-between products-center border-black border-b-[1px] py-2'>
                                <div className='flex justify-start products-center gap-[2px]'>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStarOutline/>
                                </div>
                                <p>$ 23</p>
                            </div>
                            <div className='pt-2 text-xs flex justify-between products-center'>
                                <p className='font-semibold'>Sativa</p>
                                <p><span className='font-semibold'>CBD :</span> 23%</p>
                                <p><span className='font-semibold'>THC :</span> 20%</p>
                            </div>
                        </div>
                        <button onClick={handleAddToCart} className="border-black border-t-[1px] bg-[#72f2c7] text-black transition duration-500 py-[10px] w-full text-sm">
                            ADD TO BAG | $&nbsp;{product?.price}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
