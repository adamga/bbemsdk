module.exports = {
    client_id: '331574060530-ngge946un6ghoqlkbsq812abpbe7srfm.apps.googleusercontent.com',
    client_secret: '2FWC3ENkCm8vG0hYTX868mgB',
    id_provider_domain: 'b175a8cc-a4f4-433a-a5fa-cda6ee69d8d8',

    // TODO - Share this with web. We can't right now because the common copy
    // doesn't use node.js exports.
    firebaseConfig: {
        apiKey: "AIzaSyDd3t6g_ZlbvtxvRjL-je6u55GuBh_Igb0",
        authDomain: "richberry-181815.firebaseapp.com",
        databaseURL: "https://richberry-181815.firebaseio.com",
        projectId: "richberry-181815",
        storageBucket: "",
        messagingSenderId: "331574060530"
    },

    botLibre: {
        application: 'your_botlibre_application',
        instance: 'your_botlibre_instance'
    },

    documentdb: {
        host: 'https://agknowadb.documents.azure.com:443/',
        authKey: 'mG6f0cNunSbss3zBujjNzjAI27hqo9Y40WTutziK2To8hwWfPbvmM4mNLx5DtjUEKfysM4mmIeww5gthHgi85A==',
        databaseId : "NoahDev",
        collectionId : "Items"
    }
}
