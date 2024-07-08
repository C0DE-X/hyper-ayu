// Constants
const backgroundColor = '#0F1419';
const inactiveTabBackgroundColor = '#0c0f12';
const foregroundColor = '#e6e1cf';

// Colors
const RED = '#ff3333';
const GREEN = '#89b73d';
const YELLOW = '#f49c20';
const BLUE = '#3ea7dc';
const MAGENTA = '#b37ed0';
const LIGHT_GRAY = '#f2f2f2';
const DARK_GRAY = '#828c9a'

// Mapped Colors
const colors = {
  black: backgroundColor,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: BLUE,
  white: LIGHT_GRAY,
  lightBlack: DARK_GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: BLUE,
  colorCubes: '#fff',
  grayscale: foregroundColor
};

// Additional Constants
const cursorColor = YELLOW;
const borderColor = backgroundColor;

exports.decorateConfig = (config) => {
  let windowControlsCSS

  if (config.showWindowControls) {
    windowControlsCSS = '.list_2902 { margin-left: 0 !important; }'
  }

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
        background-color: ${MAGENTA} !important;
        border-color: ${MAGENTA} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background: ${backgroundColor} !important;
      }
      .splitpane_divider { 
            background-color: ${DARK_GRAY} !important;
            opacity: 0.4
       }
      .tabs_list {
        background: ${inactiveTabBackgroundColor};
      }
      .tab_active {
        background-color: ${backgroundColor} !important;
      }
		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			right: 0;
			height: 2px;
			background-color: ${YELLOW};
			transform: scaleX(0);
      transform-origin: left;
			will-change: transform;
		}
		.tab_tab.tab_active::before {
      left: 0;
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
		}
      .tab_text, .term_term {
			opacity: 0.6;
			will-change: opacity;
	   	}
	  	.tab_active .tab_text, .term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}
      ${windowControlsCSS}
    `
  })
}
