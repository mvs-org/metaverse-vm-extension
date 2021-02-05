const MetaverseVMInpageProvider = require('./MetaverseVMInpageProvider')

/**
   * Initializes a MetaverseVMInpageProvider and (optionally) sets it on window.metaversevm.
   *
   * @param {Object} opts - An options bag.
   * @param {Object} opts.connectionStream - A Node.js stream.
   * @param {number} opts.maxEventListeners - The maximum number of event listeners.
   * @param {boolean} opts.shouldSendMetadata - Whether the provider should send page metadata.
   * @param {boolean} opts.shouldSetOnWindow - Whether the provider should be set as window.metaversevm
   * @returns {MetaverseVMInpageProvider | Proxy} The initialized provider (whether set or not).
   */
function initProvider ({
  connectionStream,
  maxEventListeners = 100,
  shouldSendMetadata = true,
  shouldSetOnWindow = true,
} = {}) {

  if (!connectionStream) {
    throw new Error('Must provide a connection stream.')
  }

  let provider = new MetaverseVMInpageProvider(
    connectionStream, { shouldSendMetadata, maxEventListeners },
  )

  provider = new Proxy(provider, {
    deleteProperty: () => true, // some libraries, e.g. web3@1.x, mess with our API
  })

  if (shouldSetOnWindow) {
    setGlobalProvider(provider)
  }

  return provider
}

/**
 * Sets the given provider instance as window.initialized and dispatches the
 * 'metaversevm#initialized' event on window.
 *
 * @param {MetaverseVMInpageProvider} providerInstance - The provider instance.
 */
function setGlobalProvider (providerInstance) {
  window.metaversevm = providerInstance
  window.dispatchEvent(new Event('metaversevm#initialized'))
}

module.exports = {
  initProvider,
  setGlobalProvider,
}
