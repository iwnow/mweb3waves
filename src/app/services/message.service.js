export const MessageService = (({ alert, confirm, prompt }) => {

    return {
        alert, confirm, prompt
    }

})(window);

export default MessageService;