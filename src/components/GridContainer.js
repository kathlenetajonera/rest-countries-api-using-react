const GridContainer = (props) => {
    return (
        <div className="grid grid--four-col">
            {props.children}
        </div>
    );
}
 
export default GridContainer;