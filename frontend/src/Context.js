import { createContext, useState } from "react";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(open);

  return (
    <Context.Provider
      value={{
        open,
        setOpen,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </Context.Provider>
  );
}
