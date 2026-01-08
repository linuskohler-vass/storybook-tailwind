const cssVarCache = {};

export function updateCssVars() {
  cssVarCache.breakpointXl = getComputedStyle(document.documentElement)
    .getPropertyValue('--breakpoint-xl').trim();
  cssVarCache.breakpointLg = getComputedStyle(document.documentElement)
    .getPropertyValue('--breakpoint-lg').trim();
  cssVarCache.breakpointMd = getComputedStyle(document.documentElement)
    .getPropertyValue('--breakpoint-md').trim();
}

export function getBreakpointXl() {
  return cssVarCache.breakpointXl;
}

export function getBreakpointLg() {
  return cssVarCache.breakpointLg;
}

export function getBreakpointMd() {
  return cssVarCache.breakpointMd;
}


