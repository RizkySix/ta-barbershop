import { HoverButtonStyle } from "@/lib/style";
import { HelperFunc } from "@/lib/utils";
import { Button, Text } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface ButtonTemplateProps {
    onClick?: () => void;
    title: string;
    icon?: ReactElement<ReactNode>
    color?: string,
    width?: string
  }
  
  export function ButtonTemplate({
    onClick,
    title,
    icon = <FaWhatsapp />,
    color = "#b0662c",
    width
   
  }: ButtonTemplateProps) {
    return (
      <Button
        onClick={onClick}
        colorScheme="green"
        variant="outline"
        borderColor={color}
        color={color}
        _hover={HoverButtonStyle}
        size={width ? width : (HelperFunc.IsMobile() ? "sm" : "md")}
        leftIcon={icon}
      >
        <Text fontSize={{ base: "xs", lg: "md" }}>{title}</Text>
      </Button>
    );
  }