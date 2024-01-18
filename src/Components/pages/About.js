import imgAb from '../../images/about.jpg'
import img1 from '../../images/about_blog1.jpg'
import img2 from '../../images/about_blog2.jpg'
import img3 from '../../images/about_blog3.jpg'
import { CheckLg, Check } from 'react-bootstrap-icons'
function About() {
    return (
        <>
            <div className="py-[110px]">
                <div className=" shadow-[0_0px_8px_0px_rgba(0,0,0,0.5)] w-[1210px] text-center mx-auto ">
                    <div className='py-[30px]'>
                        <h1 className="text-[35px]">About Us</h1>
                        <p className="text-[17px]">
                            Welcome to the MIddle Blog
                        </p>
                    </div>
                    <div className='mb-[30px]' >
                        <img className='w-[908px] h-[486px] mx-auto' src={imgAb} alt='c'></img>
                    </div>
                    <div className='w-[775px] mx-auto text-[16px] text-left font-thin '>
                        <p className='mb-[15px]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className='mb-[15px]'>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                        <p className='mb-[15px]'>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                    </div>

                    <div>
                        <div className='flex justify-evenly mb-[20px]'>
                            <img className='w-[283px] h-[204px]' src={img1} alt=''></img>
                            <img className='w-[283px] h-[204px]' src={img2} alt=''></img>
                            <img className='w-[283px] h-[204px]' src={img3} alt=''></img>
                        </div>
                    </div>
                    <div>
                        <div className='w-[775px] mx-auto text-left'>
                            <div className='text-[24px]'>What I Do</div>
                            <div className='font-thin text-[16px]'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className='mb-[30px]'>
                                <ul>
                                    <li className='flex items-center my-3' ><CheckLg className='text-[#d1bb95] text-[16px] mr-2'></CheckLg> <p className='text-[16px] font-thin'>Lorem Lorem LoremLorem Lorem Lorem Lorem  LoremLorem</p></li>
                                    <li className='flex items-center my-3' ><CheckLg className='text-[#d1bb95] text-[16px] mr-2'></CheckLg> <p className='text-[16px] font-thin'>Lorem Lorem LoremLorem Lorem Lorem Lorem  LoremLorem</p></li>
                                    <li className='flex items-center my-3' ><CheckLg className='text-[#d1bb95] text-[16px] mr-2'></CheckLg> <p className='text-[16px] font-thin'>Lorem Lorem LoremLorem Lorem Lorem Lorem  LoremLorem</p></li>
                                    <li className='flex items-center my-3' ><CheckLg className='text-[#d1bb95] text-[16px] mr-2'></CheckLg> <p className='text-[16px] font-thin'>Lorem Lorem LoremLorem Lorem Lorem Lorem  LoremLorem</p></li>
                                    <li className='flex items-center my-3' ><CheckLg className='text-[#d1bb95] text-[16px] mr-2'></CheckLg> <p className='text-[16px] font-thin'>Lorem Lorem LoremLorem Lorem Lorem Lorem  LoremLorem</p></li>
                                </ul>
                            </div>
                            <div className='font-thin text-[16px] pb-[100px]'>
                                Nullam venenatis, nisi ac scelerisque tincidunt, elit ante volutpat velit, a rhoncus ipsum est vel nulla.
                                Nulla nibh arcu, porttitor non ipsum vel, ullamcorper faucibus mauris. Vivamus interdum molestie ex,
                                id tincidunt nibh volutpat eu. Nunc tempus porttitor tortor. Pellentesque id efficitur odio. Phasellus
                                non risus dapibus, lobortis mi non, tincidunt lorem. Curabitur sed dolor felis. Vivamus mollis fringilla
                                dictum.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default About