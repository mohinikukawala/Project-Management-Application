import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from 'react-dom';
import Button from '../button/Button.jsx';
import classes from './ErrorModal.module.css';

const ErrorModal = forwardRef(({children},ref) => {
    const dialogRef = useRef();

    useImperativeHandle(ref,() => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    })

    return createPortal(<dialog ref={dialogRef}>
        {children}
        <form method="dialog">
            <Button>Close</Button>
        </form>
    </dialog>,
    document.getElementById('modal-root'))
})


// const ErrorModal = forwardRef(({},ref) => {
//     createPortal(
//         <dialog ref={ref}>
//         Please enter valid inputs to create the project.
//         <form type="submit">
//             <button>Close</button>
//         </form>
//     </dialog>,
//     document.getElementById("modal-root")
//     )
// })

// const ErrorModal = forwardRef(({},ref) => {
//     return (<dialog ref={ref}>
//         Please enter valid inputs to create the project.
//         <form type="submit">
//             <button>Close</button>
//         </form>
//     </dialog>
//     )
// })

export default ErrorModal;