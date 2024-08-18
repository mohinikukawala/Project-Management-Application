import classes from './Button.module.css';

const Button = ({children, ...props}) => {
    return(
        <button {...props} className={props.className + ' '+ classes.buttonStyleClass}>
            {children}
        </button>
    )
}

export default Button;