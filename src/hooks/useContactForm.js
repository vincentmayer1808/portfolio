import React, { useState } from 'react'

const useContactForm = () => {
   const initForm={
      username: "",
      email: "",
      message: "",
  }

    const [values, setValues] = useState(initForm)

    // const [values, setValues] = useState(initForm)

    const onChangeForm = ({target}) => {
        setValues({
                ...values,
                [target.id]: target.value,
        });
    };

    return { values, onChangeForm }
}

export default useContactForm