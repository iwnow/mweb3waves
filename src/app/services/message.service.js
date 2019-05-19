export const MessageService = (window => {

    return {
        alert: (message) => window.alert(message),
        confirm: (message) => window.confirm(message),
        prompt: (message, _default) => window.prompt(message, _default)
    }

})(window);

export default MessageService;