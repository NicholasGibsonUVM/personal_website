import Project from "../components/project";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects container">
      <div className="row gy-3 gx-3">
        <Project
          Date="Spring 2023"
          Name="Moonboard Grade Predictor"
          Link="https://moonboard-grade-guesser.herokuapp.com/"
          Description="This project is a website that uses machine learning to predict the grade of a moonboard problem based on the holds used in the problem."
          Source="https://github.com/NicholasGibsonUVM/Moonboard-Classification-Website"
        />
        <Project
          Date="Fall 2022"
          Name="Olympia Framework"
          Link="https://github.com/uvm-plaid/olympia"
          Description="This is a research project that I am a contributor on. The goal of the project is to create a framework for testing different MPC protocols"
          Source="https://github.com/uvm-plaid/olympia"
        />
        <Project
          Date="Summer 2022"
          Name="Pattern Free Music"
          Link="https://nsgibson.w3.uvm.edu/Golomb_Music/"
          Source="https://github.com/NicholasGibsonUVM/Golumb_Music"
          Description="A website that allows users to create pattern free music using a Costas Array"
        />
        <Project
          Date="Sring 2022"
          Name="Desktop High Cow"
          Link="https://github.com/NicholasGibsonUVM/CowWidget"
          Source = "https://github.com/NicholasGibsonUVM/CowWidget"
          Description="This is a python app that displays a sleepy highland cow on your desktop it currently only works on windows"
        />
      </div>
    </div>
  );
}
