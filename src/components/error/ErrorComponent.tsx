import { ReactComponent as ErrorSvg } from "../../assets/icons/error.svg"

const styles = {
    errorContainer: {
        backgroundColor: "white",
        borderRadius: "2rem",
        padding: "2rem",
        display: "flex",
        flexFlow: 'column',
        alignItems: 'center'
    },
    errorText: {
        fontSize: '1.2rem',
        marginTop: '1rem',
        fontFamily: 'Arial'
    }
}

const ErrorComponent = () => {
    return (
        <div style={styles.errorContainer}>
            <ErrorSvg width={40} height={40} fill="rgb(255,51,51)"/>
            <h1 style={styles.errorText}>Something went wrong, try again later!</h1>
        </div>
    )
}

export default ErrorComponent