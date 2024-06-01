

const ProjectCard = ({ title, description, image }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full m-4">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
