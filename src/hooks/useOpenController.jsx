import { useState } from 'react';

function useOpenController() {
const[isOpen,setIsOpen] =useState(false);

function toggle(){
    setIsOpen(isOpen=>!isOpen);
}
return {isOpen,toggle};
}

export default useOpenController