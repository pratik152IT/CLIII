import React, { Fragment, CSSProperties, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import './home.css'
import b1 from '../images/banner1.webp'
import b2 from '../images/banner2.webp'
import b3 from '../images/banner3.jpg'
import b4 from '../images/banner4.jpg'
import b5 from '../images/banner5.jpg'
import b6 from '../images/banner6.webp'
import b7 from '../images/banner.7.webp'
import b8 from '../images/banner8.webp'
import b9 from '../images/banner9.webp'
import d1 from '../images/d1.webp'
import d2 from '../images/d2.webp'
import d3 from '../images/d3.webp'
import d4 from '../images/d4.webp'
import d5 from '../images/d5.webp'
import d6 from '../images/d6.webp'
import d7 from '../images/d7.webp'
import d8 from '../images/d8.webp'
import j1 from '../images/j1.webp'
import j2 from '../images/j2.webp'
import j3 from '../images/j3.webp'
import j4 from '../images/j4.webp'
import m1 from '../images/m1.webp'
import m2 from '../images/m2.webp'
import m3 from '../images/m3.webp'
import m4 from '../images/m4.webp'
import m5 from '../images/m5.webp'
import m6 from '../images/m6.webp'
import m7 from '../images/m7.webp'
import m8 from '../images/m8.webp'
import n1 from '../images/n1.webp'
import n2 from '../images/n2.webp'
import n3 from '../images/n3.jpg'
import n4 from '../images/n4.webp'
import n5 from '../images/n5.webp'
import n6 from '../images/n6.webp'
import n7 from '../images/n7.webp'
import n8 from '../images/n8.webp'
import o1 from '../images/o1.webp'
import o2 from '../images/o2.webp'
import o3 from '../images/o3.webp'
import o4 from '../images/o4.webp'
import o5 from '../images/o5.webp'
import o6 from '../images/o6.webp'
import o7 from '../images/o7.jpg'
import mb1 from '../images/mb1.jpg'
import mb2 from '../images/mb2.jpg'
import mb3 from '../images/mb3.jpg'
import mm3 from'../images/mm3.jpg'
import mad1 from '../images/mad1.jpg'
import mm1_1 from '../images/mm1-1.gif'
import mm1_2 from '../images/mm1-2.gif'
import mm2_1 from '../images/mm2-1.gif'
import mm2_2 from '../images/mm2-2.gif'
import mc1 from '../images/mc1.webp'
import mc2 from '../images/mc2.webp'
import mc3 from '../images/mc3.webp'
import mc4 from '../images/mc4.jpg'
import mc5 from '../images/mc5.webp'
import mc6 from '../images/mc6.webp'
import mc7 from '../images/mc7.webp'
import mc8 from '../images/mc8.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../Footer/Footer'


const Home = () => {

  const indicatorStyles: CSSProperties = {
    background: '#CFCECD',
    width: 7,
    height: 7,
    borderRadius: 50,
    display: 'inline-block',
    margin: '0 4px 0 4px',
    zIndex: 8
  };
  // #CFCECD
  function indicator(onClickHandler, isSelected, index, label) {
    if (isSelected) {
      return (
        <li
          style={{ ...indicatorStyles, background: '#9f9f9f' }}
          aria-label={`Selected: ${label} ${index + 1}`}
          title={`Selected: ${label} ${index + 1}`}
        />
      );
    }

    return (

      <li
        style={{ ...indicatorStyles }}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  }

  useEffect(() => {
    document.documentElement.scrollTo = 0;
  }, []);
  return (
    <Fragment>
      {
        window.screen.width > 1024 ?

          <Fragment>
            <div className='mt-8 w-[100vw]'>
              <Carousel showThumbs={false} showStatus={false} showArrows={false} showIndicators={true} autoPlay={6000} infiniteLoop={true} renderIndicator={(onClickHandler, isSelected, index, label) => indicator(onClickHandler, isSelected, index, label)}>
                <div>

                  <Link to='/products'><LazyLoadImage effect='blur' src={b1} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>


                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b2} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b3} width='100%' className='min-h-[320px]' alt='Banner_Image' /><br /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b4} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b5} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b6} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b7} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b8} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b9} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
              </Carousel>
            </div>
            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8'>DEAL OF THE DAY</h1>
              <div className='grid grid-cols-8'>
                <Link to='/products'><LazyLoadImage effect='blur' src={d1} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d2} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d3} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d4} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d5} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d6} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d7} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d8} alt="" className="min-h-[200px]" /></Link>
              </div>
            </div>  
        
            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>TRENDS FOR HER</h1>
              <div className='grid grid-cols-8 '>
                <Link to='/products'><LazyLoadImage effect='blur' src={m1} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={m2} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={m3} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={m4} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={m5} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={m6} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={m7} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={m8} alt="" className='min-h-[200px]'/></Link>

              </div>
            </div>

            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>TRENDS FOR HIM</h1>
              <div className='grid grid-cols-8 '>
                <Link to='/products'><LazyLoadImage effect='blur' src={n1} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={n2} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={n3} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={n4} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={n5} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={n6} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={n7} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={n8} alt="" className='min-h-[200px]'/></Link>

              </div>
            </div>

            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>BEST OF KIDSWEAR</h1>
              <div className='grid grid-cols-7 '>
                <Link to='/products'><LazyLoadImage effect='blur' src={o1} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={o2} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={o3} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={o4} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={o5} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={o6} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={o7} alt="" className='min-h-[200px]'/></Link>


              </div>
            </div>

            <Footer/>

          </Fragment>

          :

          <Fragment>

        

            <div>
              <LazyLoadImage effect='blur' src={mm3} alt=""  className='mt-2 min-h-[100px]'/>
            </div>

            <div className='mt-4 w-[100vw]'>
              <Carousel showThumbs={false} showStatus={false} showArrows={false} showIndicators={true} renderIndicator={(onClickHandler, isSelected, index, label) => indicator(onClickHandler, isSelected, index, label)}>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mb1} width='100%' alt='Banner_Image' className='min-h-[200px]'/>
                    <div className='h-[30px]'>
                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mb2} width='100%' alt='Banner_Image' className='min-h-[200px]'/>
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mb3} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>

              </Carousel>
            </div>

            <div>
              <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>DEAL OF THE DAY</h1>
              <ul className='flex overflow-x-scroll '>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d1} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d2} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d3} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d4} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d5} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d6} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d7} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d8} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
              </ul>
            </div>

            <div className='mt-4 grid grid-cols-2 min-h-[200px]'>
              <LazyLoadImage effect='blur' src={mm1_1} alt="" />
              <LazyLoadImage effect='blur' src={mm1_2} alt="" />
            </div>

            <div>
              <LazyLoadImage effect='blur' src={mad1} alt="" />
            </div>

            <div className='mt-4 grid grid-cols-2 min-h-[200px]'>
              <LazyLoadImage effect='blur' src={mm2_1} alt="" />
              <LazyLoadImage effect='blur' src={mm2_2} alt="" />
            </div>

           

            <div>
              <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>DEALS ON LATEST ARRIVALS</h1>
              <ul className='grid grid-cols-1 '>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={j1 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={j2 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={j3 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={j4 } alt="" className="min-h-[100px]" /></li></Link>
                
               
              </ul>
            </div>

            <div className='mt-4 w-[100vw]'>
              <Carousel showThumbs={false} showStatus={false} showArrows={false} showIndicators={true} renderIndicator={(onClickHandler, isSelected, index, label) => indicator(onClickHandler, isSelected, index, label)}>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc1} width='100%' alt='Banner_Image' className='min-h-[200px]'/>
                    <div className='h-[30px]'>
                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc2} width='100%' alt='Banner_Image' className='min-h-[200px]'/>
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc3} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc4} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc5} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc6} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc7} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc8} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
              </Carousel>
            </div>

            <Footer/>
          </Fragment>
      }

    </Fragment>
  )
}

export default Home