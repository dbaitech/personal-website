import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function EmbeddedResume() {
  const pdfUrl = "../assets/resume.pdf";
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
  });
  return (
    <section className="resume" id="resume">
      <Container>
        <div className="resume-content">
          <img
            src={pdfUrl}
            alt="If you cannot view my resume, please refer to my LinkedIn."
          />
        </div>
      </Container>
    </section>
  );
}

export default EmbeddedResume;
