<div className=' lg:grid md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-16 px-12  mb-32'>
                {plants.map((plant, index) => {
                    const promoPrice = plant.isInSale ? (plant.price * (1 - plant.discountPercentage / 100)).toFixed(2) : plant.price;
                    const image = images[index % images.length];
                    return (
                    <div className=' flex flex-col md:items-center  mb-20'>
                        <div key={plant.id} className='flex flex-col justify-start md:w-80 lg:w-80 shadow-xl h-'>
                                              
                            <img src={image} alt={plant.plantName} className='md:max-h-72 w-full'/>
                            <div className='px-4'>
                                <h3 className=' text-lunargreen font-ebgaramond-bold text-2xl mt-4 mb-1' >{plant.plantName}</h3>
                                <span className='font-lato-bold text-darkgray' >{plant.plantSubtitle}</span>
                                <div>
                                    {plant.isInSale ? (
                                        <p className='pt-3 my-2'>
                                            <span className='font-lato-bold text-xl text-avacado line-through'>${plant.price}</span> <span className='ml-6 font-lato-bold text-xl text-lunargreen'>${promoPrice}</span>
                                        </p>
                                    ) : (
                                        <p className='pt-3 font-lato-bold text-xl my-2 text-lunargreen'>${plant.price}</p>
                                    )}
                                </div>     
                                <div>
                                    <button className=' mr-4 bg-whitegreen border-lightgreen border-2 rounded-3xl w-20 h-10 px-2 text-flaggreen font-raleway-regular pointer-events-none'>{plant.plantLabel}</button>
                                    <button className=' mr-4 bg-whitegreen border-lightgreen border-2 rounded-3xl w-auto h-10 px-2 text-flaggreen font-raleway-regular pointer-events-none'>{plant.plantType}</button>
                                </div>
                                <Link to={/product/${plant.id}}> 
                                    <button className='h-14 w-40  my-4 font-raleway-regular bg-lunargreen flex-row overflow-hidden text-almwhite text-base hover:bg-avacado  hover:font-raleway-bold transition-all'>See more</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    );
                })}
            </div>