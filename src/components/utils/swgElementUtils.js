export function updateElementStyle(elements, styleKey, styleValue) {
  elements.forEach((element) => {
    element.style[styleKey] = styleValue;
  });
}

export function removeElementClasses(elements, classes) {
  elements.forEach((element) => {
    element.classList.remove(...classes);
  });
}

export function addElementClasses(elements, classes) {
  elements.forEach((element) => {
    element.classList.add(...classes);
  });
}

export function checkElementClass(element, classToBeChecked) {
  return element.classList.contains(classToBeChecked);
}

export function createElement(elementType, classes) {
  const newElement = document.createElement(elementType);
  if (classes) addElementClasses([newElement], classes);
  return newElement;
}

export function getElementAttribute(element, attributeName) {
  return element.getAttribute(attributeName);
}

export function setElementAttribute(element, attributes) {
  attributes.forEach((attribute) => {
    element.setAttribute(attribute.name, attribute.value);
  });
}

export function appendElement(element, children) {
  children.forEach((child) => {
    element.append(child);
  });
}

export function querySelect(element, queryString) {
  return element.querySelector(queryString);
}

export function querySelectAll(element, queryString) {
  return element.querySelectorAll(queryString);
}

export function getElementHeight(element) {
  return element.getBoundingClientRect().height;
}
