
import author from '../images/author.jpg'
import { Facebook, Instagram, Twitter, Google, Pinterest } from 'react-bootstrap-icons'
import PostLatest from '../Components/postLatest/PostLatest'
import ListPost from '../Components/postHome/ListPost'
function Main() {
	console.log('main')
	return (
		<>
			<div className="z-0 ">
				<div className="block w-[1210px] py-[30px] px-[auto] mx-[auto]" >
					<div className='mt-[80px] flex'>
						<ListPost />
						<div className='px-[30px] '>
							<div >
								<div className='w-[370px] text-center bg-black text-white py-2 rounded'>
									ABOUT ME
								</div>
								<div className='content-center text-center mt-[25px] ' >
									<img className='w-[200px] h-[200px] px-[auto] mx-[auto] rounded-[50%]' src={author} alt=''></img>
								</div>
								<div className='my-3 text-center'>
									Author: Middle on the mic
								</div>
								<div className='font-thin w-[370px] text-center'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ipsum adipisicing
								</div>

							</div>
							<div className=''>
								<div className='w-[370px] text-center bg-black text-white py-2 rounded my-[30px]'>
									SUBSCRIBE & FOLLOW
								</div>
								<div className='flex justify-center mb-[30px]'>
									<a href='facebook'> <Facebook className='mx-[15px] hover:text-[#d1bb95]'></Facebook></a>
									<a href='instagram'> <Instagram className='mx-[15px] hover:text-[#d1bb95]'></Instagram></a>
									<a href='twitter'> <Twitter className='mx-[15px] hover:text-[#d1bb95]'></Twitter></a>
									<a href='google'> <Google className='mx-[15px] hover:text-[#d1bb95]' /></a>
									<a href='pinterest'> <Pinterest className='mx-[15px] hover:text-[#d1bb95]' /></a>
								</div>
							</div>
							<div>
								<div className='w-[370px] text-center bg-black text-white py-2 rounded my-[30px]'>
									LATEST POSTS
								</div>
								<div>
									<ul>
										<PostLatest />
									</ul>
								</div>
							</div>
							<div>
								<div className='w-[370px] text-center bg-black text-white py-2 rounded my-[30px]'>
									NEWSLETTER
								</div>
								<div className='w-[370px] font-thin px-[10px] mb-7'>
									Subscribe our newsletter for get notification about new updates, information discount, etc.
								</div>
								<div>
									<input className='w-[300px] bg-[#f2f4f5] py-[11px] pl-[20px] outline-none text-[16px]' type='text' placeholder='Enter your email'></input>
									<button className='bg-[#d1bb95] py-[11px] px-[17px] ' type='submit'>Send</button>
								</div>
							</div>
						</div>
					</div>
				</div>



			</div >
		</>
	)
}
export default Main 