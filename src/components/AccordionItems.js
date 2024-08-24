
function AccordionItems({ number, question, answer, curOpen, onOpen }) {

    const open = number === curOpen;

    const handleClick = () => {
        onOpen(open ? null : number);
    };


    return (
        <div className={`item ${open ? 'open' : ''}`} onClick={handleClick}>
            <p className="number">{number > 10 ? number : "0" + number}"</p>
            <p className="title">{question}</p>
            <p className="icon">{open ? "-" : "+"}</p>
            {open && <p className="content-box">{answer}</p>}
            
        </div>
    );
}

export default AccordionItems;