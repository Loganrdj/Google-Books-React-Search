import React from 'react';

function Wrapper(props){
    return(
        <div>
            <main className="wrapper" {...props} />
        </div>
    )
}

export default Wrapper;