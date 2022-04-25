import React from 'react'
import  {Link} from 'react-router-dom'
let ViewContact =()=>{
    return(
        <React.Fragment>
            <section className='view-contact p-3'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='h3 text-warning fw-bold'>View Contact</p>
                            <p className='fst-italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non molestiae quis et quisquam quia delectus cupiditate illum, incidunt sequi quos in facere ab voluptate minima adipisci eum quidem possimus.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='view-contact mt-3'>
                <div className="container">
                    <div className="row align-items-center"> 
                        <div className="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREX7pmiYsFUwA-opG0WKGaA5qlwdyLCe9uZg&usqp=CAU" className='contact-img' alt="icon"/>
                        </div>
                        <div className="col-md-8">
                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                Name:<span className='fw-bold'>Jayesh</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Mobile:<span className='fw-bold'>7894561230</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Email:<span className='fw-bold'>Jayesh@gmail.com</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Company:<span className='fw-bold'>Jayesh</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Group:<span className='fw-bold'>Jayesh</span>
                                            </li>
                                            
                                        </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className='btn btn-warning'>Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default ViewContact