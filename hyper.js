// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {

    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',

    // line height as a relative unit
    lineHeight: 1,

    // letter spacing as a relative unit
    letterSpacing: 0,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(255,255,255,0.8)',

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#000',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BEAM',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: '#303138',

    // terminal selection color
    selectionColor: 'rgba(248,28,229,0.3)',

    // border color (window, tabs)
    borderColor: '#333',

    // custom CSS to embed in the main window
    css: `
	.header_windowHeader {
		background-color: rgba(255, 255, 255, 0.15);
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
	}
	.header_windowHeader::after {
		content: "";
		position: absolute;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		height: 0px;
		border-bottom: 2px solid rgba(234, 136, 91, 0.7);
		border-radius: 50%;
	}
	.terms_termGroup::after {
		content: "";
		width: 10%;
		height: 400%;
		background-color: rgba(255, 255, 255, 0.025);
		position: absolute;
		top: 50%;
		left: 90%;
    	margin-left: 120vw;
		transform: translate(-50%, -50%) rotate(25deg);
		border-left: 10px solid rgba(234, 136, 91, 0.075);
	    animation: show-glare 1.2s forwards 2s;
	}
  .term_fit::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transform: translate(100vh, -5vh);
    // background-image: url('/Users/flizzet/Desktop/WorkAssets/Logos/FlizzetDigital/BubbleLogo1_noshadow.png');
    background-size: 12%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: bottom right;
    opacity: 0.3;
    filter: drop-shadow(5px 5px 0px rgba(0, 0, 0, 0.75));
    animation: bounce-up-logo 0.6s forwards 1.5s 
    animation-timing-function: cubic-bezier(0.175, 0.9, 0.32, 1.1);
  }
  .header_header:after {
  	content: "FlizzX";
  	font-family: "Corporation Games", sans-serif;
  	font-size: 35px;
  	color: rgba(204, 106, 61, 1.0);
  	position: absolute;
  	top: 0px;
  	right: 0px;
  	width: 20%;
  	height: 120%;
  	text-align: right;
  	text-transform: uppercase;
  	padding: 15px 95px;
    text-shadow:
    -1px -1px 0 white,  
    1px -1px 0 white,
    -1px 1px 0 white,
      1px 1px 0 white,
    -2px -2px 0 white,  
    2px -2px 0 white,
    -2px 2px 0 white,
      2px 2px 0 white,
    0px 5px 0px rgba(104, 46, 21, 1.0);
	margin-top: -1px;
	overflow: visible;
	// background: linear-gradient(to left, rgba(0, 0, 0, 0.35) 20%, rgba(0, 0, 0, 0));
	// border-bottom: 1px solid rgba(234, 136, 91, 0.3);
	opacity: 0.9;
	filter: 
		drop-shadow(2px 1px 0px rgba(50, 50, 50, 1.0))
		drop-shadow(1px 2px 0px rgba(50, 50, 50, 1.0));
  }
  .header_header:before {
  	content: "F";
  	font-family: "Bugfast", sans-serif;
  	font-weight: 200;
  	position: absolute;
  	font-size: 50px;
  	text-align: right;
  	width: auto;
  	height: 100%;
  	top: 0px;
  	right: 0px;
  	padding: 25px 35px;
  	transform: rotate(-30deg) scale(1.6);
	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: rgba(50, 50, 50, 1.0);
	filter: 
		drop-shadow(2px 4px 0px rgba(50, 50, 50, 1.0))
		drop-shadow(1px 2px 0px rgba(50, 50, 50, 1.0))
		drop-shadow(0px -1px 0px white)
		drop-shadow(1px 0px 0px white)
		drop-shadow(1px 1px 0px white)
		drop-shadow(-1px -1px 0px white)
		drop-shadow(-4px 4px 0px rgba(0, 0, 0, 0.3));
   z-index: 999;
   // opacity: 0.8;
	background: -webkit-linear-gradient(rgba(154, 56, 31, 1.0), rgba(234, 136, 91, 1.0));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: logo-bounce 1.3s alternate-reverse infinite;
    animation-timing-function: cubic-bezier(0.68, -1, 0.265, 1.9);
  }
  @keyframes bounce-up-logo {
    0% {
      transform: translateY(100vh);
      opacity: 0.3;
    }
    60% {
      transform: translate(-2.5vh, -2.5vh);
      opacity: 0.3;
    }
    90% {
      transform: translate(-2.5vh, -2.5vh);
      filter: drop-shadow(5px 5px 0px rgba(0, 0, 0, 0.1)) blur(0px);
      opacity: 0.3;
    }
    100% {
      transform: translate(-2.5vh, -2.5vh);
      filter: drop-shadow(5px 5px 0px rgba(0, 0, 0, 0.3)) blur(1px) brightness(0.5);
      opacity: 0.05;
    }
  }
  @keyframes show-glare {
    0% {
      width: 10%;
      margin-left: 120vw;
    }
    75% {
      width: 10%;
      margin-left: 0vw;

    }
    85% {
      width: 10%;
      margin-left: 0vw;
    }
    90% {
      width: 5%;
      margin-left: 0vw;
    }
    98% {
      width: 44%;
      margin-left: 0vw;
    }
    100% {
      width: 40%;
      margin-left: 0vw;
    }

  }
  @keyframes logo-bounce {
  	0% {
  		margin-top: 0px;
  	}
  	100% {
  		margin-top: -10px;
  	}
  }
  #hyper {
  	box-shadow: inset 0px 0px 5px white;
  }
  .header_header, .header_headerRounded {
  	background-color: rgba(255, 255, 255, 0.1);
  	border-bottom: 4px solid rgba(234, 136, 91, 0.25);
  	box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.05)
  }
	`,

    // custom CSS to embed in the terminal window
    termCSS: '',

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#C51E14',
      green: '#1DC121',
      yellow: '#C7C329',
      blue: '#0A2FC4',
      magenta: '#C839C5',
      cyan: '#20C5C6',
      white: '#C7C7C7',
      lightBlack: '#686868',
      lightRed: '#FD6F6B',
      lightGreen: '#67F86F',
      lightYellow: '#FFFA72',
      lightBlue: '#6A76FB',
      lightMagenta: '#FD7CFC',
      lightCyan: '#68FDFE',
      lightWhite: '#FFFFFF',
    },

    // Borders
    hyperBorder: {
	blurredColors: ['#cc2e47', '#FFFFFF'],
	borderColors: ['rgba(234, 136, 91, 1.0)', '#6c879b'],
	borderWidth: '4px',
        borderRadiusOuter: '6px',
	borderRadiusInner: '8px'
    },

    
    // opacity with hyper-opacity
    opacity: 0.75,
    opacity: {
        focus: 0.9,
        blur: 0.7
    },


    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: false,

    // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
    // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: 'vertical',

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: true,

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hyper-oceans16",
    "hyperborder",
    "hyper-opacity",
    "hyper-folder-icon"
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};