import PropTypes from "prop-types";

// const Trainer = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>Specialism: {props.specialism}</p>
//             {
//                 //<p>Date: {new Date().toString()}</p>
//             }
//         </div>
//     )

// }

const Trainer = ({name, age, specialism}) => {
    return (
        <div>
            <p>{`Name: ${name}`}</p>
            <p>{`Age: ${age}`}</p>
            <p>{`Specialism: ${specialism}`}</p>
            {
                //<p>Date: {new Date().toString()}</p>
            }
        </div>
    )

}

Trainer.defaultProps = {
    specialism: "Software"
}

Trainer.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    specialism: PropTypes.string,
}
export default Trainer;