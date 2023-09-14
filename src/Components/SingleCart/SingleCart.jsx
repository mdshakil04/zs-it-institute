const SingleCart = ({singleCart}) => {
    const {title} = singleCart
    return (
        <div>
            <li>{title}</li>
        </div>
    );
};

export default SingleCart;