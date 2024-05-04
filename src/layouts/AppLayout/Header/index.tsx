import React from "react";
import WrapperPadding from "@/components/wrappers/WrapperPadding";
import HeaderLogo from "./components/HeaderLogo";
import NavigationItems from "./components/NavigationItems";

const Header = () => {
  return (
    <WrapperPadding className="flex w-full items-center justify-between gap-4 absolute top-0 z-30">
      <HeaderLogo />
      <NavigationItems />
    </WrapperPadding>
  );
};

export default Header;
