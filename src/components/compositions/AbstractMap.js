import './abstract-map.scss';

export default class AbstractMap {

  constructor(el) {
    // selectors
    this.domSelectors = {

    };

    // classes
    this.classes = {

    };

    this.element = el;

    this.wrapperElement = el;
    console.log(this.wrapperElement, "wrapper el");

    // init
    this.init();
  }

  init() {
    this.abstractMapSVG = this.wrapperElement.querySelector("svg");
    this.swgNetworkProjects = Array.from(this.wrapperElement.querySelectorAll(".swg-abstract-map-main__project"));
    this.imageElement = null;
    this.secondImageElement = null;

    this.highlightedImageClass = "swg-abstract-map__highlighted-image";

    this.ellipseHighlightColor = "#E4032E";
    this.ellipseFillColor = "#B2B2B2";

    this.newTop = "";
    this.newLeft = "";

    this.offset = 10;
    this.isAccordionView = false;

    this.initResponsiveBehavior();
    this.initialize();
  }

  initResponsiveBehavior() {
    const checkBreakpoint = () => {
      this.isAccordionView = window.innerWidth < 1024; // Example breakpoint for accordion
      this.reset();
    };

    window.addEventListener("resize", checkBreakpoint);
    checkBreakpoint();
  }

  initialize() {
    if (this.swgNetworkProjects.length) {
      if (this.isAccordionView) {
        console.log("Show accordion view");
        //this.toggleAccordion(this.swgNetworkProjects[0]);
      }

      this.highlightProject(this.swgNetworkProjects[0]);
      this.addListeners();
    }
  }

  reset() {
    //this.removeProjectHighlight();
    //this.removeListeners();
    //this.addListeners();
    //this.initialize();
  }

  addListeners() {
    console.log(this.swgNetworkProjects);

    this.swgNetworkProjects.forEach((project) => {
      project.addEventListener("mouseenter", () => {
        this.highlightProject(project);
      });
    });
  }

  removeListeners() {
    this.swgNetworkProjects.forEach((project) => {
      project.removeEventListener("mouseenter", project.__highlightHandler);
      project.removeEventListener("click", project.__toggleHandler);

      delete project.__highlightHandler;
      delete project.__toggleHandler;
    });
  }

  highlightProject(project) {
    this.removeProjectHighlight();

    const projectData = this.getProjectData(project);
    console.log(projectData.pointIDs, "project data");

    this.assignCurrentActiveProjectData(projectData);
    this.highlightEllipses(this.ellipseHighlightColor, this.getEllipsesById(projectData.pointIDs));
    this.showImages();
  }

  removeProjectHighlight() {
    this.highlightEllipses(this.ellipseFillColor, this.getAllEllipses());
    this.hideImages();
  }

  assignCurrentActiveProjectData(data) {
    const { pointIDs, imageSrc, imageAlignment, imagePointID, title } = data;

    this.projectTitle = title;
    this.pointIDs = pointIDs;
    this.imageSrc = imageSrc;
    this.imageAlignment = imageAlignment;
    this.imagePointID = imagePointID;
  }

  getProjectData(project) {
    return {
      pointIDs: JSON.parse(project.getAttribute("data-pointids")),
      imageSrc: project.getAttribute("data-imagesrc"),
      imageAlignment: project.getAttribute("data-imagealignment"),
      imagePointID: project.getAttribute("data-imagepointid"),
      title: project.getAttribute("title"),
    };
  }

  toggleAccordion(project) {
    const isOpen = project.classList.contains("open");
    this.swgNetworkProjects.forEach((p) => p.classList.remove("open"));
    if (!isOpen) {
      project.classList.add("open");
    }
  }

  showImages() {
    if (!this.imageElement) {
      this.imageElement = this.createImageElement("img1 active");
      this.secondImageElement = this.createImageElement("img2");

      this.wrapperElement.appendChild(this.imageElement);
      this.wrapperElement.appendChild(this.secondImageElement);
    }

    this.positionImageElement([this.imageElement, this.secondImageElement]);
    this.swapImage(this.newTop, this.newLeft);
  }

  hideImages() {
    if (this.imageElement && this.secondImageElement) {
      this.imageElement.classList.add("hidden");
      this.secondImageElement.classList.add("hidden");
    }
  }

  createImageElement(classes) {
    const img = document.createElement("img");
    img.className = `${this.highlightedImageClass} ${classes}`;
    return img;
  }

  swapImage(newTop, newLeft) {
    const activeImage = this.imageElement.classList.contains("active")
      ? this.imageElement
      : this.secondImageElement;
    const inactiveImage = activeImage === this.imageElement
      ? this.secondImageElement
      : this.imageElement;

    inactiveImage.src = this.imageSrc;
    inactiveImage.alt = this.projectTitle;
    inactiveImage.tabIndex = 0;

    activeImage.alt = "";
    activeImage.tabIndex = -1;

    activeImage.style.opacity = "0";
    inactiveImage.style.opacity = "1";
    activeImage.style.transform = `translate(${newLeft}, ${newTop})`;
    inactiveImage.style.transform = `translate(${newLeft}, ${newTop})`;

    activeImage.classList.remove("active");
    inactiveImage.classList.add("active");
  }

  positionImageElement(images) {
    images.forEach((image) => {
      const mapRect = this.wrapperElement.getBoundingClientRect();

      console.log(this.imagePointID, "imagePointId");

      const imagePoint = this.abstractMapSVG.querySelector(`#${this.imagePointID}`);
      const imagePointRect = imagePoint.getBoundingClientRect();

      const top = imagePointRect.top - mapRect.top;
      const left = imagePointRect.left - mapRect.left;

      switch (this.imageAlignment) {
        case "right":
          this.newTop = `${top}px`;
          this.newLeft = `${left + this.offset}px`;
          break;
        case "left":
          this.newTop = `${top}px`;
          this.newLeft = `${left - image.width - this.offset}px`;
          break;
        case "top":
          this.newTop = `${top - image.height - this.offset}px`;
          this.newLeft = `${left}px`;
          break;
        case "bottom":
          this.newTop = `${top + this.offset}px`;
          this.newLeft = `${left}px`;
          break;
      }
    });
  }

  highlightEllipses(color, ellipses) {
    ellipses.forEach((ellipse) => {
      ellipse.setAttribute("fill", color);
      console.log("Fill ellipse");
    });
  }

  getEllipsesById(ids) {
    return ids.map((id) => this.abstractMapSVG.querySelector(`#${id}`)).filter(Boolean);
  }

  getAllEllipses() {
    return Array.from(this.abstractMapSVG.querySelectorAll("ellipse"));
  }
}

