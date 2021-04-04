import { useEffect, useRef } from "react";

const useObserver = (allCountries) => {
    const countryCardRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const visibleCountryCard = entry.target;
                    const visibleCountryName = entry.target.dataset.country;
                    const isFlagLoaded = visibleCountryCard.firstElementChild.classList.contains("country__flag");

                    allCountries && allCountries.forEach(country => {
                        if (country.name === visibleCountryName) {
                            if (!isFlagLoaded) {
                                countryCardRef.current.insertAdjacentHTML("afterbegin", `
                                    <img class="country__flag" src=${country.flag} alt=${country.name} />
                                `)
                            }

                            observer.unobserve(countryCardRef.current)
                        }
                    })
                }
            })
        })

        observer.observe(countryCardRef.current);
    })

    return [countryCardRef]
}

export default useObserver;