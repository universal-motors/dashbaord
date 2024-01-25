"use client"
import Select from '../select'
export default function Uploads() {
    return (
        <>
            <div className='lg:flex flex-col justify-center items-center m-auto w-[90%] overflow-x-auto mt-[40px] mb-16 ' >
                <div  >
                    <div className='text-[16px] md:text-[24px] font-semibold'>
                        Uploads
                    </div>
                    <div className='flex flex-col items-center justify-center pb-4 pt-4 bg-[#f5f5f5] w-[1065px] mt-[23px] md:mt-[46px]'>
                        <div className='flex   text-[#231F20] font-semibold w-[1034px] h-[35px]'>
                            <div className='text-[14px] md:text-[16px]'>
                                Sl No.
                            </div>
                            <div className='text-[14px] md:text-[16px] ml-20'>
                                Links
                            </div>
                            <div className='text-[14px] md:text-[16px] ml-44'>
                                Prefix
                            </div>
                            <div className='text-[14px] md:text-[16px] ml-40'>
                                Add Tags
                            </div>
                            <div className='text-[14px] md:text-[16px] ml-40'>
                                Selected Tags
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-[1050px] h-[58px] bg-white rounded-[8px] '>
                            <div className='pl-4 text-[12px] md:text-[14px]'>
                                01
                            </div>
                            <div className='text-[#5B93FF] underline  text-[12px] md:text-[14px]'>
                                www.google.com
                            </div>
                            <div className=' text-[12px] md:text-[14px]'>
                                prefixsample
                            </div>
                            <Select />
                            <div className='flex gap-1 w-[250px] mr-4'>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-[1050px] h-[58px] bg-white rounded-[8px]  mt-4'>
                            <div className='pl-4  text-[12px] md:text-[14px]'>
                                01
                            </div>
                            <div className='text-[#5B93FF] underline  text-[12px] md:text-[14px]'>
                                www.google.com
                            </div>
                            <div className=' text-[12px] md:text-[14px]'>
                                prefixsample
                            </div>
                            <Select />
                            <div className='flex gap-1 w-[250px] mr-4'>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div className='flex justify-between items-center w-[1050px] h-[58px] bg-white rounded-[8px]  mt-4 '>
                            <div className='pl-4  text-[12px] md:text-[14px]'>
                                01
                            </div>
                            <div className='text-[#5B93FF] underline  text-[12px] md:text-[14px]'>
                                www.google.com
                            </div>
                            <div className=' text-[12px] md:text-[14px]'>
                                prefixsample
                            </div>
                            <Select />

                            <div className='flex gap-1 w-[250px] mr-4 '>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-[1050px] h-[58px] bg-white rounded-[8px]  mt-4'>
                            <div className='pl-4  text-[12px] md:text-[14px]'>
                                01
                            </div>
                            <div className='text-[#5B93FF] underline  text-[12px] md:text-[14px]'>
                                www.google.com
                            </div>
                            <div className=' text-[12px] md:text-[14px]'>
                                prefixsample
                            </div>
                            <Select />
                            <div className='flex gap-1 w-[250px] mr-4'>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div className='flex justify-between items-center w-[1050px] h-[58px] bg-white rounded-[8px]  mt-4'>
                            <div className='pl-4  text-[12px] md:text-[14px]'>
                                01
                            </div>
                            <div className='text-[#5B93FF] underline  text-[12px] md:text-[14px]'>
                                www.google.com
                            </div>
                            <div className=' text-[12px] md:text-[14px]'>
                                prefixsample
                            </div>
                            <Select />
                            <div className='flex gap-1 w-[250px] mr-4'>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px] '>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className='bg-[#605BFF] text-white flex items-center px-2 py-1 rounded-[4px] text-[10px]'>
                                    <p className='whitespace-nowrap'>TAG 1 </p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                            </div>
                        </div>


                    </div>
                </div>

            </div>




        </>

    )
}
