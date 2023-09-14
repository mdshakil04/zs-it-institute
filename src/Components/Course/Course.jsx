
const Course = ({course, handleAddToCart}) => {
    const {title, image, description, price, credit} = course
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-4">
                <figure  className="pt-4 px-4">
                    <img src={image} alt="Course-Image" className="rounded-xl" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between gap-10">
                    <p>Price: $ {price}</p>
                    <p>Credit : <span>{credit}</span>hr</p>
                    </div>
                    <div className="card-actions">
                    <button 
                        onClick={() => handleAddToCart(course)}
                        className="btn btn-wide bg-blue-600 text-white hover:bg-lime-500">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;