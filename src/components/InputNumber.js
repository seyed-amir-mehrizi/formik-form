
import React from 'react'

function InputNumber({field , form , ...props}) {
    const numberOnly = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }
    return (
        <input onKeyPress={numberOnly} {...props} value={field.value}
        onChange={field.onChange}
        />
    )
}

export default InputNumber