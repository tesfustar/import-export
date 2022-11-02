import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-white.png";
const Sidebar = ({ toggle, isOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      <Drawer placement="right" onClose={toggle} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"#0f4c5c"}>
          <DrawerCloseButton onClick={toggle} bg="white" />
          <DrawerHeader>
            <Link to="/">
              <img src={Logo} alt="" className="h-10" />
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col items-start  space-y-3  py-4 h-full">
              <Link
                to="/"
                className="font-medium uppercase text-white"
                onClick={toggle}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="font-medium uppercase text-white"
                onClick={toggle}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="font-medium text-lg uppercase text-white"
                onClick={toggle}
              >
                About
              </Link>

              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<BiChevronRight />}
                  fontWeight={"semibold"}
                  backgroundColor={"transparent"}
                  padding={0}
                  color={"white"}
                  _hover={{ backgroundColor: "transparent" }}
                  
                >
                  SERVICES
                </MenuButton>
                <MenuList zIndex={1000}>
                  <MenuItem
                    onClick={() => {
                      navigate("/import/1");
                      toggle();
                    }}
                  >
                    Import
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/export/2");
                      toggle();
                    }}
                  >
                    Export
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="pt-10">
                <button 
                 onClick={() => {
                  navigate("/contact");
                  toggle();
                }}
                className="bg-white text-main-color flex md:hidden font-semibold rounded-sm p-2">
                  Contact
                </button>
              </div>
            </div>

            <DrawerFooter></DrawerFooter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
