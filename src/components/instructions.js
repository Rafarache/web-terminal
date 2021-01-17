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
                </div>
                <div>
                    move up one directory 
                    <br/>enter "folder"
                    <br/>list all files in folder
                    <br/>runs the file
                </div>
            </div>
        </div>
    );
  }
  
  export default Instructions;