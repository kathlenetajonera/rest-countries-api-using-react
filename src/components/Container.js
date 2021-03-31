import CountryCard from "./CountryCard";
import GridContainer from "./GridContainer";
import SearchFilterContainer from "./SearchFilterContainer";

const Container = () => {
    return (
        <div className="container">
            <SearchFilterContainer />
            <GridContainer>
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
            </GridContainer>
        </div>
    );
}

export default Container;