const GridContainer = (props) => {
    return (
        <div className={`grid grid--${props.type}`}>
            {props.children}
        </div>
    );
}
 
export default GridContainer;