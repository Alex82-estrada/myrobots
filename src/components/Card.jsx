function Card({name,email}){
    console.log(name)
    console.log(email)
    return(
        <div className="column is-one-quarter">
            <div className="card">
                <div className="card-imagen">
                    <figure className="image is-4by3">
                        <img 
                         src={`https://robohash.org/${name}`}
                         alt={`${email}`}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">\{name}</p>
                            <p className="sustitle is-5">{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card