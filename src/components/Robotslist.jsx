import Card from "./Card"

function Robotslist({ robots }){
    const renderRobot = robots.map((robot)=>{

        return <Card key={robot.id} name={robot.name} email={robot.email} />
    })

    return(
        <div className="container">
            <div className="columns is-multiline">
                {renderRobot}
            </div>
        </div>
    )

}


export default Robotslist