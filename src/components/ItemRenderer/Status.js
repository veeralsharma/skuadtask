import React, {useCallback} from 'react'

function Category({status}) {
    const getVariant = useCallback(() => {
        switch(status){
            case 'Rejceted':
                return 'red'
            case 'Due':
                return 'yellow'
            case 'Submitted':
                return 'green'
            case 'Paid':
                return 'green'
            default:
                return 'red'
        }
    },[status])
    return (
        <div className={`category category--${getVariant()}`}>
            <h4>{status}</h4>
        </div>
    )
}

export default Category
