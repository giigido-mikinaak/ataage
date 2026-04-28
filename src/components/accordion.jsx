import '../index.css'
import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";


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

    return (
        <div className="accordion-parent">
            {items.map((item) => {
                const isOpen = openIds.includes(item.id);

                return (
                    <div className={`accordion ${isOpen ? "toggled" : ""}`} key={item.id}>
                        <div className="accordion-item" onClick={() => handleToggle(item.id)}   >
                            <div className="accordion-header" >
                                <h3>{item.label}</h3>
                                {isOpen ? (
                                    <CaretDownIcon size={32} style={{ transform: 'rotate(180deg)', transition: 'ease-out 150ms',  color:'var(--primary)' }} />

                                ) : (
                                    <CaretDownIcon size={32} style={{ transition: 'ease-out 150ms', color:'var(--primary)'}} />


                                )}

                            </div>

                        </div>


                        {isOpen && (
                            <div className="content" >
                                {item.renderContent()}
                            </div>
                        )}
                    </div>
                );
            })}
        </div >
    );
};

export default Accordion