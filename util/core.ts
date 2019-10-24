const capabilities = require('../../capabilities.js');

export function chrome() {
    const chrome = {
        browserName: 'chrome',
        chromeOptions:
            {
                // args: [ "--headless", "--disable-gpu", "--window-size=1280,1024" ]
            },
    };
    return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
        capabilities.multiCapabilities.push(chrome);
        console.log(capabilities.multiCapabilities);
    }
}

export function firefox() {
    const firefox = {
        browserName: 'firefox',
        firefox_binary: "C:/Program Files/Mozilla Firefox/firefox.exe",
        binary_: "C:/Program Files/Mozilla Firefox/firefox.exe",
        marionette : true,
        acceptInsecureCerts : true,
    };
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
      capabilities.multiCapabilities.push(firefox);
      console.log(capabilities.multiCapabilities);
    }
}
