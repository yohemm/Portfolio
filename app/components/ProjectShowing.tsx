interface ProjectShowing {
    name: string;
    images: string[];
    children: React.ReactNode;
}

export const ProjectShowing = (props:ProjectShowing) => {
    return (
        <div className="projet-pers">
            <div className="card">
                <div className="front-card face-card" style={{backgroundImage: "url("+ props.images[0]+")"}}>
                    <h4>{props.name}</h4>
                </div>
                <div className="back-card face-card" style={props.images.length >= 1?{backgroundImage: "url("+ props.images[1]+")"}:{backgroundImage: "url("+ props.images[0]+")"}}>
                    <p>{props.children}</p>
                </div>
            </div>
        </div>
    );
}