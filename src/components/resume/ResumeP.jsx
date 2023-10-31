import "./resPstyle.css";
function ResumeDownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div>
      <h1 className="projectHeading">RESUME</h1>

      <div className="resumeContainer">
        <h2>You can download the copy of a resume from here</h2>
        <button onClick={handleDownload} className="bn5">
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default ResumeDownloadButton;
