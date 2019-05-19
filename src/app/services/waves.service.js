export const WavesKeeperClient = (wavesKeeper => {

    const isAvailable = () => Boolean(wavesKeeper);
    const availableError = 'Waves keeper is not available, please install browser extension.'

    return {
        isAvailable: () => isAvailable(),
        availableError: () => availableError,
        /**@returns {Promise} */
        auth: (...args) => isAvailable() ? wavesKeeper.auth(...args) : Promise.reject(availableError),
        /**@returns {Promise} */
        initialPromise: (...args) => isAvailable() ? wavesKeeper.initialPromise(...args) : Promise.reject(availableError),
        /**@returns {Promise} */
        notification: (...args) => isAvailable() ? wavesKeeper.notification(...args) : Promise.reject(availableError),
        on: (...args) => {
            if (isAvailable()) {
                return wavesKeeper.on(...args);
            }
            throw new Error(availableError);
        },
        /**@returns {Promise} */
        publicState: (...args) => isAvailable() ? wavesKeeper.publicState(...args) : Promise.reject(availableError),
        /**@returns {Promise} */
        signAndPublishCancelOrder: (...args) => isAvailable() ? wavesKeeper.signAndPublishCancelOrder(...args) : Promise.reject(availableError),
        /**@returns {Promise} */
        signAndPublishOrder: (...args) => isAvailable() ? wavesKeeper.signAndPublishOrder(...args) : Promise.reject(availableError),
        /**@returns {Promise} */
        signAndPublishTransaction: (...args) => isAvailable() ? wavesKeeper.signAndPublishTransaction(...args) : Promise.reject(availableError),
        /**@returns {Promise} */
        signCancelOrder: (...args) => isAvailable() ? wavesKeeper.signCancelOrder(...args) : Promise.reject(availableError),
        /**@returns {Promise} */
        signOrder: (...args) => isAvailable() ? wavesKeeper.signOrder(...args) : Promise.reject(availableError),
        /**@returns {Promise} */
        signRequest: (...args) => isAvailable() ? wavesKeeper.signRequest(...args) : Promise.reject(availableError),
        /**@returns {Promise} */
        signTransaction: (...args) => isAvailable() ? wavesKeeper.signTransaction(...args) : Promise.reject(availableError),
        /**@returns {Promise} */
        signTransactionPackage: (...args) => isAvailable() ? wavesKeeper.signTransactionPackage(...args) : Promise.reject(availableError)
    }

})(window.WavesKeeper);

export default WavesKeeperClient;