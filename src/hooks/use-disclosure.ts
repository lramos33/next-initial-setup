import { useState } from "react";

interface IUseDisclosureArgs {
  defaultIsOpen?: boolean;
}

export function useDisclosure({ defaultIsOpen = false }: IUseDisclosureArgs = {}) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onToggle = () => {
    setIsOpen(currentValue => !currentValue);
  };

  return { onOpen, onClose, isOpen, onToggle };
}
