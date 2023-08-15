// Add a suffix to the title of the page.(From https://github.com/docsifyjs/docsify/issues/540)
function titlePlugin(config) {
    return (hook, vm) => {
      hook.doneEach((content) => {
        document.title += config.suffix
      });
    }
  }