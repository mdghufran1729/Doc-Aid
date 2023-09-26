import React from "react";
import { Flex, Text, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bgColor="teal"
      color="white"
    >
      <Text fontSize="xl" fontWeight="bold">
        Reshita
      </Text>
      <Flex as="ul" listStyleType="none" gap="5rem">
        <li>
          <Link
            as={RouterLink}
            to="/"
            textDecoration="none"
            _hover={{ textDecoration: "underline" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            as={RouterLink}
            to="/product"
            textDecoration="none"
            _hover={{ textDecoration: "underline" }}
          >
            Product
          </Link>
        </li>
        <li>
          <Link
            as={RouterLink}
            to="/about"
            textDecoration="none"
            _hover={{ textDecoration: "underline" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            as={RouterLink}
            to="/contact"
            textDecoration="none"
            _hover={{ textDecoration: "underline" }}
          >
            Contact
          </Link>
        </li>
      </Flex>
    </Flex>
  );
}

export default Navbar;
