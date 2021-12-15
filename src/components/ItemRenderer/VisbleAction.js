import React from 'react'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

function VisbleAction() {
    return (
        <div className="actions-visible">
            <button className="action-button">
                <ArrowDownwardOutlinedIcon />
            </button>
            <button className="action-button">
                <VisibilityOutlinedIcon />
            </button>

        </div>
    )
}

export default VisbleAction
