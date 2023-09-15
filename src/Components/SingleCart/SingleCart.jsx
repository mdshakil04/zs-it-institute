const SingleCart = ({singleCart}) => {
    const {title} = singleCart
    return (
        <div className="px-4">
        
            <li>{title}</li>
        
        </div>
    );
};

export default SingleCart;