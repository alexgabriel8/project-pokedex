import { createContext, useState } from "react";

// Constants
import { defaultPkmListStatus } from "./defaultPkmListStatus";

// Types
import { TPkmListStatusContext } from "./PkmListStatusContext.types";

const PkmListStatusContext = createContext<TPkmListStatusContext>({
  sort: {},
  filter: {},
} as unknown as TPkmListStatusContext);

const PkmListStatusProvider = ({ children }: React.PropsWithChildren) => {
  const [pkmListStatus, setPkmListStatus] = useState(defaultPkmListStatus);

  return (
    <PkmListStatusContext.Provider value={{ pkmListStatus, setPkmListStatus }}>
      {children}
    </PkmListStatusContext.Provider>
  );
};

export { PkmListStatusContext, PkmListStatusProvider };
