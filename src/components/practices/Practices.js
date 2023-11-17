import React from 'react'
import './practices.scss'
import Datalist from '../../Datalist.json'
const Practices = () => {
    return (
        <section className="practice">
            <div className="row">
                <div className="container">
                    <div className="pra-title">
                        <p>What We Are Expert At</p>
                        <h1>Legal Practices Area</h1>
                        <p className='pra-title-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate exercitationem inventore,<br />
                            obcaecati molestias et quam ex laboriosam non tempora dolorem similique excepturi</p>
                    </div>
                    <div className="pra-containt">
                        <div className="pra-detail">
                            {Datalist.practices.map((pra,id)=>(
                                <div className="pra-all-detail" key={id}>
                                <div className="pra-img">
                                    <img src={pra.img} alt="" />
                                </div>
                                <div className="pre-img-content">
                                    <h4>{pra.title}</h4>
                                    <p>{pra.desc}</p>
                                </div>
                            </div>
                            ))}                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Practices

                            
                            
