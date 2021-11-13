const fooBars = [
  {
    foo: 'bar1',
    bar: 'baz1',
  },
  {
    foo: 'bar2',
    bar: 'baz2',
  },
];

let selectedFooBar = fooBars[0];

chrome.runtime.onInstalled.addListener(reason => {

  // initial setup for when the plugin is added to Chrome.
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.storage.sync.set({ fooBars });
    chrome.storage.sync.set({ selectedFooBar });
  }

});