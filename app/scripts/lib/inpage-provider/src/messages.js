module.exports = {
  errors: {
    disconnected: () => `MetaverseVM: Lost connection to MetaverseVM background process.`,
    sendSiteMetadata: () => `MetaverseVM: Failed to send site metadata. This is an internal error, please report this bug.`,
    unsupportedSync: (method) => `MetaverseVM: The MetaverseVM Web3 object does not support synchronous methods like ${method} without a callback parameter.`, // TODO:deprecation:remove
  },
  warnings: {
    // TODO:deprecation:remove
    autoRefreshDeprecation: `MetaverseVM: MetaverseVM will soon stop reloading pages on network change.\nSet 'metaversevm.autoRefreshOnNetworkChange' to 'false' to silence this warning.`,
    // deprecated methods
    enableDeprecation: `MetaverseVM: 'metaversevm.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102`,
    sendDeprecation: `MetaverseVM: 'metaversevm.send(...)' is deprecated and may be removed in the future. Please use 'metaversevm.sendAsync(...)' or 'metaversevm.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    // deprecated events
    events: {
      chainIdChanged: `MetaverseVM: The event 'chainIdChanged' is deprecated and WILL be removed in the future. Please use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      close: `MetaverseVM: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      data: `MetaverseVM: The event 'data' is deprecated and may be removed in the future.`,
      networkChanged: `MetaverseVM: The event 'networkChanged' is deprecated and may be removed in the future. Please use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      notification: `MetaverseVM: The event 'notification' is deprecated and may be removed in the future. Please use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    },
    // misc
    experimentalMethods: `MetaverseVM: 'metaversevm._metaversevm' exposes non-standard, experimental methods. They may be removed or changed without warning.`,
    publicConfigStore: `MetaverseVM: The property 'publicConfigStore' is deprecated and WILL be removed in the future.`,
  },
}
