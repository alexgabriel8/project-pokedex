import { useEffect } from "react"
import { abilityHasScrolling } from "../scripts/abilityHasScrolling"

const useAbilityHasScrolling = (abilityDesc: string | false, index: number) => {
    useEffect(() => {
        abilityHasScrolling(`#ability-${index + 1} .ability-description`)
    }, [abilityDesc])
}

export { useAbilityHasScrolling }