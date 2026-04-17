import '../index.css'
import { useState } from "react";



const Accordion = ({ items, keepOthersOpen }) => {

    const [openIds, setOpenIds] = useState([])

    function handleToggle(id) {
        if (keepOthersOpen) {
            setOpenIds((prev) =>
                prev.includes(id)
                    ? prev.filter((item) => item !== id)
                    : [...prev, id]
            );
        } else {
            setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
        }
    }

    // function caretRotation(){
    //     if (caret === "open"){

    //     }

    // }

    return (
        <div className="accordion-parent">
            {items.map((item) => {
                const isOpen = openIds.includes(item.id);

                return (
                    <div className={`accordion ${isOpen ? "toggled" : ""}`} key={item.id}>
                        <div className="accordion-item">
                            <div className="accordion-header" onClick={() => handleToggle(item.id)}>
                                <h3>{item.label}</h3>
                                <p>&#128899;</p>
                                <div>{isOpen ? "-" : "+"}</div>
                            </div>


                            {isOpen && (
                                <div className="content">
                                    {item.renderContent()}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};







//   <div className="accordion-item">
//             <div className="accordion-header" onClick={toggleHadler}>
//                 <h3>{props.title}</h3>
//                 <p>&#128899;</p>
//             </div>

//             <p>{props.text}</p>
//         </div>


export default Accordion