const GridContainer = (props) => {
    return (
        <div className="grid grid--countries">
            {props.children}
        </div>
    );
}
 
export default GridContainer;