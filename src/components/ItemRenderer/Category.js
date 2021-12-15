import React, {useCallback} from 'react'

function Category({category}) {
    const getVariant = useCallback(() => {
        switch(category){
            case 'Travel':
                return 'red'
            case 'Meal':
                return 'yellow'
            case 'Other':
                return 'green'
            default:
                return 'red'
        }
    },[category])
    return (
        <div className={`category category--${getVariant()}`}>
            <h4>{category}</h4>
        </div>
    )
}

export default Category
