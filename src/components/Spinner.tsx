import {ReactComponent as SpinnerSvg} from "../assets/icons/spinner.svg"

type Props = {
    size: number
}

const SpinnerComponent:React.FC<Props> = ({size}) => {
    const spinnerSize = `${size}`
    return (
        <div 
            style={{ width: spinnerSize, height: spinnerSize }}
        >
            <SpinnerSvg height={size} width={size} fill="white"/>
        </div>
    );
}

export default SpinnerComponent;