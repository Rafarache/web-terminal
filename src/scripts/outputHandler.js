import decodeCommand from "./decodeCommand"

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

export default function commandOutput(command, file) {
    var decodedCommand = decodeCommand(command)
    var instruction = decodedCommand[0]
    var output = ""

    if (isExecutable(instruction)) {
        return output
    } else {
        switch (instruction) {
            case 'ls':
                    output = <div className="output">{getDirFiles(file)}</div>
                break
            case 'cd':
                if (decodedCommand.length === 1) {
                    output = "No name typed"
                } else {
                    output = ""
                }
                break
            default:
                output = "Command not found"
                break
        }
        return output
    }
}