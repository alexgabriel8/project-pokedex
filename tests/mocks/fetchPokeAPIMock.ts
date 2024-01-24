import { vi } from "vitest";

import { mockedPkms } from "../mockedPkms";

const fetchPokeAPIMock = {
    getPokemon: {
        withPokemon: () => vi.spyOn(global, "fetch").mockImplementation(() => 
            Promise.resolve({
                json: () => Promise.resolve(mockedPkms.unstructured[0])
            }) as any
        ),
        
        noPokemon: () => vi.spyOn(global, "fetch").mockImplementation(() => 
            Promise.resolve({
                json: () => Promise.resolve(undefined),
                status: 404
            }) as any
        )
    }
}

export { fetchPokeAPIMock };
