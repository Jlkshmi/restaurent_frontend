import React from 'react'
import "./catogery.css"
import { useNavigate } from 'react-router-dom'

function Catogery() {
const navigate = useNavigate()

    return (
        <>
            <div className='catogery_wrapper'>
                <div className='catogery_wrapper1' onClick={()=>navigate('/biriyani')}>
                    <div>
                        <img src='/images/biriyani.jpg' className='catogery_img' />
                    </div>
                    <div>
                        <h3 className='catogery_text'>BIRIYANI</h3>
                    </div>
                    
                </div>
                <div className='catogery_wrapper1' onClick={()=>navigate('/burger')}>
                    <div>
                        <img src='/images/burger.jpg' className='catogery_img' />
                    </div>
                    <div>
                        <h3 className='catogery_text'>BURGER</h3>
                    </div>
                </div>
                <div className='catogery_wrapper1' onClick={()=>navigate('/mandi')}>
                    <div>
                        <img src='/images/mandi.avif' className='catogery_img' />
                    </div>
                    <div>
                        <h3 className='catogery_text'>MANDI</h3>
                    </div>
                </div>
                <div className='catogery_wrapper1' onClick={()=>navigate('/pizza')}>
                    <div>
                        <img src='/images/pizza.jpg' className='catogery_img' />
                    </div>
                    <div>
                        <h3 className='catogery_text'>PIZZA</h3>
                    </div>
                </div>
                <div className='catogery_wrapper1' onClick={()=>navigate('/sandwich')}>
                    <div>
                        <img src='/images/sandwich.jpg' className='catogery_img' />
                    </div>
                    <div>
                        <h3 className='catogery_text'>SANDWICH</h3>
                    </div>
                </div>
                <div className='catogery_wrapper1' onClick={()=>navigate('/friedrice')}>
                    <div>
                        <img src='/images/friedrice.jpg' className='catogery_img' />
                    </div>
                    <div>
                        <h3 className='catogery_text'>FRIED RICE</h3>
                    </div>
                </div>
                <div className='catogery_wrapper1' onClick={()=>navigate('/cooldrinks')}>
                    <div>
                        <img src='/images/cooldrinks.jpg' className='catogery_img' />
                    </div>
                    <div>
                        <h3 className='catogery_text'>COOL DRINKS</h3>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Catogery