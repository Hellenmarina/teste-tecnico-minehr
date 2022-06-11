import {
  HeaderDiv,
  HeaderOne,
  Tittle,
  Subtittle,
  FilterDiv,
  HeaderTitleFilter,
} from "./HeaderStyle";
import { FaFilter } from "react-icons/fa";

function Header() {
  return (
    <HeaderDiv>
      <HeaderOne></HeaderOne>
      <HeaderTitleFilter>
        <div>
          <Tittle>Dashboard</Tittle>
          <Subtittle>Desafio Técnico Frontend</Subtittle>
        </div>
        <FilterDiv>
          <FaFilter /> <p>Filtrar</p>
        </FilterDiv>
      </HeaderTitleFilter>
    </HeaderDiv>
  );
}

export default Header;
