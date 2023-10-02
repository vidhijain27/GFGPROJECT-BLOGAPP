// API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded...'
    },
    success: {
        title: 'success',
        message: 'Data successfully loaded'
    }, 
    responseFailure: {
        title: 'Error',
        message: 'An error occurred'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect'
    }

}

// API SERVCE CALL

export const SERVCE_URLS = {
    userSignup: { url: '/signup', method: 'POST' },
    userLogin: {url: '/login', method: 'POST' },
    uploadFile: { url: '/file/upload', method: 'POST' },
    // createPost: { url: '/create', method: 'POST' }
}