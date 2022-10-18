import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-white.png";
const Sidebar = ({ toggle, isOpen }) => {
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
                to="/about"
                className="font-medium text-lg uppercase text-white"
                onClick={toggle}
              >
                About
              </Link>
              <Link
                to="/services"
                className="font-medium uppercase text-white"
                onClick={toggle}
              >
                Services
              </Link>

               <div className="pt-10">
               <button   className="bg-white text-main-color flex md:hidden font-semibold rounded-sm p-2">Contact</button>

               </div>
            </div>

            <DrawerFooter>
            </DrawerFooter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
