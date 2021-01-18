function Instructions() {
    return (
        <div className="instructions">
            <b>Instruction :</b>
            <div className="instructions-table">
                <div>
                    cd .. 
                    <br/>cd "folder"
                    <br/>ls
                    <br/>fileName.exe
                    <br/>touch "file"
                    <br/>mkdir "folder"
                </div>
                <div>
                    move up one directory 
                    <br/>enter "folder"
                    <br/>list all files in folder
                    <br/>runs the file
                    <br/>create a file
                    <br/>create a folder
                </div>
            </div>
        </div>
    );
  }
  
  export default Instructions;