
type ButtonType = {
    title: string
    onClick: () => void
}

export const Button = ({title, onClick}: ButtonType) => {
    const onClickHandler = () => {
        onClick()
    }

    return <button onClick={onClickHandler}>{title}</button>
};

