
const Trainer = () => {
    const me = {
        name: "JH",
        age: 29,
        specialism: "software"
    }


    return (
        <div>
            <p>Name: {me.name}</p>
            <p>Age: {me.age}</p>
            <p>Specialism: {me.specialism}</p>
            {
                //<p>Date: {new Date().toString()}</p>
            }
        </div>
    )

}

export default Trainer;