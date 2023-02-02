// Dumb component to display the buttons
const Button = ({ value, onClick }) => (
     <button className="btn-md border-0 cal-btn" onClick={onClick}>{value}</button>
);


export default Button