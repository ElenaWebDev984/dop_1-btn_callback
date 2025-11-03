
type ButtonType = {
    title: string
    onClick: (id: number) => void
    id: number
}

export const Button = ({title, onClick, id}: ButtonType) => {
    const onClickHandler = () => {
        onClick(id)
    }

    return <button onClick={onClickHandler}>{title}</button>
};

