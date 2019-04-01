import React, { PureComponent } from "react";
// import Skill from "./skill/Skill";
// import Project from "./project/Project";
// import Sertifikat from "./sertifikat/Sertifikat";

// const Timeline = () => (
//   <div class="mytimeline" id="myproject">
//     <Sertifikat />
//   </div>
// );

const Skill = React.lazy(() => import("./skill/Skill"));
const Project = React.lazy(() => import("./project/Project"));
const Sertifikat = React.lazy(() => import("./sertifikat/Sertifikat"));

class Timeline extends PureComponent {
  state = {
    page: "skill"
  };

  pgRender = Page => (
    <div class="mytimeline" id="myproject">
      {this.btnRender()}
      <Page />
    </div>
  );

  onRouteChange = page => {
    this.setState({
      page
    });
  };

  btnRender = () => (
    <div class="w3-bar tmnav">
      <button
        class="w3-bar-item w3-button"
        onClick={() => this.onRouteChange("skill")}
      >
        Library and Tools
      </button>
      <button
        class="w3-bar-item w3-button"
        onClick={() => this.onRouteChange("project")}
      >
        Project
      </button>
      <button
        class="w3-bar-item w3-button"
        onClick={() => this.onRouteChange("sertifikat")}
      >
        Sertifikat
      </button>
    </div>
  );

  render() {
    const { page } = this.state;
    if (page === "skill") {
      return this.pgRender(Skill);
    } else if (page === "project") {
      return this.pgRender(Project);
    } else if (page === "sertifikat") {
      return this.pgRender(Sertifikat);
    }
  }
}

export default Timeline;
