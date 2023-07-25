import { existsSync } from 'fs'
import { rm } from 'fs/promises'
import { backupProgram, backupZippedMod, getBackupFileName } from '../actioner/backuper'
import { TESTED_MOD } from './test-constants'

describe('getBackupFileName', () => {
    it('should insert .bak before the original extension', () => {
        expect(getBackupFileName('./program/TestMod.json')).toBe('./program/TestMod.bak.json')
    })

    it('should handle file names without a path', () => {
        expect(getBackupFileName('TestMod.json')).toBe('TestMod.bak.json')
    })

    it('should handle file names without an extension', () => {
        expect(getBackupFileName('./program/TestMod')).toBe('./program/TestMod.bak')
    })
})

describe('backupProgram', () => {
    it('should backup the program correctly', async () => {
        const testedMod = TESTED_MOD.replace('Test', '')
        const testedProgramBackupPath = 'program/GendarmerieNationaleSkinPack.bak.json'
        expect(existsSync(testedProgramBackupPath)).toBe(false)
        await backupProgram(testedMod)
        expect(existsSync(testedProgramBackupPath)).toBe(true)
        await rm(testedProgramBackupPath)
    })
})

jest.mock('../utils/path-utils')

describe('backupZippedMod', () => {
    it('should backup the zipped mod correctly', async () => {
        const testedMod = 'test_mod'
        const testedModBackupPath = 'test_mods/test_mod.bak.zip'
        expect(existsSync(testedModBackupPath)).toBe(false)
        await backupZippedMod(testedMod)
        expect(existsSync(testedModBackupPath)).toBe(true)
        await rm(testedModBackupPath)
    })
})
