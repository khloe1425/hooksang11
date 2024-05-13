
// rfc: react function component
// rfcredux => component connect với redux
//  rafce : react arrow function component
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Fakebook = () => {
    // useSelector
    // useDispatch

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-2">
                    <img src="https://i.pravatar.cc/150?img=3" alt="" />
                </div>
                <div className="col-10">
                    <p>user123</p>
                    <p>ah hihihi</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-2">
                    <img src="https://i.pravatar.cc/150?img=3" alt="" />
                </div>
                <div className="col-10">
                    <p>user123</p>
                    <p>ah hihihi</p>
                </div>
            </div>
            
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" />

                </div>
                <div className="form-group">
                    <label>Content</label>
                    <input type="text" className="form-control" />

                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Fakebook