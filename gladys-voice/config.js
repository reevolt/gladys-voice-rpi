
module.exports = {
    snowboy: {
        hotword: process.env.RECOGNITION_HOTWORD || 'jarvis',
        resource: process.env.RECOGNITION_RESOURCE || './data/jarvis_custom.pmdl',
        sensitivity: process.env.RECOGNITION_SENSITIVITY || '0.4'
    },
    google: {
        projectId: process.env.GOOGLE_PROJECT_ID || 'your-project',
        keyFilename: process.env.GOOGLE_KEY_FILENAME || './data/api-key/credentials.json'
    },
    language: process.env.RECOGNITION_LANGUAGE ||'fr-FR',
    sound: process.env.RECOGNITION_SOUND || './data/affirmative.mp3',
    error: process.env.RECOGNITION_ERROR || './data/error.mp3'
};
