import React from "react";
import "./project.css";

export default function Project({ Name, Description, Link, Date, Source }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="project">
        <div className="project-content">
          <h2>{Date}</h2>
          <a href={Link} target="_blank" rel="noreferrer">
            <h1>{Name}</h1>
          </a>
          <p>{Description}</p>
        </div>
        <a href={Source} target="_blank" rel="noreferrer" class="source-link">
          <span>Source </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{
              width: "1rem",
              height: "1rem",
              fill: "currentColor",
            }}
          >
            <g data-name="Layer 2">
              <g data-name="external-link">
                <rect width="24" height="24" opacity="0"></rect>
                <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path>
                <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
