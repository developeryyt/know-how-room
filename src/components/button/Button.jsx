import classNames from "classnames";

const Button = (props) => {

    const {
        type,
        onClick,
        className,
        children
    } = props


    const classes = classNames('btn', className)

    return (
        <button
            type={type}
            onClick={onClick}
            className={classes}
        >
            {children}
        </button>
    )
}

export default Button
