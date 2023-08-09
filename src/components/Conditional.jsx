const Conditional = () => {
    const error = false;
    if (error) return <p style={{color: "red"}}>DANGER</p>;
    else return <p>All good</p>
}

export default Conditional;