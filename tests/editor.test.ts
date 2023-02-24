import { editInfo, editPC } from "../actioner/editor"
import { Info } from "../types/info-types"
import { PC } from "../types/pc-types"
import { expectedInfo1, expectedPC1, info1, pc1 } from "./test-constants"

describe('Test info modification', () => {
    it('should edit the config Gendarmerie', () => {
        expect(editInfo(info1 as Info, 'Gendarmerie')).toMatchObject(expectedInfo1)
    })
})

describe('Test pc modification', () => {
    it('should edit the config Gendarmerie', () => {
        expect(editPC(pc1 as PC, 'Gendarmerie')).toMatchObject(expectedPC1)
    })
})
