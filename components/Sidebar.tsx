import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { WikiContext } from "../context/WikiContext";
import logo from "../public/rickandmortylogo.png";
import imagen from "../public/rickandmortyxd.png";
import { ItemActive, Logo, MenuItem, StyledSidebar } from "../styles/styles";

const Sidebar = () => {
  const { activedPage } = useContext(WikiContext);

  return (
    <div>
      <StyledSidebar>
        <Logo>
          <Image src={logo} alt="rick and morty logo" width={200} height={70} />
        </Logo>
        <Link href="/" passHref>
          {activedPage === "dashboard" ? (
            <ItemActive>Dashboard</ItemActive>
          ) : (
            <MenuItem>Dashboard</MenuItem>
          )}
        </Link>
        <Link href="/characters" passHref>
          {activedPage === "personajes" ? (
            <ItemActive>Personajes</ItemActive>
          ) : (
            <MenuItem>Personajes</MenuItem>
          )}
        </Link>
        <Link href="/episodes" passHref>
          {activedPage === "episodios" ? (
            <ItemActive>Episodios</ItemActive>
          ) : (
            <MenuItem>Episodios</MenuItem>
          )}
        </Link>
        <Link href="/places" passHref>
          {activedPage === "lugares" ? (
            <ItemActive>Lugares</ItemActive>
          ) : (
            <MenuItem>Lugares</MenuItem>
          )}
        </Link>
        <Image src={imagen} alt={"rick and morty dancing"} />
      </StyledSidebar>
    </div>
  );
};

export default Sidebar;
