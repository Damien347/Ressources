import React from 'react';



const Enfant = React.forwardRef((props, ref)=> {

    return (
            <div>
                <input ref={ref} type="text" />
            </div>

    )
})


export default Enfant;