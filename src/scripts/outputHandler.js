//  Imports
// Scripts
import decodeCommand from "./decodeCommand"

// Classes
import File from "../classes/file"

function isDirContentEmpty(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        return false
    }
    return true
}

function isExecutable(instruction) {
    var lastFour = instruction.substr(instruction.length - 4);
    if(lastFour === '.exe') return true
    return false
}

function getDirFiles(dir) {
    if (isDirContentEmpty(dir.content)) {
        return "Directory with no files"
    } else {
        return dir.content.map((file) => {
            return<div className="ls-print">{file.type===".dir"?file.name :file.name + file.type}</div>
        })
    }
}

function isFileInDir (fileName,dir) {
    var newDir = dir.content.find(dir => dir.name === fileName)
    if(newDir  === undefined) {
        return false
    } else if (newDir.type === ".dir") {
        return true
    }
    return false
}

function getFileInDirContent (fileName,dir) {
    var newDir = dir.content.find(dir => dir.name === fileName)
    if(dir  === undefined) {
        return null
    } else {
        return newDir
    }
}

export default function commandOutput(command, file, setCurrentFile) {
    var decodedCommand = decodeCommand(command)
    var instruction = decodedCommand[0]
    var output = ""

    if (isExecutable(instruction)) {
        return output
    } else {
        var argument = decodedCommand[1]
        switch (instruction) {

            case 'ls':
                    // Table of files
                    output = <div className="output">{getDirFiles(file)}</div>
                break

            case 'cd':
                // Has not typed dir name
                if (decodedCommand.length === 1) {
                    output = "No directory name typed"

                // Go back one dir
                } else if (argument === "..") {
                    if(file.location !== "root") {
                        setCurrentFile(file.location)
                        output = ""
                    } else {
                        output = "Already in root directory"
                    }

                // Enter dir
                } else {
                    // Is an Dir
                    if(isFileInDir(argument,file)) {
                        setCurrentFile(getFileInDirContent(argument,file))
                    // Not an dir, so cannot enter
                    } else {
                        output = "Cannot enter file which is not directory"
                    }
                }
                break

            case 'mkdir':
                // Has not typed dir name
                if (decodedCommand.length === 1) {
                    output = "No directory name typed"
                
                // Make dir
                } else {
                    var newDir = new File(argument,".dir",[],file)
                    file.content.push(newDir)
                }
                break

            case '':
                output = ""
                break
            
            default:
                output = "Command not found"
                break
        }
        return output
    }
}