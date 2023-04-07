import StyledDiv from "../StyledDiv";

export default function Counter({ countries, countriesInfo }) {
  const countVisitedCountries = countriesInfo.filter((info) => info.isVisited);

  return (
    <>
      <StyledDiv>
        <h2>Counter</h2>
        <p>
          I have been in <strong>{countVisitedCountries.length}</strong>{" "}
          countries of total {countries.length} countries
        </p>
      </StyledDiv>
    </>
  );
}