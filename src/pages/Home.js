import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const categroyList = [
        {
            categroyImg: 'https://rainbowit.net/html/histudy/assets/images/category/web-design.png',
            categroyName: 'Web Design',
            categoryLink: '/'
        },
        {
            categroyImg: 'https://rainbowit.net/html/histudy/assets/images/category/design.png',
            categroyName: 'Graphic Design',
            categoryLink: '/'
        },
        {
            categroyImg: 'https://rainbowit.net/html/histudy/assets/images/category/personal.png',
            categroyName: 'Personal Development',
            categoryLink: '/'
        },
        {
            categroyImg: 'https://rainbowit.net/html/histudy/assets/images/category/server.png',
            categroyName: 'IT and Software',
            categoryLink: '/'
        },
        {
            categroyImg: 'https://rainbowit.net/html/histudy/assets/images/category/pantone.png',
            categroyName: 'Sales Marketing',
            categoryLink: '/'
        },
        {
            categroyImg: 'https://rainbowit.net/html/histudy/assets/images/category/paint-palette.png',
            categroyName: 'Art & Humanities',
            categoryLink: '/'
        },
        {
            categroyImg: 'https://rainbowit.net/html/histudy/assets/images/category/smartphone.png',
            categroyName: 'Mobile Application',
            categoryLink: '/'
        },
        {
            categroyImg: 'https://rainbowit.net/html/histudy/assets/images/category/infographic.png',
            categroyName: 'Finance & Accounting',
            categoryLink: '/'
        },
    ]

    const chooseList = [
        {
            chooseImg: 'https://rainbowit.net/html/histudy/assets/images/icons/counter-01.png',
            chooseName: '500+',
            chooseLink: 'Learners & counting'
        },
        {
            chooseImg: 'https://rainbowit.net/html/histudy/assets/images/icons/counter-02.png',
            chooseName: '645+',
            chooseLink: 'Courses & Video'
        },
        {
            chooseImg: 'https://rainbowit.net/html/histudy/assets/images/icons/counter-03.png',
            chooseName: '1000+',
            chooseLink: 'Certified Students'
        },
        {
            chooseImg: 'https://rainbowit.net/html/histudy/assets/images/icons/counter-04.png',
            chooseName: '252+',
            chooseLink: 'Registered Enrolls'
        },
    ]

    const TeamList = [
        {
            teamImg: './images/team-01.jpg',
            teamName: 'Aaron Griffin',
            teamPosition: 'Depertment Head'
        },
        {
            teamImg: './images/team-05.jpg',
            teamName: 'Aaron Griffin',
            teamPosition: 'Depertment Head'
        },
        {
            teamImg: './images/team-04.jpg',
            teamName: 'Aaron Griffin',
            teamPosition: 'Depertment Head'
        },
        {
            teamImg: './images/team-10.jpg',
            teamName: 'Aaron Griffin',
            teamPosition: 'Depertment Head'
        },
    ]

    const reviewList = [
        {
            reviewIcon: './images/bing.png',
            reviewTxt: 'Like this histudy, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.',
            reviewClientImg: './images/client-01.png',
            reivewClientName: 'Valerie J., CEO',
        },
        {
            reviewIcon: './images/google.png',
            reviewTxt: 'People says about, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.',
            reviewClientImg: './images/client-04.png',
            reivewClientName: 'Valerie J., CEO',
        },
        {
            reviewIcon: './images/bing.png',
            reviewTxt: 'Like this histudy, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.',
            reviewClientImg: './images/client-01.png',
            reivewClientName: 'Valerie J., CEO',
        },
        {
            reviewIcon: './images/google.png',
            reviewTxt: 'People says about, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.',
            reviewClientImg: './images/client-04.png',
            reivewClientName: 'Valerie J., CEO',
        },
        {
            reviewIcon: './images/bing.png',
            reviewTxt: 'Like this histudy, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.',
            reviewClientImg: './images/client-01.png',
            reivewClientName: 'Valerie J., CEO',
        },
        {
            reviewIcon: './images/google.png',
            reviewTxt: 'People says about, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.',
            reviewClientImg: './images/client-04.png',
            reivewClientName: 'Valerie J., CEO',
        },
        {
            reviewIcon: './images/bing.png',
            reviewTxt: 'Like this histudy, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.',
            reviewClientImg: './images/client-01.png',
            reivewClientName: 'Valerie J., CEO',
        },
        {
            reviewIcon: './images/google.png',
            reviewTxt: 'People says about, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.',
            reviewClientImg: './images/client-04.png',
            reivewClientName: 'Valerie J., CEO',
        },
    ]

    return (
        <>
            <div className='banner relative pb-12'>
                <div className='container mx-auto'>
                    <div className='flex items-center'>
                        <div className='w-1/2'>
                            <img src='./images/bannerImg.png' alt='' style={{ width: '100%' }}></img>
                        </div>
                        <div className='w-1/2 pl-20'>
                            <p><span className='bannerTag text-slate-800'>🏆 The Leader in Online Learning</span></p>
                            <h1 className='text-6xl leading-snug font-bold mb-5 text-slate-800'>Build The Skills To Drive Your Career</h1>
                            <p className='text-lg mb-5 text-slate-800'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
                            <button className="themeBtn btn-bg">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mt-2 mb-20">
                <div className='container mx-auto'>
                    <h6 className='sectionSubTitle text-center mb-4'><span>Categories</span></h6>
                    <h2 className='sectionTitle text-center mb-16'>Explore Top Courses Caterories <br /> That Change Yourself</h2>
                    <div class="grid gap-8 grid-cols-4">
                        {categroyList.map((items, index) => {
                            return (
                                <div className='card rounded-xl bg-white text-center py-14 px-10'>
                                    <div className='cardImg mb-5'>
                                        <img src={items.categroyImg} alt='' width={75} className='mx-auto'></img>
                                    </div>
                                    <div className='cardContent'>
                                        <h4 className='text-2xl font-bold mb-2'>{items.categroyName}</h4>
                                        <Link className='text-sm categoryLink' to={items.categoryLink}>View Courses</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className='bg-violet-50 py-20'>
                <div className='container mx-auto'>
                    <div className='grid gap-10 grid-cols-2'>
                        <div className='aboutImg relative'>
                            <img className='rounded-lg' src='./images/about-01.png' alt='about-01'></img>
                            <img className='rounded-lg' src='./images/about-02.png' alt='about-02'></img>
                            <img className='rounded-lg' src='./images/about-03.png' alt='about-03'></img>
                        </div>
                        <div className='py-5 self-center pl-20'>
                            <h6 className='sectionSubTitle mb-4'><span>Know About Us</span></h6>
                            <h2 className='sectionTitle mb-6'>Know About Histudy <br /> Learning Platform</h2>
                            <p className='text-lg text-slate-500 mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                            <div className='flex py-4 items-start gap-4'>
                                <div className='bg-pink-100 p-2 rounded-full'>
                                    <svg class="h-6 w-6 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                                </div>
                                <div className='aboutListTxt'>
                                    <h5 className='text-xl text-slate-800 font-medium mb-1'>Flexible Classes</h5>
                                    <p className='text-base text-slate-500'>It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</p>
                                </div>
                            </div>

                            <div className='flex py-4 items-start gap-4'>
                                <div className='bg-indigo-100 p-2 rounded-full'>
                                    <svg class="h-6 w-6 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                                </div>
                                <div className='aboutListTxt'>
                                    <h5 className='text-xl text-slate-800 font-medium mb-1'>Learn From Anywhere</h5>
                                    <p className='text-base text-slate-500'>Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque non eius iure suscipit.</p>
                                </div>
                            </div>

                            <button className="themeBtn btn-bg mt-10">More About Us</button>
                        </div>
                    </div>

                    <div className='grid gap-10 grid-cols-2'>
                        <div className='p-7 bg-white rounded-lg shadow-2xl shadow-slate-100'>
                            <h6 className='inline-block border rounded-3xl px-6 py-2 text-sm text-slate-700'>Top Teacher</h6>
                            <h5 className='text-3xl text-slate-800 font-medium my-3'>Free Online Courses from Histudy School To Education</h5>
                            <p className='text-base text-slate-500'>Top instructors from around the world.</p>
                            <button className="themeBtn btn-bg mt-4 themeBtnSmall">Join Now</button>
                        </div>
                        <div className='p-7 bg-white rounded-lg shadow-2xl shadow-slate-100'>
                            <h6 className='inline-block border rounded-3xl px-6 py-2 text-sm text-slate-700'>New Collection</h6>
                            <h5 className='text-3xl text-slate-800 font-medium my-3'>Online Courses from Histudy and <br /> Learn From Anywhere</h5>
                            <p className='text-base text-slate-500'>Top instructors from around the world</p>
                            <button className="themeBtn btn-bg mt-4 themeBtnSmall">Join Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className='container mx-auto'>
                    <h6 className='sectionSubTitle text-center mb-4'><span>Why Choose Us</span></h6>
                    <h2 className='sectionTitle text-center mb-16'>Creating A Community Of <br /> Life Long Learners.</h2>
                    <div class="grid gap-8 grid-cols-4 chooseWrap relative pt-9">
                        {chooseList.map((items, index) => {
                            return (
                                <div className='cardOuter relative'>
                                    <div className='card rounded-xl bg-white text-center py-14 px-10 relative overflow-hidden'>
                                        <div className='cardImg mb-5'>
                                            <img src={items.chooseImg} alt='' width={75} className='mx-auto'></img>
                                        </div>
                                        <div className='cardContent'>
                                            <h4 className='text-6xl font-bold mb-4'>{items.chooseName}</h4>
                                            <p className='text-lg text-slate-500'>{items.chooseLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


            <section className='bg-violet-50 py-20'>
                <div className='container mx-auto'>
                    <h6 className='sectionSubTitle text-center mb-4'><span>Our Instructor</span></h6>
                    <h2 className='sectionTitle text-center mb-16'>Word Class Best Instructor</h2>
                    <div className='grid gap-10 grid-cols-4'>
                        {TeamList.map((items, index) => {
                            return (
                                <div className='teamCard relative overflow-hidden rounded-md'>
                                    <div className='teamImg'>
                                        <img src={items.teamImg} alt='team-img'></img>
                                    </div>
                                    <div class="teamContent absolute w-full z-10 bottom-0 left-0 p-10 cursor-pointer">
                                        <h4 class="text-white font-bold text-3xl opacity-0 translate-y-6 invisible leading-normal">{items.teamName}</h4>
                                        <p class="text-white text-base opacity-0 translate-y-4 invisible">{items.teamPosition}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 overflow-hidden">
                <h6 className='sectionSubTitle text-center mb-4'><span>Education For Everyone</span></h6>
                <h2 className='sectionTitle text-center mb-16'>People like histudy education. <br /> No joking - here’s the proof!</h2>
                <div class="scroll-animation scroll-right-left gap-x-8 flex">
                    {reviewList.map((items, index) => {
                        return (
                            <div className='reviewCard text-center py-10 px-8 bg-white rounded-xl'>
                                <img src={items.reviewIcon} alt='icon' className='h-14 mx-auto'></img>
                                <p className='text-lg text-slate-500 py-6'>{items.reviewTxt}</p>
                                <div className='flex gap-3 justify-center items-center'>
                                    <div className='h-12 w-12 border-2 border-violet-100 border-solid bg-white p-1 rounded-full'>
                                        <img src={items.reviewClientImg} alt='client-icon' className='rounded-full object-cover w-full h-full'></img>
                                    </div>
                                    <h6 className='text-base text-slate-800 font-medium'>{items.reivewClientName}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div class="scroll-animation scroll-left-right gap-x-8 flex mt-10">
                    {reviewList.map((items, index) => {
                        return (
                            <div className='reviewCard text-center py-10 px-8 bg-white rounded-xl'>
                                <img src={items.reviewIcon} alt='icon' className='h-14 mx-auto'></img>
                                <p className='text-lg text-slate-500 py-6'>{items.reviewTxt}</p>
                                <div className='flex gap-3 justify-center items-center'>
                                    <div className='h-12 w-12 border-2 border-violet-100 border-solid bg-white p-1 rounded-full'>
                                        <img src={items.reviewClientImg} alt='client-icon' className='rounded-full object-cover w-full h-full'></img>
                                    </div>
                                    <h6 className='text-base text-slate-800 font-medium'>{items.reivewClientName}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className='bg-violet-50 py-20'>
                <div className='container mx-auto'>
                    <h6 className='sectionSubTitle text-center mb-4'><span>Get Latest Histudy Update</span></h6>
                    <h2 className='sectionTitle text-center mb-5'>Subscribe Our Newsletter</h2>
                    <p className='text-center mb-10 text-lg text-slate-500 max-w-3xl mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam explicabo sit est eos earum reprehenderit inventore nam autem corrupti rerum!</p>
                    <div className='max-w-2xl mx-auto bg-white p-3 pl-6 rounded-lg flex items-center'>
                        <input className='w-full' type='text' placeholder='Enter your email...'></input>
                        <button className="themeBtn btn-bg whitespace-nowrap themeBtnSmall">Save Changes</button>
                    </div>
                </div>
            </section>

            <footer className='pt-20'>
                <div className='container mx-auto'>
                    <div class="flex gap-10">
                        <div className='w-1/3'>
                            <img src="./images/logo.png" alt="" width={150}></img>
                            <p className='text-base text-slate-500 mt-6 max-w-md'>We’re always in search for talented and motivated people. Don’t be shy introduce yourself!</p>
                        </div>
                        <div className='w-2/3 pl-16'>
                            <div className='flex gap-10'>
                                <div className='w-1/4'>
                                    <h4 className='mb-6 text-2xl text-slate-900 font-bold'>Useful Links</h4>
                                    <ul class="list-none">
                                        <li><Link className='text-base text-slate-500 mb-2 block' to='/'>Marketplace</Link></li>
                                        <li><Link className='text-base text-slate-500 mb-2 block' to='/'>kindergarten</Link></li>
                                        <li><Link className='text-base text-slate-500 mb-2 block' to='/'>University</Link></li>
                                        <li><Link className='text-base text-slate-500 mb-2 block' to='/'>GYM Coaching</Link></li>
                                        <li><Link className='text-base text-slate-500 mb-2 block' to='/'>FAQ</Link></li>
                                    </ul>
                                </div>
                                <div className='w-1/4'>
                                    <h4 className='mb-6 text-2xl text-slate-900 font-bold'>Our Company</h4>
                                    <ul class="list-none">
                                        <li><Link className='text-base text-slate-500 mb-2 block' to='/'>Contact Us</Link></li>
                                        <li><Link className='text-base text-slate-500 mb-2 block' to='/'>Become Teacher</Link></li>
                                        <li><Link className='text-base text-slate-500 mb-2 block' to='/'>Blog</Link></li>
                                        <li><Link className='text-base text-slate-500 mb-2 block' to='/'>Instructor</Link></li>
                                        <li><Link className='text-base text-slate-500 mb-2 block' to='/'>Events</Link></li>
                                    </ul>
                                </div>
                                <div className='w-1/2'>
                                    <h4 className='mb-6 text-2xl text-slate-900 font-bold'>Get Contact</h4>
                                    <ul class="list-none">
                                        <li className='text-base text-slate-500 mb-2 block'><span className='font-medium'>Phone:</span> (406) 555-0120</li>
                                        <li className='text-base text-slate-500 mb-2 block'><span className='font-medium'>E-mail:</span> rainbow@example.com</li>
                                        <li className='text-base text-slate-500 mb-2 block'><span className='font-medium'>Location:</span> North America, USA</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center border-t py-4 mt-20'>
                        <p className='text-base text-slate-500'>Copyright © 2024 Rainbow-Themes. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
} 
