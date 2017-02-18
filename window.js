const BrowserWindow = require('electron').BrowserWindow || require('electron').remote.BrowserWindow;
const os = require('os') || require('electron').remote.require('os');

const isMac = os.platform() === 'darwin';

const winOption = {
	width: 1100,
	height: 768,
	minWidth: 522,
	minHeight: 400,
	frame: isMac
}

function createWindow (opts={}) {
	const win = new BrowserWindow(
		Object.assign({}, winOption, {titleBarStyle: 'hidden'})
	);

	if (opts.hasOwnProperty('url')) {
		win.loadURL(opts.url)
	}

	return win;
}

module.exports = {
	createWindow
};