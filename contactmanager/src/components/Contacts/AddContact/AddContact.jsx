import React from 'react'
import {Link} from 'react-router-dom'

let AddContact =()=>{
    return(
        <React.Fragment>
            <section className='add-contact p-3'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='h3 text-success f2-bold'>Create Contact</p>
                            <p className='fst-italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorum et iusto incidunt repudiandae nesciunt tenetur asperiores nostrum aliquam alias voluptas repellendus sunt at numquam porro blanditiis error, dignissimos necessitatibus.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="com-md-4">
                            <form>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Name'/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Photo Url'/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Email'/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Company'/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Title'/>
                                </div>
                                <div className="mb-2">
                                    <select className='form-control'>
                                        <option value="">Select a Group</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className='btn btn-success' value='Create'/>
                                    <Link to={'/contacts/list'} className='btn btn-danger ms-2'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default AddContact