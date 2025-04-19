const firebaseConfig = {
    apiKey: "AIzaSyANNRAup44ljHNmHFGkHBVVEOQC3kwSCz0",
    authDomain: "mattelgroup3real.firebaseapp.com",
    databaseURL: "https://mattelgroup3real-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mattelgroup3real",
    storageBucket: "mattelgroup3real.firebasestorage.app",
    messagingSenderId: "920790806376",
    appId: "1:920790806376:web:38fac82cc845f8c67ab0dd"
  };
  const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

  document.getElementById("palletform").addEventListener("submit",submitform);

  function submitform(e) {
    e.preventDefault();

    var name = getElementVal('nama');
    var tanggal = getElementVal('tanggal');
    var kode = getElementVal('kode');
    var isi = getElementVal('isi');

    saveMessages(name, tanggal, kode,isi);
  }

  const saveMessages = (name, tanggal, kode,isi) => {
    var newContactForm = mattelgroup3realdb.push();
  
    newContactForm.set({
      name: name,
      tanggal: tanggal,
      kode: kode,
      isi: isi,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }